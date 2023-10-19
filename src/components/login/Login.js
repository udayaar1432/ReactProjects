import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "https://strapi-store-server.onrender.com/api/auth/local";

function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });

  const navigate = useNavigate();


  function handleClickGuest() {
    axios.post(LOGIN_URL, {
      identifier: "test@test.com",
      password: "secret"
    }).then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data))
      navigate("/home");
    })

  }
  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios.post(LOGIN_URL, {
      identifier: login.email,
      password: login.password,
      username:login.username
    }).then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data))
      setLogin({ password: "", email: "" });
      navigate("/home");
    })
    // Navigate("/")
  }
  return (
    <div className="login">

      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="email">Email</label> <br />
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label id="password">Password</label> <br />
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button className="btnlogin btn" >LOGIN</button>
        </div>
        <div>
          <button type="button" onClick={handleClickGuest} className="btnguest btn">GUEST USER</button>
        </div>
        <p>
          Not a member yet?<a href="#">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
