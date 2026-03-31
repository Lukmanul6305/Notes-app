import React, { useEffect } from "react";
import { register } from '../utils/network-data';
import { getAccessToken } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import useInput from "../Hooks/useInput";

const RegisterInput = () => {
    const [name, onInputName] = useInput('');
    const [email, onInputEmail] = useInput('');
    const [password, onInputPassword] = useInput('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = getAccessToken();
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    async function onSubmitRegister(e) {
        e.preventDefault()
        const result = await register({ name, email, password })
        if (!result.error) {
            navigate('/');
        }
    }

    return (
        <form onSubmit={onSubmitRegister} className="flex flex-col gap-4">
            <input type="text" placeholder="name" value={name} onChange={(name) => onInputName(name)} required className="w-full p-3 border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <input type="email" placeholder="email" value={email} onChange={(email) => onInputEmail(email)} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <input type="password" placeholder="password" value={password} onChange={(password) => onInputPassword(password)} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <button type="submit" className="w-full cursor-pointer bg-blue-600 text-1xl font-bold text-white rounded-lg p-3" >Register</button>
        </form>
    )
}

export default RegisterInput;