import React, { useState } from "react";
import styles from "./NewPost.module.css";

export type NewPostProps = {
  onSubmit: (post: Post) => void;
};

export default function NewPost(props: NewPostProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submit() {
    props.onSubmit({
      id: Math.round(Math.random() * 1000000000),
      title,
      content,
      time: Date.now(),
    });
  }

  return (
    <div className={styles.root}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
