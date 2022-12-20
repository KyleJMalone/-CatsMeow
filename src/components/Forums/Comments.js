import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Comments.css"

export const CommentForm = () => {
    const navigate = useNavigate();
    const localProjectUser = localStorage.getItem("capstone_user");
    const projectUserObject = JSON.parse(localProjectUser);
    const [comments, setComments] = useState({
      id: projectUserObject.id,
      userId:"",
      title: "",
      categoryId: "",
      date: "",
      comment: "",
    });


useEffect(() => {
    fetch(`http://localhost:8088/comments${projectUserObject.id}`)
      .then((response) => response.json())
      .then((commentsArray) => {
        setComments(commentsArray);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

  };

  return (
    <>
      <h3>Comment Section</h3>

      <article className="CommentSection">
        <section key={comments.id} className="Comments">
          <header>{comments.title}</header>
          <h2>Title:</h2>
          <div>{comments.categoryId}</div>
          <h2>Category:</h2>
          <div>{comments.date}</div>
          <h2>text:</h2>
          <div>{comments.comment}</div>
          <header></header>
        </section>
        </article>
    </>
  );
  }
