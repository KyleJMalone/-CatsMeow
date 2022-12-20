import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForumContainer.css"

export const ForumContainer = () => {
  const navigate = useNavigate();
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);
  const [userPost, setPost] = useState(
   []
  );
const deletebutton = (id) => {
  return (
    <Link
    onClick= { ()=> {
      const deletePost = async () => {
        const options = {
          method: "DELETE",
        }
        await fetch (`http://localhost:8088/posts/${id}`,options)
        fetchPost() 
      }
        deletePost();
        navigate(`/`)
      
      }
    }
  > <button
    className="deleteButton deletePostButton"
    >Delete Post
    </button>
    </Link>
   
    
  )}

  const [userComments, setUserComments] = useState([]);
   const fetchPost=() => {
    fetch(`http://localhost:8088/posts?userId=${projectUserObject.id}`)
      .then((response) => response.json())
      .then((postArray) => {
        setPost(postArray);
      })


    fetch(`http://localhost:8088/comments?userId=${projectUserObject.id}`)
      .then((response) => response.json())
      .then((commentsArray) => {
        setUserComments(commentsArray);
      });
   
}
useEffect(()=>{
  fetchPost()
},[]);

  deletebutton()

  return (
    <>
      <h3>Forums</h3>
     
     
          {userPost.map((post) => {
            return (
              <article className="userPost">
              <section key={post.id} className="post">
                <h2>Title</h2>
                <div>{post.title}</div>
                <h2>Post</h2>
                <div>{post.postText}</div> 
                <div className="btn post_delete">
            <>
            {deletebutton(post.id)}
            </>
          </div>
                </section>      
                </article>    
            )
          } )}
   
        
         
          {userComments.map((comments) => {
            return (
              <section key={comments.id} className="userComments">
                <h2>comments</h2>
                <div>{comments.title}</div>
                <div>{comments.date}</div>
                <div>{comments.commentText}</div>
              </section>
            );
          })}
          <div>{userComments.comment}</div>
          <header></header>
          <button
            className="btn comment_addpost"
            onClick={() => {
              navigate(`/AddPost/${userPost.id}`);
            }}
          >
            Add Post
          </button>
      
          
     
    </>
  )
          }
