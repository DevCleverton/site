import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header/Header";
import { Home } from "./Components/Views/HomePage/Home/Home";
import ButtonToTop from "./Components/Button/ButtonToTop";
import Footer from "./Components/Footer/Footer";
import UserContext from "./Context/UserContext";
import Sobre from "./Components/Views/Sobre/Sobre";
import Projetos from "./Components/Views/Projetos/Projetos";
import Contato from "./Components/Views/Contato/Contato";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContext>
          <GlobalStyle />
          <ButtonToTop />
          <Header />
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </AnimatePresence>
          {/* <Footer /> */}
        </UserContext>
      </BrowserRouter>
    </><script>(function(w, d) { w.CollectId = "64385e012f45336a321656e9"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);</script>
  );
}

export default App;
