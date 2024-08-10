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

const Signup = () => {
	const [show, setShow] = useState("false");
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmpassword, setConfirmpassword] = useState();
	const [pic, setPic] = useState();

	const handleClick = () => {
		setShow(!show);
	};

	const postDetails = (pics) => {};

	const submitHandler = () => {};

	return (
		<VStack spacing="5px">
			<FormControl isRequired id="first-name">
				<FormLabel>Enter Your Name</FormLabel>
				<Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
			</FormControl>

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

			<FormControl isRequired id="confirmPassword">
				<FormLabel>Confirm Password</FormLabel>
				<InputGroup>
					<Input
						type={show ? "text" : "password"}
						placeholder="Comfirm Password"
						onChange={(e) => setConfirmpassword(e.target.value)}
					/>
					<InputRightElement>
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>

			<FormControl id="pic">
				<FormLabel>Upload your Picture</FormLabel>
				<Input
					type="file"
					p="1.5"
					accept="image/*"
					onChange={(e) => postDetails(e.target.files[0])}
				/>
			</FormControl>

			<Button
				bgColor="blueviolet"
				width="100%"
				color="white"
				style={{ marginTop: 15 }}
				onClick={submitHandler}
			>
				Sign Up
			</Button>
		</VStack>
	);
};

export default Signup;
