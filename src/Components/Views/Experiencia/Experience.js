import React, { useEffect, useRef } from "react";
import { ExperienceContainer } from "./style";
import Titulo from "../../Titulo/Titulo";
import { Link, useLocation } from "react-router-dom";

const Experience = ({ setIsRotate }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const experienceContainer = document.querySelector("#experience");
    if (pathname === "/sobre") {
      window.addEventListener("scroll", () => {
        const topPage = document.documentElement.scrollTop;
        const topExperience = experienceContainer.getBoundingClientRect().top;
        topPage >= topExperience - 100 ? setIsRotate(true) : setIsRotate(false);
      });
    }
  }, []);

  return (
    <ExperienceContainer id="experience" className="section">
      <div className="container-experience div">
        <Titulo texto="Experiência" />
        <div className="academica div">
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="item_experience"
          >
            Acadêmica <i className="fas fa-share"></i>
          </p>

          <p className="p" data-aos-delay="200" data-aos="fade-down">
            
           galeria{" "}
            <Link to="/projetos">galeria</Link>
          </p>

          <div
            className="tec-container"
            data-aos-delay="300"
            data-aos="fade-down"
          >
            <p>
              s
              tecnologias:
            </p>
            <div className="tec-list">
              <p className="tec_item">
                React JS <i className="fab fa-react fa-2x"></i>
              </p>

              <p className="tec_item">
                Scss <i className="fab fa-sass fa-2x"></i>
              </p>

              <p className="tec_item">
                Node JS <i className="fab fa-node fa-2x"></i>
              </p>

              <p className="tec_item">
                JavaScript <i className="fab fa-js-square fa-2x"></i>
              </p>

              <p className="tec_item">
                HTML5 <i className="fab fa-html5 fa-2x"></i>
              </p>

              <p className="tec_item">
                CSS <i className="fab fa-css3-alt fa-2x"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="exp-profissional div">
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            className="item_experience"
          >
            Profissional <i className="fas fa-share"></i>
          </p>

          <div className="empregos" data-aos-delay="500" data-aos="fade-down">
            <div className="card_emprego">
              <h3>Trabalhos </h3>

              <p className="nome_empresa"> New Post </p>

              <div className="tempo">
                <p>Atual</p>
                <p>2024</p>
              </div>

              <div className="texts">
                <p>
                  ESTE SITE É MERAMENTE ILUSTRATIVO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;
