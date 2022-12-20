
import { Route, Routes } from "react-router-dom";
import { AddACat } from "./AddCat";
import { CatBehaviorForm } from "./CatBehavior";
import { EditProfilePage } from "./EditProfilePage";
import { ProfileForm } from "./ProfilePage"
import { ForumContainer } from "../Forums/ForumContainer";
import { AddAPost } from "../Forums/AddPost";


export const ApplicationViews = () => {
  // const localProjectUser = localStorage.getItem("capstone_user");
  // const projectUserObject = JSON.parse(localProjectUser);

  return  <Routes>
  <Route path="/ProfilePage" element={<ProfileForm />} />;
  <Route path="/CatBehavior" element={<CatBehaviorForm />} />;
  <Route path ="/EditProfilePage/:usersId" element={<EditProfilePage/>}/>;
  <Route path ="/AddACat/:usersId" element={<AddACat/>}/>;
  <Route path ="/AddPost/:usersId" element={<AddAPost/>}/>;
  <Route path ="/Forums/" element={<ForumContainer/>}/>;

  
 

  </Routes>
};
