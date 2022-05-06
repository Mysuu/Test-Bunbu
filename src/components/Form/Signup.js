import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    let item = { username, password };
    fetch("http://192.168.1.23:3000/user", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
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
      <FormControl id="first-name" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setUserame(e.target.value)}
          value={username}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
