import { useState } from "react";

export default function SignUpForm() {
  const [formInfo, setFormInfo] = useState({
    email: ``,
    password: ``,
    confPassword: ``,
    privacy: false,
  });

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;

    setFormInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formInfo.password !== formInfo.confPassword) {
      document.getElementById("confirm_password").classList.add("error");
      document.getElementById("confirm_password").focus();
      document.getElementById("confirm_password").value = "";
      document.getElementById("confirm_password").placeholder =
        "your retyped password doesn`t match";
    } else alert("you signed up successfully");
  };

  return (
    <div className="container">
      <div className="card col-11 col-lg-4 position-absolute top-0 bottom-0 start-0 end-0 m-auto p-5">
        <form action="" method="POST">
          <input
            type="email"
            name="email"
            id="email_address"
            placeholder="Email address"
            className="form-control mb-4"
            onChange={changeHandler}
            value={formInfo.email}
          />
          <input
            type="password"
            name="password"
            id="pass_key"
            placeholder="Password"
            className="form-control mb-4"
            onChange={changeHandler}
            value={formInfo.password}
          />
          <input
            type="password"
            name="confPassword"
            id="confirm_password"
            placeholder="Confirm password"
            className="form-control mb-4"
            onChange={changeHandler}
            value={formInfo.confPassword}
          />
          <div className="form-check">
            <input
              type="checkbox"
              name="privacy"
              id="privacy"
              className="form-check-input"
              onChange={changeHandler}
            />
            <label htmlFor="privacy" className="form-check-label">
              I want to join the newsletter
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-sm btn-primary d-block m-auto mt-5  rounded-3 col-12 btn-outline-dark border-0 text-light shadow"
            onClick={submitHandler}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
