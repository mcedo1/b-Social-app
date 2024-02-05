import React from "react";
import Comment from "./Comment";

function CommentsList({ comments }) {
    return (
        <div>
            {comments.slice().reverse().map(comment => (
                <Comment
                    key={comment.commentId}
                    commentId={comment.commentId}
                    username={comment.username}
                    postId={comment.postId}
                    userId={comment.userId}
                    content={comment.content}
                    timestamp={comment.timestamp}
                />
            ))}
        </div>
    );
}

export default CommentsList;
