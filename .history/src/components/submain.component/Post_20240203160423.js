import React from "react";
import MyModal from "./Modal";

function Post({postId, content, userId, timestamp, username}) {
  console.log("show",postId)
  return (
    <div style={{ margin: "15px " }}>
      <div class="card text-center">
        <div class="card-header">Bsocial post</div>
        <div class="card-body" style={{ minHeight: "150px" }}>
          <h5 class="card-title">{username}</h5>
          <p class="card-text" className="lead">
            {content}
          </p>
        </div>
        <MyModal />
        <div class="card-footer text-muted">{timestamp.split(//)}</div>
      </div>
    </div>
  );
}

export default Post;
