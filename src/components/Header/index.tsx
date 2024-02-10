import Image from "next/image";
import styled from "./styled.module.css";

import srcColumn1 from "../../../public/header/columna1.jpg";
import srcColumn2 from "../../../public/header/columna2.jpg";
import srcTop from "../../../public/header/top.jpg";
import srcBottom from "../../../public/header/bottom.jpg";

export const Header = () => {
  return (
    <header className={styled.header}>
      <picture id="home" className={styled.column + " " + styled.picture}>
        <Image className={styled.img} src={srcColumn1} alt=""></Image>
      </picture>
      <div className={styled.column}>
        <picture className={styled.picture + " " + styled.large}>
          <Image className={styled.img} src={srcTop} alt=""></Image>
        </picture>
        <div className={styled.containerText}>
          <h2>
            ULTIMATE <span className={styled.span}>SALE</span>
          </h2>
          <p>NEW COLLECTION</p>
          <button>SHOP NOW</button>
        </div>
        <picture className={styled.picture + " " + styled.large}>
          <Image className={styled.img} src={srcBottom} alt=""></Image>
        </picture>
      </div>
      <picture className={styled.column + " " + styled.picture}>
        <Image className={styled.img} src={srcColumn2} alt=""></Image>
      </picture>
    </header>
  );
};
