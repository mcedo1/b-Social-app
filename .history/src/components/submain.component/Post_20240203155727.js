import React from "react";
import MyModal from "./Modal";

function Post({"postId": 123456797,
"content": "Restauracija starih spomenika",
"userId": 7,
"timestamp
"username"}) {
  return (
    <div style={{ margin: "15px " }}>
      <div class="card text-center">
        <div class="card-header">Bsocial post</div>
        <div class="card-body" style={{ minHeight: "150px" }}>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text" className="lead">
            With supporting text below as a natural lead-in to additional to
            additional content. With supporting text below as a natural lead-in
            to additional content.
          </p>
        </div>
        <MyModal />
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default Post;
