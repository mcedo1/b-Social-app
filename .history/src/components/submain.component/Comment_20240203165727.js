import React from "react";

function Comment({ commentId, ,postId, userId, content, timestamp}) {
    return (
        <div className="container mt-5">
            <div className="card" style={{ backgroundColor: "#E7DEE8" }}>
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text" style={{ minHeight: "45px" }}>
                        {content}
                    </p>
                    <hr />
                    <h6 className="card-subtitle mb-2 text-muted">{timestamp.slice(0, 16).replace('T', " ")}</h6>
                </div>
            </div>
        </div>
    );
}

export default Comment;
