import React, { useState, useEffect } from "react";
import Img from "../../Assets/img/myphot.jpeg";
import { getDatabase, ref, onValue } from "firebase/database";
const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="col-md-6" data-aos="fade-up">
          <h4>{about.about1}</h4>
          <h1 className="size-50">
            {about.about2} <br />
            {about.about3}
          </h1>
          <div className="h-50" />
          <p>{about.desc}</p>
          <p>{about.desc2}</p>
          <div className="h-50" />
          <img src={about.image2 || ""} width={230} />
          <div className="h-50" />
        </div>
        <div className="col-md-6 about-img-div">
          <div
            className="about-border"
            data-aos="fade-up"
            data-aos-delay=".5"
          />
          <img
            src={about.image1 || ""}
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
