import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = async () => {
    let item = { username, password };
    fetch("http://192.168.1.23:3000/user/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(item),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        return Promise.reject("Error");
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/todo");
      })
      .catch((err) => console.log(err));
  };

  return (
    <VStack spacing="10px">
      <FormControl id="text" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          value={username}
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter Password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
