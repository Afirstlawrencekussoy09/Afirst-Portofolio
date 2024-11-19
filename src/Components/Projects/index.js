import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Projects1 from "../../../src/Assets/img/portfolio/Computer 1.jpg";
import Projects2 from "../../../src/Assets/img/portfolio/Computer 2.jpg";
import Projects3 from "../../../src/Assets/img/portfolio/Computer 3.jpg";
import Projects4 from "../../../src/Assets/img/portfolio/Bisni 1.jpg";
import Projects5 from "../../../src/Assets/img/portfolio/Bisnis 2.jpg";
import Projects6 from "../../../src/Assets/img/portfolio/Bisnis 3.jpg";
const Projects = () => {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const projectsRef = ref(db, "projects");
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      setProjects(data);
    });
  }, []);
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="col-md-12">
          <h4>{projects.projects1}</h4>
          <h1 className="size-50">
            {projects.projects2} <br /> {projects.projects3}
          </h1>
        </div>
        {/* main container */}
        <div className="main-container portfolio-inner clearfix">
          {/* portfolio div */}
          <div className="portfolio-div">
            <div className="portfolio">
              {/* portfolio_container */}
              <div
                className="no-padding portfolio_container clearfix"
                data-aos="fade-up"
              >
                {/* single work */}
                <div className="col-md-4 col-sm-6  fashion logo">
                  <a
                    id="demo01"
                    href="#animatedModal"
                    className="portfolio_item"
                  >
                    {" "}
                    <img
                      src={projects.img1 || ""}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>{projects.projects4}</span>{" "}
                          <h3>{projects.projects5}</h3>
                          <em>{projects.projects6}</em>{" "}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* end single work */}
                {/* single work */}
                <div className="col-md-4 col-sm-6 ads graphics">
                  <a
                    id="demo02"
                    href="#animatedModal"
                    className="portfolio_item"
                  >
                    {" "}
                    <img
                      src={projects.img2 || ""}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>{projects.projects7}</span>
                          <h3>{projects.projects8}</h3>
                          <em>{projects.projects9}</em>{" "}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* end single work */}
                {/* single work */}
                <div className="col-md-4 col-sm-6 photography">
                  <a
                    id="demo03"
                    href="#animatedModal"
                    className="portfolio_item"
                  >
                    {" "}
                    <img
                      src={projects.img3 || ""}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>{projects.projects10}</span>{" "}
                          <h3>{projects.projects11}</h3>
                          <em>{projects.projects12}</em>{" "}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* end single work */}
                {/* single work */}
                <div className="col-md-4 col-sm-6 fashion ads">
                  <a
                    id="demo04"
                    href="#animatedModal"
                    className="portfolio_item"
                  >
                    {" "}
                    <img
                      src={projects.img4 || ""}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>{projects.projects13}</span>
                          <h3>{projects.projects14}</h3>
                          <em>{projects.projects15}</em>{" "}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* end single work */}
                {/* single work */}
                <div className="col-md-4 col-sm-6 graphics ads">
                  <a
                    id="demo05"
                    href="#animatedModal"
                    className="portfolio_item"
                  >
                    {" "}
                    <img
                      src={projects.img5 || ""}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>{projects.projects16}</span>
                          <h3>{projects.projects17}</h3>
                          <em>{projects.projects18}</em>{" "}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* end single work */}
                {/* single work */}
                <div className="col-md-4 col-sm-6 photography">
                  <a
                    id="demo06"
                    href="#animatedModal"
                    className="portfolio_item"
                  >
                    {" "}
                    <img
                      src={projects.img6 || ""}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>{projects.projects19}</span>{" "}
                          <h3>{projects.projects20}</h3>
                          <em>{projects.projects21}</em>{" "}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* end single work */}
              </div>
              {/* end portfolio_container */}
            </div>
            {/* portfolio */}
          </div>
          {/* end portfolio div */}
        </div>
        {/* end main container */}
      </div>
    </div>
  );
};

export default Projects;
