import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './login.css'
const backend_url = "https://note-making-app.onrender.com"


const Login = ({ setname }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const getData = async () => {
    console.log(email, password)

        const config = { headers: { "Content-Type": "application/json" } };
        await axios.post(`${backend_url}/api/v1/login`,
            { email, password }, config
        )
            .then(async (data) => {
                setEmail("");
                setPassword("")
                setname(data.data.user.name)
                await axios.get(`${backend_url}/api/v1/fetchallnotes`)
                    .then(data => console.log(data.data))
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {

    }, [])

    return (
        <div className="container">
            <input type="email" onChange={((e) => setEmail(e.target.value))} placeholder="Enter Your Email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
            <button onClick={() => getData()} >Login</button>

        </div>
    )
}

export default Login