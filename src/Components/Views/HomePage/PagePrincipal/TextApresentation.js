import React, { useEffect, useRef, memo } from "react";

const TextApresentation = () => {
  const linha1 = useRef();
  const linha2 = useRef();
  const linha3 = useRef();

  const linha1Texto = "Presença digital ".split("");
  const linha2Texto = "Softwares".split("");
  const linha3Texto = "Sites inteligentes".split("");

  useEffect(() => {
    linha1Texto.forEach((letra, index) => {
      const span = document.createElement("span");
      span.classList.add("letter");

      span.innerHTML = letra;

      setTimeout(() => {
        linha1.current.append(span);
        span.classList.add("hover");
      }, 30 * index);
    });

    linha2Texto.forEach((letra, index) => {
      const span = document.createElement("span");

      if (letra === " ") span.classList.add("space-letter");

      span.innerHTML = letra;

      setTimeout(() => {
        setTimeout(() => {
          linha2.current.append(span);
          span.classList.add("hover");
        }, 30 * index);
      }, 400);
    });

    linha3Texto.forEach((letra, index) => {
      const span = document.createElement("span");

      if (letra === " ") span.classList.add("space-letter");

      span.innerHTML = letra;

      setTimeout(() => {
        setTimeout(() => {
          linha3.current.append(span);
          span.classList.add("hover");
        }, 30 * index);
      }, 24 * 30);
    });
  }, []);

  return (
    <a className="apresentation">
      <div ref={linha1} className="linha"></div>
      <div ref={linha2} className="linha"></div>
      <div ref={linha3} className="linha"></div>
    </a>
  );
};

export default memo(TextApresentation);
