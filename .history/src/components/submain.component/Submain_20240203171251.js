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
  use

  return (
    <div className="Submain">
      <div className="Posts">
      <div class="form-group">
              <label for="exampleFormControlTextarea1" style={{fontSize:'25px', display:'flex', justifyContent:'center'}}>
                What you think!
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                style={{margin:'0 30px', maxHeight: "150px", maxWidth:'64vw'}}
                placeholder='Tell something new... :D'
              ></textarea>
            </div>
            <Button
              variant="primary"
              type="success"
              style={{ margin: "15px 30px" }}
            >
              Post it!
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
