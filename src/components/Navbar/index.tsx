import styled from "./styled.module.css";

export const Navbar = () => {
  return (
    <nav className={styled.containerNav}>
      <h1 className={styled.title}>FASCO</h1>

      <ul className={styled.navbar}>
        <li>Home</li>
        <li>Deals</li>
        <li>New Arrivals</li>
        <li>Packages</li>
        <li>Sign in</li>
        <li className={styled.btn}>Sign Up</li>
      </ul>
    </nav>
  );
};
