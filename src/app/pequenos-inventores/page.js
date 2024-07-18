import style from "./pequenosinventores.module.css";

import Header from "./components/Header";
import About from "./components/About";
import Content from "./components/Content";
import Info from "./components/Info";

const PequenosInventores = () => {
  return (
    <div className={style.wrap}>
      <Header />
      <About />
      <Content />
      <Info />
    </div>
  );
};

export default PequenosInventores;
