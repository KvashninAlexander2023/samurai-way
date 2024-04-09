import React from "react";
import s from "./Header.module.css";
import headerLogoImg from "../../assets/img/logo.webp";

export function Header() {
  return (
    <header className={s.header}>
      <img src={headerLogoImg} alt="*" />
    </header>
  );
}
