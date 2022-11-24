import React, { useState } from "react";
import {
	validateEmail,
	validInput,
	comparationPassword,
} from "../helper/checkedForm";
import "../styles/PeopleRegister.css";

const PeopleRegister = () => {
	document.body.style.backgroundColor = "#61831F";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [message, setMessage] = useState(false);
	const [formChecked, setFormChecked] = useState({
		email: "",
		password: "",
		newPassword: "",
	});

	const validationPeople = () => {
		const resultEmail = validateEmail(email);
		const objectValidation = {};
		if (!resultEmail) {
			objectValidation.email = "Enter email correctly.";
		}
		if (validInput(password)) {
			objectValidation.password = "The field is empty.";
		}
		if (validInput(newPassword)) {
			objectValidation.newPassword = "The field is empty.";
		}
		if (comparationPassword(password, newPassword) == false) {
			objectValidation.newPassword = "";
			objectValidation.newPassword = "Passwords do not match";
		}
		if (
			objectValidation.email ||
			objectValidation.password ||
			objectValidation.newPassword
		) {
			setFormChecked(objectValidation);
			return true;
		}
		setFormChecked({
			email: "",
			password: "",
			newPassword: "",
		});
		return false;
	};

	const handleClick = async (event) => {
		try {
			event.preventDefault();
			const dataInput = validationPeople();
			console.log("dataaaa", dataInput);
			if (dataInput) {
				return;
			}
			const opts = {
				method: "POST", // *GET, POST, PUT, DELETE, etc.
				mode: "cors", // no-cors, *cors, same-origin
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
					profile_id: 3,
				}),
			};
			const data = await fetch(
				`${process.env.API_URL}api/management/create-user`,
				opts
			);
			console.log({ data });
			const result = await data.json();
			console.log({ result });
			if (result) {
				setMessage("Successful registration!");
			}
		} catch (error) { }
	};

	return (
		<>
			{message && (
				<div className="alerta alert alert-primary text-center" role="alert">
					Your registration was successful!
				</div>
			)}
			<div className="PeopleRegisterBox d-flex justify-content-center align-items-center">
				<div className="col-md-6 p-5 bg-light">
					<h1 className="text-center text-primary">Register</h1>
					<form onSubmit={(event) => handleClick(event)}>
						<div className="row g-3">
							<div className="col-md-6">
								<label className="form-label">Email</label>
								<input
									type="text"
									placeholder="Email"
									className="form-control"
									id="inputEmail4"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								{formChecked.email && (
									<span className="text-danger">{formChecked.email}</span>
								)}
							</div>
						</div>
						<div className="row g-3">
							<div className="col-md-6">
								<label className="form-label">Password</label>
								<input
									type="password"
									placeholder="Password"
									className="form-control"
									id="inputPassword4"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								{formChecked.password && (
									<span className="text-danger">{formChecked.password}</span>
								)}
							</div>
							<div className="col-md-6">
								<label className="form-label">Repeat Password</label>
								<input
									type="password"
									placeholder="Repeat Password"
									className="form-control"
									id="inputPassword4"
									onChange={(e) => setNewPassword(e.target.value)}
								/>
								{formChecked.newPassword && (
									<span className="text-danger">{formChecked.newPassword}</span>
								)}
							</div>
						</div>
						<div className="d-flex justify-content-center align-items-center">
							<input
								className="p-1 mt-3 btn btn-primary col-3"
								type="submit"
								value="Register"
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default PeopleRegister;
