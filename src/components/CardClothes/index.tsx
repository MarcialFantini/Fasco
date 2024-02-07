import Image from "next/image";
import styled from "./styled.module.css";
import { ProductsArticle } from "@/interfaces/products";

import starSrc from "../../../public/icons/star.png";

export const CardClothes = ({ item }: { item: ProductsArticle }) => {
  const arr = [{}, {}, {}, {}, {}];

  return (
    <article className={styled.article}>
      <picture className={styled.picture}>
        <Image src={item.src} alt={item.alt} className={styled.img}></Image>
      </picture>
      <div className={styled.containerText}>
        <h4>{item.title}</h4>
        <p className={styled.category}>{item.category}</p>
        <p className={styled.price}>${item.price}</p>
        <div className={styled.stars}>
          {arr.map((item, index) => (
            <picture key={"star" + index}>
              <Image src={starSrc} alt="star"></Image>
            </picture>
          ))}
        </div>
      </div>
    </article>
  );
};
