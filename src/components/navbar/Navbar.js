import { useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const activeclass = ({ isActive }) => {
    return isActive ? "active" : "";
  }


  return (
    <div className="nav">
      <a id="navicon" href="#">
        C
      </a>
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
