"use client";
import { scrollToElement } from "@/utils/scrollToElement";
import styled from "./styled.module.css";

export const Navbar = () => {
  return (
    <nav className={styled.containerNav}>
      <h1 className={styled.title}>FASCO</h1>

      <ul className={styled.navbar}>
        <li onClick={() => scrollToElement("home")}>Home</li>
        <li onClick={() => scrollToElement("deals")}>Deals</li>
        <li onClick={() => scrollToElement("arrivals")}>New Arrivals</li>
      </ul>
    </nav>
  );
};
