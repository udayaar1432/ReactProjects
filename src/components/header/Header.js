import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


function Header() {
  const [userd, setUser] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("user"))
      setUser(userdata);
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    Navigate('/login');
  };
  return (

    <div className="header">

      <div>
        {userd &&
          <>
            <h3>{userd.user.username}</h3>
            <button onClick={handleLogout}>Logout</button>
          </>
        }
      </div>
      <div>
        <NavLink to="/Login">
          sign in/Guest
        </NavLink>

      </div>
      <div>
        <NavLink to="/Register">
          create Account
        </NavLink>

      </div>
    </div>
  );
}

export default Header;
