import React from "react";
import RegisterInput from "../components/RegisterInput";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 text-center" >
                <h1 className="text-3xl font-bold text-blue-700">Daftar aplikasi catatan</h1>
                <RegisterInput />
                <div className="text-sm text-gray-600 mt-2">
                    sudah punya akun?{' '}
                    <Link to='/' className="text-blue-600 font-semibold hover:underline">
                        login sekarang
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage;