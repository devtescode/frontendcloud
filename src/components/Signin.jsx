import React, { useState } from 'react'
import "./Signin.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import Loader from './Loader'
const Signin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const linktosignupBtn = () => {
        navigate("/signup")
        // alert("fdd")
    }
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",

        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            setLoading(true);
            let successMessage, errorMessage;
            axios.post("https://cloudbackend-7p7e.onrender.com/cloud/getsignin", { uname: values.username, pass: values.password })
                .then((res) => {
                    successMessage = res.data.message;
                    errorMessage = res.data.message;
                    // toast(res.data.message)
                    // setTimeout(() => {
                        toast(res.data.status ? "success" : successMessage)
                        if (res.data.status == true) {
                            // setTimeout(() => {
                                localStorage.token = res.data.token
                                navigate("/dashboard")
                                // localStorage.setItem("useradminlogin", true)    
                                // localStorage.setItem('username', res.data.username)
                                // localStorage.setItem('username', res.data.token)
                                // navigate("/dashboard")
                            // }, 1600);
                        }
                    // }, 6000);
                })
                .catch((err) => {
                    console.log(res.data.message);
                    alert(res.data.message)
                })
            setTimeout(() => {
                setLoading(false);
            }, 6000);
        }
    })
    return (
        <>
            {loading && <Loader />}
            <form action="" onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 shadow mx-auto border border-2 rounded-3 mt-2'>
                            <div className='p-2 text-success text-center'>
                                <h4 className='mx-auto w-50 border-2 border-bottom p-3'>Login</h4>
                            </div>
                            <div className='border border-2 p-2 d-flex my-3 shadow-lg'>
                                <div className='border border-2 rounded-2 d-flex fw-bold text-secondary p-1 userimg' style={{ alignItems: "center" }}>
                                    username
                                </div>
                                <div className='w-100' >
                                    <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className='form-control my-3 p-3' placeholder='Username' />
                                </div>
                            </div>
                            <div className='text-end text-danger'>
                                {formik.errors.username}
                            </div>

                            <div className='border border-2 p-2 d-flex my-3 shadow-lg'>
                                <div className='border border-2 rounded-2 d-flex fw-bold text-secondary p-1 passimg' style={{ alignItems: "center" }}>
                                    Password
                                </div>
                                <div className='w-100'>
                                    <input type="text" name='password' value={formik.values.password} onChange={formik.handleChange} className='form-control my-3 p-3' placeholder='Password' />
                                </div>
                            </div>
                            <div className='text-end text-danger'>
                                {formik.errors.password}
                            </div>
                            <div className='my-3 text-center'>
                                <button className='btn btn-dark' type='submit'>Login</button>
                            </div>
                            <div className='text-dark fw-bold d-flex'>
                                <div>
                                    <p>Don't have an account?</p>
                                </div>
                                <div className='mx-2'>
                                    <p onClick={linktosignupBtn} class="styleregister">Register</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Signin