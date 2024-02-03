import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useState } from "react";
import "../submain.component/Submain.css";
import Post from "./Post";
import FollowerComponent from "./FollowerComponet";
import { Button, ToastContainer } from 'react-bootstrap';
import api, { getId } from '../../API/Api';
import { toast } from 'react-toastify';

function Submain() {

  var user_id = getId() 
  const [post, setPost] = useState({
    content: "",
  })
  const [posts, setPosts] = useState([])
  
  const getPosts = () => {
    api(`/api/posts/${user_id}`,{}, 'get').then(
      res => {
        if(res.status === 'ok'){
          setPosts(res.data)
        }
      }
    )
  }
  useEffect(()=>{
    getPosts();
  }, [])
  useEffect(()=> {

  }, [])
  const handlePostIt = () => {
    api(`/api/posts/${user_id}`,{content:post.content}, 'post')
    .then(
      res => {
        if(res.status === 'ok'){
          toast.success("Succesfully added", {
            position: 'top-right',
            autoClose: 1200,
            theme: "colored",
            transition: Bounce,
            progress: undefined
        })
          getPosts();
        }
      }
    )
  }
  return (
    <div className="Submain">
      <ToastContainer/>
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
                value={post.content}
                onChange={e=> setPost({...post, content: e.target.value})}
              ></textarea>
            </div>
            <Button
              variant="primary"
              type="success"
              style={{ margin: "15px 30px" }}
              onClick={handlePostIt}
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
