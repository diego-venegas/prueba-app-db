import "./signup.css";

export default function SignUp (){
    return (
    <main className="flex min-h-screen flex-col" style={{alignItems:"center", justifyContent:"center"}}>
        <div style={{display: "flex", flexDirection:"column", marginBottom: "20px" , width: "100px", height: "100px", backgroundColor: "red"}}>placeholder</div>
        <form className="form">
            <label htmlFor="email" className="labels">Correo electrónico</label>
            <input className="textfields" type="email" id="email" name="email" required/>

            <label htmlFor="username" className="labels">Nombre de usuario</label>
            <input className="textfields" type="text" id="username" name="username" required/>

            <label htmlFor="password" className="labels">Contraseña</label>
            <input className="textfields" type="password" id="password" name="password" minLength={8} required/>

            <label htmlFor="repeat-password" className="labels">Repetir contraseña</label>
            <input className="textfields" type="password" id="repeat-password" name="repeat-password" minLength={8} required/>

            <input className="submit-button" type="submit" id="submit-signup" value="Registrarse"></input>
        </form>
    </main>

        
    )
}