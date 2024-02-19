import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">SRIMY ENGINEERING</h1>
                {/* <p className="footer-text">
                  Srimy Engineering specializing in precision engineering solutions. we've carved a niche for ourselves as a trusted provider of high-quality engineering products and services.Our cutting-edge facilities and commitment to innovation allow us to deliver tailored solutions that meet the diverse needs of our clients. From concept to creation, our skilled team ensures excellence at every stage of the manufacturing process.At Srimy Engineering, customer satisfaction is at the core of everything we do. We prioritize integrity, reliability, and continuous improvement to exceed expectations and build long-lasting partnerships with our clients.
                </p> */}
              </div>
              <div className="col-md-3">
                <p className="footer-title">COMPANY</p>
                <ul>

                  <li>
                    <Link to="services" spy={true} smooth={true} duration={100} > Services </Link>

                  </li>

                  <li>
                    <Link to="products" spy={true} smooth={true} duration={100} > Products </Link>

                  </li>
                  <li>
                    <Link to="about-scroll" spy={true} smooth={true} duration={100}>About Us  </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={100}> Contact  </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">CONTACT</p>
                <ul>
                  <p className='footer-text'>
                    <i class="fas fa-envelope"></i>

                    {"  "}  srimyengineering@gmail.com
                  </p>
                  <p className='footer-text'>
                    <i class="fas fa-map-marker-alt"></i>
                    {" "}
                    13/B STREET, SRINIVASA NAGAR,PADI,CHENNAI-50
                  </p>
                  <p className='footer-text'>

                    <i class="fa fa-phone"></i>
                    {" "}
                    +91 9025487398
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row justify-content-center">
              <div className="col border-top boder text-center">
                <p className="footer-text mb-0 mt-2 " style={{ fontSize: "12px" }}>Copyright 2024 | All Rights Reserved | Powered by DigitFellas</p>

              </div>
              {/* <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >burhankcd@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" > Burhan #3265</Link>
                  </li>
                  <li>
                    <Link to="#" >0212 444 44 44</Link>
                  </li>
                </ul>
              </div> */}
              {/* <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/darkleas" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/burhankocadag0" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"> Linkedin</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(0)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
