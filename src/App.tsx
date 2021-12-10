import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabular from "./components/Tabular";
import Post from "./components/Post";
import NewPost from "./components/NewPost";

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [posts, setPosts] = useState(DEFAULT_POSTS);
  return (
    <div className="App">
      <div className="App-header">
        <Tabular
          tabs={["Posts", "New Post"]}
          selectedTab={selectedTab}
          onTabSelect={setSelectedTab}
        />
        {selectedTab === 0 && (
          <div>
            {posts.map((post) => (
              <Post key={`post-${post.id}`} post={post} />
            ))}
          </div>
        )}
        {selectedTab === 1 && (
          <NewPost onSubmit={(newPost) => setPosts((p) => [...p, newPost])} />
        )}
      </div>
    </div>
  );
}

export default App;

const DEFAULT_POSTS: Post[] = [
  {
    id: 0,
    title: "Hello World",
    content: "This is a cool post, isn't it?",
    time: Date.now(),
  },
];
