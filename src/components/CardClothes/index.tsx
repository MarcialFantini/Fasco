"use client";
import Image from "next/image";
import styled from "./styled.module.css";
import { ProductsArticle } from "@/interfaces/products";

import starSrc from "../../../public/icons/star.png";
import { Suspense, useState } from "react";

export const CardClothes = ({ item }: { item: ProductsArticle }) => {
  const [load, setLoad] = useState(false);
  const arr = [{}, {}, {}, {}, {}];

  const loadSet = () => setLoad(true);

  return (
    <article className={styled.article}>
      <picture className={styled.picture}>
        <div
          className={styled.loadDiv + " " + (load ? styled.loadDivExit : "")}
        ></div>
        <Suspense>
          <Image
            onLoad={loadSet}
            src={item.src}
            alt={item.alt}
            className={styled.img + " " + (load ? styled.loadImg : "")}
          ></Image>
        </Suspense>
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
