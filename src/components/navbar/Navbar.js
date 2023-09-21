import { BsFillMoonFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
function Navbar() {
    return (
        <div className="nav">
            <a id="navicon" href="#">
                C
            </a>

            <div className="navbar ">
                <div className="pages">
                    <a href="#">Home</a>
                </div>
                <div className="pages">
                    <a href="#">About</a>
                </div>
                <div className="pages">
                    <a href="#">Product</a>
                </div>
                <div className="pages">
                    <a href="#">cart</a>
                </div>
            </div>
            <div className="cart">
                <div>
                    <a href="#">
                        <BsFillMoonFill />
                    </a>
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
