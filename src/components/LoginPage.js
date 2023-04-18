import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {

 
    return (
        <div className=" w-full h-screen flex  justify-center items-center">
            <div className=" w-[30%] space-y-3">

                <h1 className="text-3xl text-center font-extrabold font-sans">Login</h1>


                <form action="#" className="flex flex-col space-y-5 font-[system-ui]">
                    <div>
                        <label htmlFor="username" className="font-semibold">Email <sup className="text-red-700">*</sup></label>
                        <input type="email" className="w-[100%] border outline-none shadow-md rounded-3xl p-2 px-4" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="username" className="font-semibold">Password <sup className="text-red-700 ">*</sup></label>
                        <input type="password" className="w-[100%] border shadow-md outline-none rounded-3xl p-2 px-4" placeholder="Password" />
                        

                    </div>

                    <button type="submit" className="border bg-[#A30BD5] border-[#A30BD5] rounded-3xl text-white p-2 hover:bg-white hover:text-black font-semibold" >Login</button>
                    <div className="text-center text-sm text-slate-500">
                        <p>or Sign in with google</p>
                    </div>
                    <button type="submit" className="border hover:border-black border-slate-300 font-semibold rounded-3xl p-2 flex justify-center items-center " > Sign with Google</button>
                </form>

            </div>

        </div>
    )
}

export default LoginPage