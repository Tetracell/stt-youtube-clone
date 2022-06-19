import "./Comments.css";
import {useState} from "react";
import React from "react";


const Comments = () => {
    const [comments, setComments] = useState([]);

    const handleComments = (e) => {
        e.preventDefault();
        setComments((prevState) =>{
            return [
                ...prevState,
                {
                    commenter: e.target.commenter.value,
                    comment: e.target.comment.value,
                },
            ];            
        });
    }

    return (
        <div className="comments">
            <section>
            <form onSubmit={handleComments}>
                <label>
                    NAME:
                    <input type='text' name="commenter" id="commenter" placeholder="..." className="name"/>
                </label>
                <br></br>
                <label>
                    COMMENT:
                    <input type='text' name='comment' id="comment" placeholder="..." className="comment"/>
                </label>
                <br></br>
                <button type='submit' id="submit" className="comment-button">Add Comment</button>
            </form>
            </section>
            <section className="comments-list">
                {comments.map(comment => { 
                    return <p><span>{comment.commenter[0].toUpperCase() + comment.commenter.slice(1)}</span>: {comment.comment}</p>
                })}
            </section>
        </div>
    )
}

export default Comments;