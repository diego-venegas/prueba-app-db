"use client"; // This is a client component

import "./signup.css";
import React, {FormEvent, useState} from "react";

export default function SignUp (){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       const formData = new FormData(e.currentTarget);
       const response = await fetch ('/api/auth/signup', {
              method: 'POST',
              body: JSON.stringify({
                     email: formData.get('email'),
                     username: formData.get('username'),
                     password: formData.get('password'),
              }),
       });
       console.log({response});
    };

    return (
    <main className="flex min-h-screen flex-col" style={{alignItems:"center", justifyContent:"center"}}>
        <div style={{display: "flex", flexDirection:"column", marginBottom: "20px" , width: "100px", height: "100px", backgroundColor: "red"}}>placeholder</div>
        <form className="form" onSubmit={handleSubmit} method="POST">
            <label htmlFor="email" className="labels">Correo electrónico</label>
            <input className="textfields" 
                   type="email" 
                   id="email" 
                   name="email" 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} 
                   required
            />

            <label htmlFor="username" className="labels">Nombre de usuario</label>
            <input className="textfields" 
                   type="text" 
                   id="username" 
                   name="username" 
                   value={username} 
                   onChange={(e) => setUsername(e.target.value)} 
                   required
            />

            <label htmlFor="password" className="labels">Contraseña</label>
            <input className="textfields" 
                   type="password" 
                   id="password" 
                   name="password" 
                   minLength={8} 
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)} 
                   required
            />

            <input className="submit-button" type="submit" id="submit-signup" value="Registrarse"></input>
        </form>
    </main>

        
    )
}