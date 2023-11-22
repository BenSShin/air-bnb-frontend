import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h3>Login</h3>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="row row-cols-2 g-3">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div>
              <input type="email" className="form-control" placeholder="Email" aria-label="email" />
            </div>
            <div>
              <input type="password" className="form-control" placeholder="Password" aria-label="password" />
            </div>
            <button type="submit" className="btn btn-outline-danger">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
