const Education = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="col-md-12">
          <h4>02</h4>
          <h1 className="size-50">
            My <br /> Education
          </h1>
          <div className="h-50" />
        </div>
        <div className="col-md-12">
          <ul className="timeline">
            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon" />
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">
                  Juli 2010 - Juli 2019
                </p>
                <h3>SD - SMP ADVENT TONDANO</h3>
                <h4>Consistently ranked in the top 5 of the class</h4>
                <p>
                  <strong>Academic Achiever and Active Participant</strong>
                  <br />
                  Excelled in academics and actively participated in various
                  activities, recognized as a disciplined and diligent student.
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
                  Juli 2019 - Juli 2022
                </p>
                <h3>SMA NEGERI 3 TONDANO</h3>
                <h4>
                  Served as the class treasurer and actively participated in
                  school organizations
                </h4>
                <p>
                  <strong>Academic Achiever and Active Participant</strong>
                  <br />
                  Excelled in academics with a focus on science subjects,
                  actively participated in student organizations, and recognized
                  as a reliable team leader.{" "}
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
                  Agustus 2022 - Present
                </p>
                <h3>UNIVERSITAS KLABAT</h3>
                <h4>Competitions, certifications, or academic recognition</h4>
                <p>
                  <strong>Academic Achiever and Active Participant</strong>
                  <br />
                  5th semester students, and have completed quite a lot of
                  courses, My journey so far has strengthened my ability to
                  solve complex problems.{" "}
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
