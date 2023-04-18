import React from "react";
import Comment from "./Comment";

const comments = [
    {
        id: 1,
        name: "김다솔",
        comment: "댓글1"
    },
    {
        id: 2,
        name: "김다솔",
        comment: "댓글2"
    },
    {
        id: 3,
        name: "김다솔",
        comment: "댓글3"
    }
];

function CommentList(props) {
    return (
        <div>
            {
                comments.map(comment => {
                    return (
                        <Comment key={comment.id} name={comment.name} comment={comment.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;