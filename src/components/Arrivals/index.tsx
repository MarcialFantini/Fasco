import { ProductsArticle } from "@/interfaces/products";
import style from "./style.module.css";

import srcDefault from "../../../public/header/top.jpg";
import { CardClothes } from "../CardClothes";

const data: ProductsArticle[] = [
  {
    src: srcDefault,
    alt: "al",
    title: "string",
    category: "Mens",
    price: 3,
  },
  {
    src: srcDefault,
    alt: "al",
    title: "string",
    category: "Mens",
    price: 3,
  },
  {
    src: srcDefault,
    alt: "al",
    title: "string",
    category: "Mens",
    price: 3,
  },
  {
    src: srcDefault,
    alt: "al",
    title: "string",
    category: "Mens",
    price: 3,
  },
  {
    src: srcDefault,
    alt: "al",
    title: "string",
    category: "Mens",
    price: 3,
  },
  {
    src: srcDefault,
    alt: "al",
    title: "string",
    category: "Mens",
    price: 3,
  },
];

export const Arrivals = () => {
  return (
    <section className={style.arrivals}>
      <div className={style.textContainer}>
        <h2>New Arrivals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
        <div className={style.buttons}>
          <button>{"Men’s Fashion"}</button>
          <button>{"Women’s Fashion"}</button>
          <button>{"Women Accessories"}</button>
          <button>{"Men Accessories"}</button>
          <button>{"Discount Deals"}</button>{" "}
        </div>
      </div>

      <div className={style.containerProducts}>
        {data.map((item) => {
          return <CardClothes item={item}></CardClothes>;
        })}
      </div>
    </section>
  );
};
