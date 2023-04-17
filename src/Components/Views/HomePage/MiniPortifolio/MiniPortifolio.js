import React from "react";
import { MiniPortifolioContainer } from "./style";
import Titulo from "../../../Titulo/Titulo";
import { Link } from "react-router-dom";
import ProjetosMini from "./ProjetosMini";

const MiniPortifolio = () => {
  return (
    <MiniPortifolioContainer className="section mini-port">
      <div className="infos">
        <Titulo texto="preencher" />
        <p className="p" data-aos="fade-down">
         Novos Projetos  <Link to="/projetos">Galeria</Link>
        </p>
      </div>
      <div className="projetos">
        <ProjetosMini />
      </div>
    </MiniPortifolioContainer>
  );
};

export default MiniPortifolio;
