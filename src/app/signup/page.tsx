"use client"; // This is a client component

import "./signup.css";
import React, {useState} from "react";

export default function SignUp (){
    /*const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        const user = await fetch("../api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, password}),
        });
      };*/

    return (
    <main className="flex min-h-screen flex-col" style={{alignItems:"center", justifyContent:"center"}}>
        <div style={{display: "flex", flexDirection:"column", marginBottom: "20px" , width: "100px", height: "100px", backgroundColor: "red"}}>placeholder</div>
        <form className="form" action="../api/signup" method="POST">
            <label htmlFor="email" className="labels">Correo electrónico</label>
            <input className="textfields" 
                   type="email" 
                   id="email" 
                   name="email" 
                   required
            />

            <label htmlFor="username" className="labels">Nombre de usuario</label>
            <input className="textfields" 
                   type="text" 
                   id="username" 
                   name="username" 
                   required
            />

            <label htmlFor="password" className="labels">Contraseña</label>
            <input className="textfields" 
                   type="password" 
                   id="password" 
                   name="password" 
                   minLength={8} 
                   required
            />

            <label htmlFor="repeat-password" className="labels">Repetir contraseña</label>
            <input className="textfields" 
                   type="password" 
                   id="repeat-password" 
                   name="repeat-password"  
                   required
            />

            <input className="submit-button" type="submit" id="submit-signup" value="Registrarse"></input>
        </form>
    </main>

        
    )
}