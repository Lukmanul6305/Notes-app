import React, { useEffect } from "react";
import { register, getAccessToken } from '../utils/network-data'; // Bisa digabung importnya
import { useNavigate } from "react-router-dom";
import useInput from "../Hooks/useInput";

const RegisterInput = () => {
    const [name, onInputName] = useInput('');
    const [email, onInputEmail] = useInput('');
    const [password, onInputPassword] = useInput('');

    const [confirmPassword, onInputConfirmPassword] = useInput('');

    const navigate = useNavigate();

    useEffect(() => {
        const token = getAccessToken();
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    async function onSubmitRegister(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Oops! Password dan Konfirmasi Password tidak cocok.");
            return;
        }

        const result = await register({ name, email, password });
        if (!result.error) {
            navigate('/');
        }
    }

    return (
        <form onSubmit={onSubmitRegister} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={onInputName}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={onInputEmail}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={onInputPassword}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={onInputConfirmPassword}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-lg font-bold text-white rounded-lg p-3 hover:bg-blue-700 active:scale-95 transition-all"
            >
                Register
            </button>
        </form>
    )
}

export default RegisterInput;