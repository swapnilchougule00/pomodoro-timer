import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from './fierbase'

function Login() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        pass: ''
    })
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false)

    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!values.email || !values.pass) {
            setErrorMsg('Fill all fields')
            return
        }
        setErrorMsg('')
        setSubmitButtonDisable(true)
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async () => {
                setSubmitButtonDisable(false)

                navigate('/timer')
            })
            .catch((err) => {
                setErrorMsg(err.message)
                setSubmitButtonDisable(false)

            })

    }



    return (
        <div className=" w-full h-screen flex  justify-center items-center">
            <div className=" w-[60%] md:w-[50%] lg:w-[30%] space-y-3">

                <h1 className="text-3xl text-center font-extrabold font-sans">Login</h1>


                <form action="#" className="flex flex-col space-y-5 font-[system-ui]">
                    <div>
                        <label htmlFor="username" className="font-semibold">Email <sup className="text-red-700">*</sup></label>
                        <input type="email" className="w-[100%] border outline-none shadow-md text-slate-700 rounded-3xl p-2 px-4" placeholder="Email"
                            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}

                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="font-semibold">Password <sup className="text-red-700 ">*</sup></label>
                        <input type="password" className="w-[100%] border shadow-md outline-none rounded-3xl text-slate-700 p-2 px-4" placeholder="Password"
                            onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}

                        />


                    </div>
                    <p className="text-lg text-red-600">{errorMsg}</p>

                    <button disabled={submitButtonDisable} onClick={(e) => { handleSubmit(e) }} type="submit" className="border bg-[#A30BD5] border-[#A30BD5] text-center rounded-3xl text-white p-2 hover:bg-white hover:text-black font-semibold" >Login</button>

                </form>

            </div>

        </div>
    )
}

export default Login