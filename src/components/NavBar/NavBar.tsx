import React from "react";
import s from "./NavBar.module.css";

export function NavBar() {
  return (
    <nav className={s.nav}>
      <ul className={s.item}>
        <li>
          <a href="#" className={`${s.item} ${s.isActive} `}>Profile</a>
        </li>
        <li>
          <a>Messages</a>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
      </ul>
    </nav>
  );
}
