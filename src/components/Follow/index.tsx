import Image from "next/image";
import styled from "./styled.module.css";
import srcDefault from "../../../public/rows/image.png";

export const Follow = () => {
  return (
    <section className={styled.containerSection}>
      <div>
        <h2>Follow Us On Instagram</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          adipisci nisi, cumque omnis dolorem est corrupti libero ipsa quibusdam
          sint alias minima illo, eaque eum deserunt nam recusandae culpa
          inventore!
        </p>
      </div>

      <picture className={styled.picture}>
        <Image className={styled.img} src={srcDefault} alt="hola"></Image>
        <Image
          className={styled.img + " " + styled.plus}
          src={srcDefault}
          alt="hola"
        ></Image>
      </picture>
    </section>
  );
};
