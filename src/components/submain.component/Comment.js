import React from "react";

function Comment({ username, date, content }) {
  return (
    <div className="container mt-5">
      <div className="card" style={{ backgroundColor: "#E7DEE8" }}>
        <div className="card-body">
          <h5 className="card-title">{username}</h5>
          <p className="card-text" style={{ minHeight: "45px" }}>
            Sadrzaj
          </p>
          <hr />
          <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        </div>
      </div>
    </div>
  );
}

export default Comment;
