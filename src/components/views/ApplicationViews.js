
import { Route, Routes } from "react-router-dom";
import { AddACat } from "./AddCat";
import { CatBehavior, CatBehaviorForm } from "./CatBehavior";
import { EditProfilePage } from "./EditProfilePage";
import { ProfileForm } from "./ProfilePage"

export const ApplicationViews = () => {
  // const localProjectUser = localStorage.getItem("capstone_user");
  // const projectUserObject = JSON.parse(localProjectUser);

  return  <Routes>
  <Route path="/ProfilePage" element={<ProfileForm />} />;
  <Route path="/CatBehavior" element={<CatBehaviorForm />} />;
  <Route path ="/EditProfilePage/:usersId" element={<EditProfilePage/>}/>;
  <Route path ="/AddACat/:userCat" element={<AddACat/>}/>;
  </Routes>
};
