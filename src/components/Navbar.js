import { Link } from "react-scroll";
import logo from "../assets/syeLogo.jpg";

function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center ">

            <h1 className="logo d-flex align-items-center">
              <Link
                spy={true}
                smooth={true}
                duration={100}
                to="headerbg"
                style={{ cursor: "pointer" }}
              >
                <img src={logo} className="logoImg" />
              </Link>
              <p className="mb-0 ms-3 fs-5 my-1">SRIMY ENGINEERING</p>
            </h1>
            <ul className="bar mt-2 mb-2">
              <li>
                <Link
                  onClick={openBar}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={100}
                  to="headerbg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={openBar}
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  onClick={openBar}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={100}
                  to="products"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  onClick={openBar}
                  to="about-scroll"
                  spy={true}
                  smooth={true}
                  duration={100}
                  activeClass="active"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={openBar}
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  onClick={openBar}
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
            <div className="button" onClick={openBar}>
              <div className="burger"></div>
              <div className="burger"></div>
              <div className="burger"></div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;
