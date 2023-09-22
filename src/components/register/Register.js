import { useState } from "react";
// import { Link } from 'react-router-dom';

function Register() {
  const [login, setLogin] = useState({ Username: "", email: "", password: "", });
  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(login);
    setLogin({ Username: "", password: "", email: "" });
  }

  return (
    <div className="login">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="name">Username</label> <br />
          <input
            type="text"
            name="Username"
            value={login.Username}
            onChange={handleChange}
            required
          />
        </div>

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
          <button className="btnlogin btn">REGISTER</button>
        </div>
        <p>
          {/* Already a member?<Link to="/">Login</Link> */}
        </p>
      </form>
    </div>
  );
  }

export default Register;
