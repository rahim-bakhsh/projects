import { useEffect, useState } from "react";
// for navigating to route
import {useNavigate} from 'react-router-dom'
 const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    acceptanceEmail: true,
    employment: "",
    favColor: "",
  });
  // controllled component -> a component(like input) control by react state

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(formData.favColor);

 

  //   useEffect(() => {
  //     fetch("data.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // setFirstName(data.first_name);
  //         // setLastName(data.last_name);
  //         // setAge(data.age);
  //         setFormData(data);
  //       });
  //   }, []);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateToForm1 = ()=>{
    navigate("/form1")
  }

  return (
    <div className="container py-5">
      <button className="btn btn-info mb-2" onClick={navigateHome}>
        Back to Home
      </button>
      <button className="btn btn-info mb-2 ms-4" onClick={navigateToForm1}>
        Go to Form1
      </button>

      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          className="form-control"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />

        <input
          type="text"
          placeholder="Last name"
          className="form-control my-4"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="text"
          placeholder="Age"
          className="form-control"
          name="age"
          onChange={handleChange}
          value={formData.age}
        />

        <div className="form-floating mt-5">
          <textarea
            className="form-control text-area"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <div className="form-check form-check-inline py-3">
          <input
            type="checkbox"
            id="acccepta-email"
            name="acceptanceEmail"
            className="form-check-input"
            onChange={handleChange}
          />
          <label
            htmlFor="acccepta-email"
            className="text-light form-check-label"
          >
            I want to recive Emails from this App
          </label>
        </div>

        <fieldset className="form-check text-light mt-5  border-light">
          <legend>Current employment statue</legend>
          <input
            type="radio"
            name="employment"
            value="unemployment"
            onChange={handleChange}
            checked={formData.employment === "unemployment"}
            id="unemployed"
            className="form-check-input"
          />
          <label htmlFor="unemployed" className="form-check-label">
            Unemployed
          </label>
          <br />

          <input
            type="radio"
            name="employment"
            value="part-time"
            onChange={handleChange}
            checked={formData.employment === "part-time"}
            id="part-time"
            className="form-check-input"
          />
          <label htmlFor="part-time" className="form-check-label">
            Part-time
          </label>
          <br />

          <input
            type="radio"
            name="employment"
            value="full-time"
            onChange={handleChange}
            checked={formData.employment === "full-time"}
            id="full-time"
            className="form-check-input"
          />
          <label htmlFor="full-time" className="form-check-label">
            Full-time
          </label>
        </fieldset>
        <br />
        <br />

        <label htmlFor="colorsList" className="text-light d-block pb-1">
          Chooose your favorait color
        </label>
        <select
          name="favColor"
          id="colorsList"
          className="col-5 text-center"
          onChange={handleChange}
          value={formData.favColor}
        >
          <option value="">--choose--</option>
          <option value="dodgerblue">dodgerblue</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blueviolet">blueviolet</option>
        </select>
        <button className="btn btn-outline-warning d-block my-5">submit</button>
      </form>
    </div>
  );
}

// ctr+g bring the line number
