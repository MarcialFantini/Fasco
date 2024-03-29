"use client";
import { ProductsArticle } from "@/interfaces/products";
import style from "./style.module.css";

import { CardClothes } from "../CardClothes";

import src1 from "../../../public/category/1.webp";
import src2 from "../../../public/category/2.webp";
import src3 from "../../../public/category/3.webp";
import src4 from "../../../public/category/4.webp";
import src5 from "../../../public/category/5.webp";
import src6 from "../../../public/category/6.webp";

import src7 from "../../../public/category/7.webp";
import src8 from "../../../public/category/8.webp";
import src9 from "../../../public/category/9.webp";
import src10 from "../../../public/category/10.webp";
import src11 from "../../../public/category/11.webp";
import src12 from "../../../public/category/12.webp";
import { useState } from "react";

const data1: ProductsArticle[] = [
  {
    src: src1,
    alt: "al",
    title: "dress",
    category: "Women",
    price: 24,
  },
  {
    src: src2,
    alt: "al",
    title: "dress",
    category: "Women",
    price: 50,
  },
  {
    src: src3,
    alt: "al",
    title: "dress",
    category: "Women",
    price: 30,
  },
  {
    src: src4,
    alt: "al",
    title: "dress",
    category: "Women",
    price: 29,
  },
  {
    src: src5,
    alt: "al",
    title: "dress",
    category: "Women",
    price: 10,
  },
  {
    src: src6,
    alt: "al",
    title: "dress",
    category: "Women",
    price: 17,
  },
];
const data2: ProductsArticle[] = [
  {
    src: src7,
    alt: "al",
    title: "T-shirt",
    category: "Men",
    price: 14,
  },
  {
    src: src8,
    alt: "al",
    title: "T-shirt",
    category: "Men",
    price: 15,
  },
  {
    src: src9,
    alt: "al",
    title: "T-shirt",
    category: "Men",
    price: 29,
  },
  {
    src: src10,
    alt: "al",
    title: "T-shirt",
    category: "Men",
    price: 90,
  },
  {
    src: src11,
    alt: "al",
    title: "T-shirt",
    category: "Men",
    price: 8,
  },
  {
    src: src12,
    alt: "al",
    title: "T-shirt",
    category: "Men",
    price: 10,
  },
];

export const Arrivals = () => {
  const [isMen, setIsMen] = useState(true);

  const toggleIsMen = () => setIsMen(true);
  const toggleIsWomen = () => setIsMen(false);

  return (
    <section className={style.arrivals}>
      <div className={style.textContainer}>
        <h2 id="arrivals">New Arrivals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
        <div className={style.buttons}>
          <button onClick={toggleIsMen} className={style.btn}>
            {"Men’s Fashion"}
          </button>
          <button onClick={toggleIsWomen} className={style.btn}>
            {"Women’s Fashion"}
          </button>
        </div>
      </div>

      <div className={style.containerProducts}>
        {!isMen
          ? data1.map((item, index) => {
              return (
                <CardClothes
                  key={item.category + index}
                  item={item}
                ></CardClothes>
              );
            })
          : data2.map((item, index) => {
              return (
                <CardClothes
                  key={item.category + index}
                  item={item}
                ></CardClothes>
              );
            })}
      </div>

      <button className={style.btn}>{"View More"}</button>
    </section>
  );
};
