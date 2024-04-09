import React from "react";
import s from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";

export function Profile() {
  return (
    <main className={s.content}>
      <span>Main content</span>
      <div>avatar + discription</div>
      <MyPosts/>
    </main>
  );
}
