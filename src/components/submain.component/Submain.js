import React from "react";
import "../submain.component/Submain.css";
import Post from "./Post";
function Submain() {
  return (
    <div className="Submain">
      <div className="Posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="Followers"></div>
    </div>
  );
}

export default Submain;
