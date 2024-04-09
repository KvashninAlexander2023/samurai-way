import React from "react";
import s from "./Profile.module.css";

export function Profile() {
  return (
    <main className={s.content}>
      <span>Main content</span>
      <div>avatar + discription</div>
      <div>
        <span>My Posts</span>
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.tem}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </main>
  );
}
