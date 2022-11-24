import React, { useContext, useState } from "react";
import { validateEmail } from "../helper/checkedForm";
import "../styles/Forgot.css";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [formChecked, setFormChecked] = useState({
    email: "",
  });

  const validationForgot = () => {
    const resultEmail = validateEmail(email);
    const objectValidation = {};
    if (!resultEmail) {
      objectValidation.email = "Enter email correctly.";
    }
    if (objectValidation.email) {
      setFormChecked(objectValidation);
      return true;
    }
    setFormChecked({
      email: "",
    });
    return false;
  };

  const handleClick = async (event) => {
    try {
      event.preventDefault();
      const dataInput = validationForgot();
      console.log("dataaaa", dataInput);
      if (dataInput) {
        return;
      }
      console.log("Esto debe verse");
      const opts = {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      };
      const data = await fetch(
        `${process.env.API_URL}api/management/create-user`,
        opts
      );
      console.log({ data });
      const result = await data.json();
      console.log({ result });
    } catch (error) {
      console.error("Hay un error, revisa", error);
    }
  };

  document.body.style.backgroundColor = "#1E4A5F";
  return (
    <div className=" forgotbox d-flex justify-content-center align-items-center">
      <div className=" forgotitem col-md-4 mb-5 p-5 shadow-sm bg-light border rounded-3">
        <h1 className="text-center mb-4 text-primary">Forgot Password</h1>
        <form onSubmit={(event) => handleClick(event)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formChecked.email && (
              <span className="text-danger">{formChecked.email}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
