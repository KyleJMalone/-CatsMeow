import {useEffect,useState} from "react"
import { useParams, useNavigate } from "react-router-dom";
import "./EditProfilePage.css"




export const AddACat = () => {
    const localProjectUser = localStorage.getItem("capstone_user");
    const projectUserObject = JSON.parse(localProjectUser);
    console.log(projectUserObject)
    const [cats, updateProfile] = useState({
       id:projectUserObject.id,
       name:"",
       breed:"",
       sex:"",
       age:"",
       color:""
    })

    const {userCat} = useParams()
    const navigate = useNavigate()
console.log(userCat)
    useEffect (
        () => {
          fetch (`http://localhost:8088/cats${userCat}`)
          .then(response => response.json())
          .then((cats) => {
            updateProfile(cats)
            console.log(cats)
           
    
          }
          )
        },
        [userCat]

       )


       const handleSaveButtonClick = (event) => {
        event.preventDefault ()
        
        const saveCat = async () => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(cats)
            }
            const response = await (`http://localhost:8088/cats${userCat}`, options)
            await response.json()

            } 
            saveCat()
            navigate("/")
        }

       
       



       
      




return <>
<section>
<form className="profile">
<h2 className="profile">Add A Cat</h2>
<fieldset>
    <div className="form-group">
        <label htmlFor="Name">Name:</label>
        <input
            required autoFocus
            type="text"
            className="form-control"
            value={cats.name}
            onChange={
                (evt) => {
                    const copy = {...cats}
                    copy.name = evt.target.value
                    updateProfile(copy)
                   
                }
            } />
    </div>
</fieldset>


<fieldset>
    <div className="form-group">
        <label htmlFor="name">Breed:</label>
        <input type="text"
            className="form-control"
            value={cats.breed}
            onChange={
                (evt) => {
                    const copy = {...cats}
                    copy.breed = evt.target.value
                    updateProfile(copy)
                    
                }
            } />
    </div>
</fieldset>

<fieldset>
    <div className="form-group">
        <label htmlFor="name">Sex:</label>
        <input type="text"
            className="form-control"
            value={cats.sex}
            onChange={
                (evt) => {
                    const copy = {...cats}
                    copy.sex = evt.target.value
                    updateProfile(copy)
                    
                }
            } />
    </div>
</fieldset>

<fieldset>
    <div className="form-group">
        <label htmlFor="name">Age:</label>
        <input type="text"
            className="form-control"
            value={cats.age}
            onChange={
                (evt) => {
                    const copy = {...cats}
                    copy.age = evt.target.value
                    updateProfile(copy)
                    
                }
            } />
    </div>
</fieldset>
<button
    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
    className="btn btn-primary">
    Save Cat
</button>
</form>
</section>
</>
}