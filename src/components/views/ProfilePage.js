import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProfilePage.css";

export const ProfileForm = () => {
  const navigate = useNavigate();
  const localProjectUser = localStorage.getItem("capstone_user");
  const projectUserObject = JSON.parse(localProjectUser);
  const [userProfile, setUserProfile] = useState({
    id: projectUserObject.id,
    name: "",
    email: "",
    userName: "",
    aboutMe: "",
  });
  const [userCat, setUserCat] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/users/${projectUserObject.id}`)
      .then((response) => response.json())
      .then((profileArray) => {
        setUserProfile(profileArray);
      });
    fetch(`http://localhost:8088/cats?userId=${projectUserObject.id}`)
      .then((response) => response.json())
      .then((CatsArray) => {
        setUserCat(CatsArray);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h3>Welcome, {userProfile.name }</h3>

      <article className="userProfile">
        <section key={userProfile.id} className="profile">
        <h2>Profile Picture</h2>
          <div>{userProfile.profilePicture}</div>
          <h2>Name:</h2>
          <header>{userProfile.name}</header>
          <h2>Email:</h2>
          <div>{userProfile.email}</div>
          <h2>User Name:</h2>
          <div>{userProfile.userName}</div>
          <h2>About Me:</h2>
          <div>{userProfile.aboutMe}</div>
         
          


          {userCat.map((cat) => {
            return (
              <section key={cat.id} className="cat">
                <h2>Cats:</h2>
                <div>{cat.name}</div>
                <h2>Breed:</h2>
                <div>{cat.breed}</div>
                <h2>Sex:</h2>
                <div>{cat.sex}</div>
                <h2>Age:</h2>
                <div>{cat.age}</div>
                <h2>Color</h2>
                <div>{cat.color}</div>
              </section>
            );
          })}
          <div>{userCat.cats}</div>
          <header></header>
        </section>
        <section>
          <button
            className="btn comment_edit"
            onClick={() => {
              navigate(`/EditProfilePage/${userProfile.id}`);
            }}
          >
            Edit
          </button>
        </section>
        <section>
          <button
            className="btn comment_delete"
            onClick={() => {
              navigate(`/DeleteProfilePage/${userProfile.id}`);
            }}
          >
            Delete
          </button>
        </section>
        <section>
          <button
            className="btn comment_addcat"
            onClick={() => {
              navigate(`/AddACat/${userProfile.id}`);
            }}
          >
            Add A Cat
          </button>
        </section>
      </article>
    </>
  );
};
