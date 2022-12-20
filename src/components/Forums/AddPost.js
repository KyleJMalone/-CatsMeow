import {useState } from "react";
import {useNavigate } from "react-router-dom";

const date = Date.now();

export const AddAPost = () => {
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);
  console.log(projectUserObject);
  const [posts, updatedPost] = useState({
    userId: projectUserObject.id,
    title: "",
    createdPost: date.toLocaleString(),
    updatedPost: "",
    postText: "",
  });




  const navigate = useNavigate();
  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    const savePost = async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(posts),
      };
      const response = await fetch(
        `http://localhost:8088/posts`,
        options
      );
      await response.json();
    };
    savePost();
    navigate("/");
  };

  return (
    <>
      <section>
        <form className="postSection">
          <h2 className="post">Add A Post</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="Name">Title:</label>
              <input
                required
                autoFocus
                type="text"
                className="form-control"
                value={posts.title}
                onChange={(evt) => {
                  const copy = { ...posts };
                  copy.title = evt.target.value;
                  updatedPost(copy);
                }}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label htmlFor="">Create Post:</label>
              <input
                type="text"
                className="form-control"
                value={posts.postText}
                onChange={(evt) => {
                  const copy = { ...posts };
                  copy.postText = evt.target.value;
                  updatedPost(copy);
                }}
              />
            </div>
          </fieldset>
          <div value= {posts.createdPost}>
            
          </div>


          <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary"
          >
            Add Post
          </button>
        </form>
      </section>
    </>
  );
};