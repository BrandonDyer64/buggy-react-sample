import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";

export type PostProps = {
  post: Post;
};

export default function Post(props: PostProps) {
  const post = props.post;
  const [displayTime, setDisplayTime] = useState(() => calculateDisplayTime());

  function calculateDisplayTime() {
    const timeDeltaMilliseconds = Date.now() - post.time;
    const timeDeltaSeconds = Math.floor(timeDeltaMilliseconds / 1000);
    const timeDeltaMinutes = Math.floor(timeDeltaSeconds / 60);
    return timeDeltaMinutes >= 1
      ? `${timeDeltaMinutes}min`
      : timeDeltaSeconds >= 1
      ? `${timeDeltaSeconds}s`
      : `${timeDeltaMilliseconds}milli`;
  }

  useEffect(() => {
    const handle = setInterval(
      () => setDisplayTime(calculateDisplayTime()),
      10000
    );
    return () => clearInterval(handle);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.content}>{post.content}</div>
      <div className={styles.time}>{displayTime}</div>
    </div>
  );
}
