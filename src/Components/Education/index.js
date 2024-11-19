import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Education = () => {
  const [education, setEducation] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const educationRef = ref(db, "education");
    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      setEducation(data);
    });
  }, []);
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="col-md-12">
          <h4>{education.education1}</h4>
          <h1 className="size-50">
            {education.education2} <br /> {education.education3}
          </h1>
          <div className="h-50" />
        </div>
        <div className="col-md-12">
          <ul className="timeline">
            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon" />
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">
                  {education.education4}
                </p>
                <h3>{education.education5}</h3>
                <h4>{education.education6}</h4>
                <p>
                  <strong>{education.education7}</strong>
                  <br />
                  {education.education8}
                </p>
              </div>
            </li>
            <li
              className="timeline-event"
              data-aos="fade-up"
              data-aos-delay=".2"
            >
              <label className="timeline-event-icon" />
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">
                  {education.education9}
                </p>
                <h3>{education.education10}</h3>
                <h4>{education.education11}</h4>
                <p>
                  <strong>{education.education12}</strong>
                  <br />
                  {education.education13}{" "}
                </p>
              </div>
            </li>
            <li
              className="timeline-event"
              data-aos="fade-up"
              data-aos-delay=".4"
            >
              <label className="timeline-event-icon" />
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">
                  {education.education14}
                </p>
                <h3>{education.education15}</h3>
                <h4>{education.education16}</h4>
                <p>
                  <strong>{education.education17}</strong>
                  <br />
                  {education.education18}{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Education;
