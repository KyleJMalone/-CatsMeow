import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PostForm.css"


export const PostForm = () => {
    const navigate = useNavigate();
    const localProjectUser = localStorage.getItem("capstone_user");
    const projectUserObject = JSON.parse(localProjectUser);
    const [post, setPost] = useState({
      id: projectUserObject.id,
      userId:"",
      title: "",
      createdPost: "",
      updatedPost: "",
      postText: "",
    });
   
    useEffect(() => {
      fetch(`http://localhost:8088/posts${projectUserObject.id}`)
        .then((response) => response.json())
        .then((postArray) => {
          setPost(postArray);
        });
    }, []);
  
    const handleSaveButtonClick = (event) => {
      event.preventDefault();

    };

    
  
    return (
      <>
        <h3>Forums</h3>
  
        <article className="PostPage">
          <section key={post.id} className="Post">
            <header>{post.title}</header>
            <h1>Title:</h1>
            <div>{post.createdPost}</div>
            <h2>Comments/Questions:</h2>
            <div>{post.updatedPost}</div>
            <h4>Replies</h4>
            <div>{post.postText}</div>
            <header></header>
          </section>
          </article>

          
      </>
    );
  };
  

