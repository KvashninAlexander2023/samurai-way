import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Posts";

export function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea >
        </textarea>
        <button>Add post</button>
      </div>
      <div>
        <span>My Posts</span>
        <div>New post</div>
        <div className={s.posts}>
          <Post/>
          <Post/>
        </div>
      </div>
    </div>
  );
}
