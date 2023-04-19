import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword , updateProfile} from "@firebase/auth";
import {auth} from './fierbase'

function SignIn() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: '',
        email: '',
        pass: ''
    })
    const [submitButtonDisable , setSubmitButtonDisable] = useState(false)

    const [errorMsg , setErrorMsg] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!values.name || !values.email || !values.pass){
            setErrorMsg('Fill all fields')
            return
        }
        setErrorMsg('')
        setSubmitButtonDisable(true)
        createUserWithEmailAndPassword(auth , values.email, values.pass)
        .then(async (res)=>{
            setSubmitButtonDisable(false)
            const user = res.user
            await updateProfile(user,{
                displayName:values.name
            });
            navigate('/timer')
        })
        .catch((err)=>{
            setErrorMsg(err.message)
            setSubmitButtonDisable(false)

        })

    }

    return (
        <div className=" w-full h-screen flex  justify-center items-center">
            <div className=" w-[60%] md:w-[50%] lg:w-[30%] space-y-3">

                <h1 className="text-3xl text-center font-extrabold font-sans">Sign In</h1>


                <form action="#" className="flex flex-col space-y-5 font-[system-ui]">
                    <div>
                        <label htmlFor="username" className="font-semibold">Name <sup className="text-red-700">*</sup></label>
                        <input type="text" className="w-[100%] border text-slate-800 outline-none shadow-md rounded-3xl p-2 px-4" placeholder="Name"
                            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="font-semibold">Email <sup className="text-red-700">*</sup></label>
                        <input type="email" className="w-[100%] border text-slate-800  outline-none shadow-md rounded-3xl p-2 px-4" placeholder="Email"
                            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className="font-semibold">Password <sup className="text-red-700 ">*</sup></label>
                        <input type="password" className="w-[100%] text-slate-800  border shadow-md outline-none rounded-3xl p-2 px-4" placeholder="Password"
                            onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
                        />
                    </div>
                        <p className="text-lg text-red-600">{errorMsg}</p>
                    <button disabled={submitButtonDisable}  onClick={(e)=>handleSubmit(e)} type="submit" className="border text-center bg-[#A30BD5] border-[#A30BD5] rounded-3xl text-white p-2 hover:bg-white hover:text-black font-semibold" >Sign In</button>
                    <div className="text-center text-sm text-slate-500">
                        <div >
                            <p>Already have an accounnt  {<Link className="text-lg text-[#ffff] border-b-2 border-b-[#A30BD5] bo font-bold" to='/Login'> Login</Link>}</p>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default SignIn