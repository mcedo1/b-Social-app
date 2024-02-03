import Spinner from 'react-bootstrap/Spinner';
import React, { useState } from "react";
import "../submain.component/Submain.css";
import Post from "./Post";
import FollowerComponent from "./FollowerComponet";
import { Button } from 'react-bootstrap';

function Submain() {
  
  const [post, setPost] = useState({
    postId: '1',
    content: "Restauracija starih spomenika",
    userId: 7,
    timestamp: "2024-01-29T17:20:55.000Z",
    username: 'stefo'
  })
  const [posts, setPosts] = useState([post])


  return (
    <div className="Submain">
      <div className="Posts">
      <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Comment this post!
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                style={{margin:'0 20', maxHeight: "150px", maxWidth:'60vw'}}
              ></textarea>
            </div>
            <Button
              variant="primary"
              type="success"
              style={{ margin: "10px 0" }}
            >
              Send
            </Button>
        {posts.map((p, index)=> <Post {...p}/>)}
      </div>
      <div className="Followers">
        <p style={{fontFamily:'cursive', fontSize:'40px', flex:'1px', display:'flex', justifyContent:'center'}}>Our community</p>
        <FollowerComponent/>
      </div>
    </div>
  );
}

export default Submain;
