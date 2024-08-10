import {
	Button,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	const submitHandler = () => {};
	return (
		<VStack spacing="5px">
			<FormControl isRequired id="email">
				<FormLabel>Enter Your Email</FormLabel>
				<Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
			</FormControl>

			<FormControl isRequired id="password">
				<FormLabel>Enter password</FormLabel>
				<InputGroup>
					<Input
						type={show ? "text" : "password"}
						placeholder="Enter password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<InputRightElement>
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>

			<Button
				bgColor="blueviolet"
				width="100%"
				color="white"
				style={{ marginTop: 15 }}
				onClick={submitHandler}
			>
				Login
			</Button>

			<Button
				bgColor="red"
				width="100%"
				color="white"
				style={{ marginTop: 5 }}
				onClick={() => {
					setEmail("guest@example.com");
					setPassword("123456");
				}}
			>
				Get Guest User Credentials
			</Button>
		</VStack>
	);
};

export default Login;
