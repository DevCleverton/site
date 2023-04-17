import React, { useEffect, useRef, memo } from "react";

const TextApresentation = () => {
  const linha1 = useRef();
  const linha2 = useRef();
  const linha3 = useRef();

  const linha1Texto = "Seo".split("");
  const linha2Texto = "Dev".split("");
  const linha3Texto = "Cleverton".split("");

  useEffect(() => {
    linha1Texto.forEach((letra, index) => {
      const span = document.createElement("span");
      span.classList.add("letter");

      span.innerHTML = letra;

      setTimeout(() => {
        linha1.current.append(span);
        span.classList.add("hover");
      }, 40 * index);
    });

    linha2Texto.forEach((letra, index) => {
      const span = document.createElement("span");

      if (letra === " ") span.classList.add("space-letter");

      span.innerHTML = letra;

      setTimeout(() => {
        setTimeout(() => {
          linha2.current.append(span);
          span.classList.add("hover");
        }, 50 * index);
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
        }, 50 * index);
      }, 24 * 30);
    });
  }, []);

  return (
    <a className="apresentation">
      <div ref={linha1} className="linha"></div>
<script>(function(w, d) { w.CollectId = "643d41a12f45336a32165d86"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);</script>
      <div ref={linha2} className="linha"></div>
      <div ref={linha3} className="linha"></div>
    </a>
  );
};

export default memo(TextApresentation);
