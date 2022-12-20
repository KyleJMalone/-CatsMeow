import {useEffect, useState } from "react"
import "./CatBehavior.css"
import cat from "./cat.jpg"


export const CatBehaviorForm = () => {
     const [catBehavior,setCatBehavior] = useState ({
     })
  
  

     useEffect (
      () => {
        fetch (`http://localhost:8088/Categories/3`)
        .then(response => response.json())
        .then((catBehaviorArray) => {
          setCatBehavior(catBehaviorArray)
  
        }
        )
      },
      []
     )




     return<>

     <h2>Cat Behavior</h2>

     <article className="catBehavior">
      
       
            <section key={catBehavior.id} className = "catBehavior">
              <header>{catBehavior.name}</header>
              <div>{catBehavior.description}</div>
              <div>{catBehavior.date}</div>
              <div className="catpic">
        <img src={cat} alt="catpic"/>
      </div>
            </section>
          
        
      
     </article>
     </>
}

