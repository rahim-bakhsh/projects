import { useState } from "react";
import App from "./../App";

export default function Form1() {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //   gathering all data state in one place
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    comment: "",
    acceptanceEmail: "false",
    course: "",
  });

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  // console.log(value);
  console.log(formData.course);

  //   //   for first name
  //   const changeHandler1 = (event) => {
  //     return setFirstName(event.target.value);
  //   };
  //   //   for email
  //   const changeHandlerEmail = (event) => {
  //     return setEmail(event.target.value);
  //   };
  //   // for password
  //   const changeHandlerPassword = (event) => {
  //     return setPassword(event.target.value);
  //   };

  //   console.log(formData.firstName);
  //   console.log(formData.email);
  //   console.log(formData);

  return (
    <div className="container">
      <div>
        <label className="form-label text-light" htmlFor="first_name">
          first name
        </label>
        <input
          type="text"
          id="first_name"
          name="firstName"
          className="form-control"
          onChange={changeHandler}
          placeholder="john"
          //   value={firstName}
          value={formData.firstName}
        />
      </div>
      <div>
        <label className="form-label text-light" htmlFor="email_add">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email_add"
          className="form-control"
          placeholder="john@gmail.com"
          onChange={changeHandler}
          //   value={email}
          value={formData.email}
        />
      </div>
      <div>
        <label className="form-label text-light" htmlFor="pass_key">
          password
        </label>
        <input
          type="password"
          name="password"
          id="pass_key"
          className="form-control"
          onChange={changeHandler}
          //   value={password}
          value={formData.password}
        />
      </div>
      <div className="form-floating mt-5">
        <textarea
          className="form-control text-area"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          name="comment"
          onChange={changeHandler}
          value={formData.comment}
        />
        <label htmlFor="floatingTextarea">Comments</label>
      </div>
      <div className="form-check pt-2">
        <input
          className="form-check-input"
          name="acceptanceEmail"
          type="checkbox"
          id="privacy"
          onChange={changeHandler}
        />
        <label htmlFor="privacy" className="text-light form-check-label">
          want email form these App
        </label>
      </div>
      <fieldset className="form-check text-light mt-5">
        <legend>Courses</legend>
        <input
          className="form-check-input"
          type="radio"
          name="course"
          onChange={changeHandler}
          value="html"
          checked={formData.course === "html"}
          id="html"
        />
        <label className="form-check-label" htmlFor="html">
          Html
        </label>
        <br />
        <input
          className="form-check-input"
          type="radio"
          name="course"
          onChange={changeHandler}
          value="css"
          checked={formData.course === "css"}
          id="css"
        />
        <label className="form-check-label" htmlFor="css">
          CSS
        </label>
        <br />
        <input
          className="form-check-input"
          type="radio"
          name="course"
          onChange={changeHandler}
          value="js"
          checked={formData.course === "js"}
          id="js"
        />
        <label className="form-check-label" htmlFor="js">
          javascript
        </label>
        <br />
        <input
          className="form-check-input"
          type="radio"
          name="course"
          onChange={changeHandler}
          value="ES6"
          checked={formData.course === "ES6"}
          id="ES6"
        />
        <label className="form-check-label" htmlFor="ES6">
          ES6
        </label>
      </fieldset>
    </div>
  );
}
