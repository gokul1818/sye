function About() {
  return (
    <>
      <div style={{marginTop:'1rem',width:'100%',height:'10px'}} className="about-scroll pt-5"></div>

      <div className=" pt-3 container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="https://www.arinfotech.co.in/images/what-we-do.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              quam purus, ullamcorper id risus eu, consectetur consectetur
              purus. Etiam sagittis in eros ac sollicitudin.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
