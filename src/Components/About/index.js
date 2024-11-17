import Signature from "../../Assets/img/Screenshot (25).png";
import AboutImg from "../../Assets/img/Afirst.jpg";
const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="col-md-6" data-aos="fade-up">
          <h4>01</h4>
          <h1 className="size-50">
            Know <br /> About me
          </h1>
          <div className="h-50" />
          <p>
          Hi, I’m Afirst, a 19-year-old student currently studying Computer Science at Universitas Klabat. 
          I have a strong interest in computer technology and a good understanding of the basics, 
          including hardware, software, and troubleshooting.
          </p>
          <p>
          In my free time, I enjoy exploring new technologies to enhance my skills, 
          such as basic programming and data management. 
          I believe that continuous learning and growth will enable me to contribute 
          to technological advancements in the future.
          </p>
          <div className="h-50" />
          <img src={Signature} width={230} />
          <div className="h-50" />
        </div>
        <div className="col-md-6 about-img-div">
          <div
            className="about-border"
            data-aos="fade-up"
            data-aos-delay=".5"
          />
          <img
            src={AboutImg}
            width={400}
            className="img-responsive"
            alt
            align="right"
            data-aos="fade-right"
            data-aos-delay={0}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
