import React, { useState } from 'react';
import { login } from '../utils/network-data';

const LoginInput = ({ loginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onEmailLogin(e) {
        setEmail(e.target.value);
    }
    function onPasswordLogin(e) {
        setPassword(e.target.value);
    }
    async function onSubmitLogin(e) {
        e.preventDefault();
        const result = await login({ email, password })
        if (!result.error) {
            loginSuccess({ accessToken: result.data.accessToken });
        }
    }

    return (
        <form onSubmit={onSubmitLogin} className="flex flex-col gap-4">
            <input
                type="email"
                value={email}
                placeholder='Email'
                onChange={(e) => onEmailLogin(e)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e) => onPasswordLogin(e)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
                type='submit'
                className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Login
            </button>
        </form>
    )
}

export default LoginInput;