import "../globals.css";

import Header from "./components/Header";
import ForWhom from "./components/ForWhom";
import ClassContent from "./components/ClassContent";
import Cta from "./components/Cta";
import About from "./components/About";
import FooterFabuloso from "./components/FooterFabuloso";

const open = true;

function FabulosoMundo() {
  return (
    <>
      {open && (
        <div>
          <Header />
          <ForWhom />
          <ClassContent />
          <Cta />
          <About />
          <FooterFabuloso />
        </div>
      )}
    </>
  );
}

export default FabulosoMundo;
