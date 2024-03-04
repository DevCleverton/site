import React from "react";
import { Link } from "react-router-dom";
import Titulo from "../../Titulo/Titulo";

const TextContainerAbout = () => {
  return (
    <div className="text_about div">
      <Titulo texto="Sobre Mim" />
      <p className="p" data-aos="fade-down" data-aos-delay="300">
        Desenvolver. 
        paixão por animações e uma criação intuitiva e dinâmica
        para o usuário
      </p>
      <p className="p" data-aos="fade-down" data-aos-delay="600">
        o proativo, 
      </p>
      <p className="p" data-aos="fade-down" data-aos-delay="900">
         interessado! peço que por favor entre em{" "}
        <Link to="/contato">Contato</Link> comigo para podermos transformar sua
        ideia em realidade!
      </p>
    </div>
  );
};

export default TextContainerAbout;
