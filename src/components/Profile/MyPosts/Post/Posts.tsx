import React from "react";
import s from "./Post.module.css";

type PostType = {
  message: string;
};

export function Post(props: PostType) {
  return (
    <div className={s.item}>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
}
