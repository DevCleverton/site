import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Titulo from "../../../Titulo/Titulo";
import AnimationSobre from "./AnimationSobre";
import { SobreContainer } from "./style";

import Aos from "aos";
import "aos/dist/aos.css";

const SobreIntroducao = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <SobreContainer className="section" id="sobre">
      <div className="sobre">
        <div>
          <Titulo texto="O que estou fazendo?" />
        </div>
        <div className="texts">
          <p className="p" data-aos="fade-down">
            introduçao
          </p>

          <p className="p" data-aos="fade-down">
            Desde o começo 
          </p>

          <p className="p" data-aos="fade-down">
            Sigo estudando as stacks de front end, 
          </p>

          <p className="p" data-aos="fade-down">
            Mais  experiência você pode encontrar em{" "}
            <Link to="/sobre">Sobre</Link>{" "}
          </p>
        </div>
      </div>
      <AnimationSobre />
    </SobreContainer>
  );
};

export default SobreIntroducao;
