import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };
  return (
    <div id="signup" className="flex-container">
      <h3>Signup</h3>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div id="signupform" className="row row-cols-2 g-3">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div>
              <input name="name" type="name" className="form-control" placeholder="Name" aria-label="name" />
            </div>
            <div>
              <input name="email" type="email" className="form-control" placeholder="Email" aria-label="email" />
            </div>
            <div>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="password"
              />
            </div>
            <div>
              <input
                name="password confirmation"
                type="password"
                className="form-control"
                placeholder="Password confirmation"
                aria-label="password-confirmation"
              />
            </div>
            <button type="submit" className="btn btn-outline-danger">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
