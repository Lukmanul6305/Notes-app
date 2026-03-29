import React from "react";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";

const LoginPage = ({ loginSuccess }) => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 text-center">
                <h1 className="text-3xl font-bold text-blue-700">Login aplikasi catatan</h1>

                <LoginInput loginSuccess={loginSuccess} />

                <div className="text-sm text-gray-600 mt-2">
                    Belum punya akun?{' '}
                    <Link to='/register' className="text-blue-600 font-semibold hover:underline">
                        Daftarkan sekarang
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;