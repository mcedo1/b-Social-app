import React, { useState } from "react";
import "../submain.component/Submain.css";
import Post from "./Post";
import FollowerComponent from "./FollowerComponet";
function Submain() {
  
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({
    postId: 123456797,
    content": "Restauracija starih spomenika",
    userId": 7,
    timestamp": "2024-01-29T17:20:55.000Z",
    username:
  })
  
  return (
    <div className="Submain">
      <div className="Posts">
        <Post />
      </div>
      <div className="Followers">
        <p style={{fontFamily:'cursive', fontSize:'40px', flex:'1px', display:'flex', justifyContent:'center'}}>Our community</p>
        <FollowerComponent/>
      </div>
    </div>
  );
}

export default Submain;
