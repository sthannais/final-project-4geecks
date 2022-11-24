import React, { useState } from "react";
import {
  validateEmail,
  validInput,
  comparationPassword,
  validPhone,
} from "../helper/checkedForm";
import "../styles/MuniRegister.css";

const MuniRegister = () => {
  const [muni_firstname, setmuni_firstname] = useState("");
  const [muni_lastname, setmuni_lastname] = useState("");
  const [email, setmuni_email] = useState("");
  const [muni_phone, setmuni_phone] = useState("");
  const [password, setmuni_password] = useState("");
  const [muni_position, setmuni_position] = useState("");
  const [municipality, setmunicipality] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [formChecked, setFormChecked] = useState({
    email: "",
    password: "",
    newPassword: "",
  });

  const validationMuni = () => {
    const resultEmail = validateEmail(email);
    const objectValidation = {};
    if (!resultEmail) {
      objectValidation.email = "The field is empty.";
    }
    const resultName = validInput(muni_firstname);
    if (resultName) {
      objectValidation.muni_firstname = "The field is empty.";
    }
    const resultLastname = validInput(muni_lastname);
    if (resultLastname) {
      objectValidation.muni_lastname = "The field is empty.";
    }
    const resultPhone = validPhone(muni_phone);
    console.log(resultPhone, "phone");
    if (!resultPhone) {
      objectValidation.muni_phone = "The field must contain only numbers.";
    }
    const resultPosition = validInput(muni_position);
    if (resultPosition) {
      objectValidation.muni_position = "The field is empty.";
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
    console.log(objectValidation);
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
      const dataInput = validationMuni();
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
          profile_id: 2,
          muni_firstname: muni_firstname,
          muni_lastname: muni_lastname,
          muni_phone: muni_phone,
          muni_position: muni_position,
          municipality: municipality,
        }),
      };
      const data = await fetch(
        `${process.env.API_URL}api/management/create-municipality`,
        opts
      );
      const result = await data.json();
    } catch (error) {}
  };

  document.body.style.backgroundColor = "#0e66a3";
  const [messageMuni, setMessageMuni] = useState(false);

  return (
    <>
      {messageMuni && (
        <div className="alerta alert alert-primary text-center" role="alert">
          Your registration was successful!
        </div>
      )}
      <div className="MuniRegisterBox d-flex justify-content-center align-items-center border-success mx-2">
        <div className="col-md-6 p-3 bg-light">
          <h2 className="text-center text-primary">Register</h2>
          <form onSubmit={(event) => handleClick(event)}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  onChange={(e) => setmuni_firstname(e.target.value)}
                />
                {formChecked.muni_firstname && (
                  <span className="text-danger">
                    {formChecked.muni_firstname}
                  </span>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  onChange={(e) => setmuni_lastname(e.target.value)}
                />
                {formChecked.muni_lastname && (
                  <span className="text-danger">
                    {formChecked.muni_lastname}
                  </span>
                )}
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  id="inputEmail4"
                  onChange={(e) => setmuni_email(e.target.value)}
                />
                {formChecked.email && (
                  <span className="text-danger">{formChecked.email}</span>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="form-control"
                  id="inputEmail4"
                  onChange={(e) => setmuni_phone(e.target.value)}
                />
                {formChecked.muni_phone && (
                  <span className="text-danger">{formChecked.muni_phone}</span>
                )}
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  placeholder="Position"
                  className="form-control"
                  id="inputEmail4"
                  onChange={(e) => setmuni_position(e.target.value)}
                />
                {formChecked.muni_position && (
                  <span className="text-danger">
                    {formChecked.muni_position}
                  </span>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Municipality</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">Cerrillos</option>
                  <option value="2">Cerro Navia</option>
                  <option value="3">Conchalí</option>
                  <option value="4">El Bosque</option>
                  <option value="5">Estación Central</option>
                  <option value="6">Huechuraba</option>
                  <option value="7">Independencia</option>
                  <option value="8">La Cisterna</option>
                  <option value="9">La Florida</option>
                  <option value="10">La Granja</option>
                  <option value="11">La Pintana</option>
                  <option value="12">La Reina</option>
                  <option value="13">Las Condes</option>
                  <option value="14">Lo Barnechea</option>
                  <option value="15">Lo Espejo</option>
                  <option value="16">Lo Prado</option>
                  <option value="17">Macul</option>
                  <option value="18">Maipu</option>
                  <option value="19">Ñuñoa</option>
                  <option value="20">Pedro Aguirre Cerda</option>
                  <option value="21">Peñalolen</option>
                  <option value="22">Providencia</option>
                  <option value="23">Pudahuel</option>
                  <option value="24">Quilicura</option>
                  <option value="25">Quinta Normal</option>
                  <option value="26">Recoleta</option>
                  <option value="27">Renca</option>
                  <option value="28">San Joaquin</option>
                  <option value="29">San Miguel</option>
                  <option value="30">San Ramón</option>
                  <option value="31">Santiago</option>
                  <option value="32">Vitacura</option>
                </select>
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
                  onChange={(e) => setmuni_password(e.target.value)}
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
                className="p-1 mt-3 btn btn-primary col-2"
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

export default MuniRegister;
