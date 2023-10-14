import { useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState({ id: "", username: "" });
  const navigate = useNavigate();

  const activeclass = ({ isActive }) => {
    return isActive ? "active" : "";
  }
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("user"))

      setUser(userdata);
    // set required data to the state
    // then display the state information in jsx

    // navigate("/home")
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };
  // console.log(user.username);
  return (
    <div className="nav">

      <a id="navicon" href="#">
        C
      </a>
      <div>

          <div>
            {/* <p>hi, {JSON.stringify(user.user.username)}</p> */}
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>

      <div className="navbar ">
        <div className="pages">
          <NavLink className={"activeclass"} to="/home">
            Home
          </NavLink>

        </div>
        <div className="pages">
          <NavLink className={"activeclass"} to="/about">
            About
          </NavLink>

        </div>
        <div className="pages">
          <NavLink className={"activeclass"} to="/products" >
            products
          </NavLink>
        </div>
        <div className="pages">
          <NavLink className={"activeclass"} to="/cart" >cart
          </NavLink>
        </div>
      </div>
      <div className="cart">
        <div>
          <button>
            <BsFillMoonFill />
          </button>
        </div>

        <div>
          <a href="#">
            <BsFillCartDashFill />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
