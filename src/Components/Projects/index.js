import Projects1 from "../../../src/Assets/img/portfolio/Computer 1.jpg";
import Projects2 from "../../../src/Assets/img/portfolio/Computer 2.jpg";
import Projects3 from "../../../src/Assets/img/portfolio/Computer 3.jpg";
import Projects4 from "../../../src/Assets/img/portfolio/Bisni 1.jpg";
import Projects5 from "../../../src/Assets/img/portfolio/Bisnis 2.jpg";
import Projects6 from "../../../src/Assets/img/portfolio/Bisnis 3.jpg";
const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="col-md-12">
          <h4>03</h4>
          <h1 className="size-50">
            My <br /> Projects
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
                      src={Projects1}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>UI DESIGN</span>{" "}
                          <h3>UI Design of Luxury Car Wash</h3>
                          <em>Computer</em>{" "}
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
                      src={Projects2}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>MOBILE APPLICATION DEVELOPMENT</span>
                          <h3>Dormitory in UNKLAB</h3>
                          <em>Computer</em>{" "}
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
                      src={Projects3}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>WEB DESIGN</span>{" "}
                          <h3>Nissie's Petshop Airmadidi</h3>
                          <em>Computer</em>{" "}
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
                      src={Projects4}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>BUSINESS PROCESS REENGINEERING</span>
                          <h3>
                            Optimalization Business Process of Pabrik Paving
                            CV.Mitra Karya Nusantara
                          </h3>
                          <em>Business</em>{" "}
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
                      src={Projects5}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>MANAGEMENT INFORMATION SYSTEM</span>
                          <h3>Canteen Universitas Klabat</h3>
                          <em>Business</em>{" "}
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
                      src={Projects6}
                      alt="image"
                      className="img-responsive"
                    />
                    <div className="portfolio_item_hover">
                      <div className="portfolio-border clearfix">
                        <div className="item_info">
                          {" "}
                          <span>INFORMATION SYSTEM AUDIT</span>{" "}
                          <h3>LPMI Universitas Klabat</h3>
                          <em>Business</em>{" "}
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
