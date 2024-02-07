import { StaticImageData } from "next/image";

export interface ProductsArticle {
  src: string | StaticImageData;
  alt: string;
  title: string;
  category: string;
  price: number | string;
}
