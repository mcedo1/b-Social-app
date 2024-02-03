import React from "react";

function Comment({ ommentId: 3,
    postId: 123456793,
    userId: 9,
    content: "Krajnja promjena",
    timestamp}) {
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
