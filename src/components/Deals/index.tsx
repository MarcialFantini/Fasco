"use client";
import { useState } from "react";
import style from "./styled.module.css";
import srcImage from "../../../public/header/columna1.jpg";
import Image from "next/image";
import { title } from "process";

const listImage = [
  { srcImage: srcImage, alt: "title" },
  { srcImage: srcImage, alt: "title" },

  { srcImage: srcImage, alt: "title" },

  { srcImage: srcImage, alt: "title" },
];

export const Deals = () => {
  const [indexSelect, setIndexSelect] = useState(0);

  const plus = () => {
    if (indexSelect >= listImage.length - 1) {
      return;
    }
    setIndexSelect(indexSelect + 1);
  };

  const less = () => {
    if (indexSelect <= 0) {
      return;
    }
    setIndexSelect(indexSelect - 1);
  };
  return (
    <section className={style.containerAll}>
      <div className={style.containerText}>
        <h2>Deals Of The Month</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel deserunt
          reiciendis, numquam, quidem perspiciatis totam eius alias distinctio
          hic magni voluptatem, itaque obcaecati aut consectetur quis similique
          laboriosam libero aliquam!
        </p>
        <button>Buy Now</button>
        <h3>Hurry, Before It's Too Late!</h3>
      </div>
      <div className={style.containerList}>
        <div style={{ left: `-${indexSelect * 50}%` }} className={style.row}>
          {listImage.map((item, index) => {
            return (
              <picture
                style={{ height: index !== indexSelect ? "80%" : "100%" }}
                className={style.itemRow}
                key={index + title}
              >
                <Image
                  className={style.img}
                  src={item.srcImage}
                  alt={item.alt}
                ></Image>
              </picture>
            );
          })}
        </div>
        <div className={style.btn}>
          <button onClick={plus}>+</button>
          <button onClick={less}>{"-"}</button>
        </div>
      </div>
    </section>
  );
};
