import Image from "next/image";
import styled from "./styled.module.css";

import srcDefault1 from "../../../public/Subscribe/column1.png";
import srcDefault2 from "../../../public/Subscribe/column2.png";

export const Subscribe = () => {
  return (
    <section className={styled.containerSubscribe}>
      <picture>
        <Image className={styled.img} src={srcDefault1} alt=""></Image>
      </picture>
      <div className={styled.containerText}>
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin{" "}
        </p>
        <input type="text" placeholder="michael@ymail.com" />
        <button>Subscribe Now</button>
      </div>
      <picture>
        <Image className={styled.img} src={srcDefault2} alt=""></Image>
      </picture>
    </section>
  );
};
