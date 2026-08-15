import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const [message, setMessage] = useState("")

    function onSubmit(username: string, password: string) {
        console.log("onSubmit working");
        if (username === "ahmed" && password === "123123")
            navigate("/")
        else 
            setMessage("There was an Error logging in please check your credentials.")

    }



    return (
        <form className="mx-20 flex flex-col gap-20">
            <div className="mt-20">
                <Label htmlFor="username">Username</Label>
                <Input name="username" type="text" onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div>
            <Label htmlFor="username">Password</Label>
            <Input name="password" type="password" onChange={(event) => setPassword(event.target.value)}/> 
            </div>
            {message && <p className="text-red-500">{message}</p>}
            <Button onClick={() => onSubmit(username, password)}>
                Sign in
            </Button>
        </form>   
    )
}