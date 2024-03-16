import React, { useState } from 'react'
import "./Signin.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import Loader from './Loader'
import signupimg from '../assets/signuplogo.jpg'
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
            // let successMessage, errorMessage;
            axios.post("https://cloudbackend-7p7e.onrender.com/cloud/getsignin", { uname: values.username, pass: values.password })
                .then((res) => {
                    // toast(res.data.message)
                    // setTimeout(() => {
                        toast(res.data.status ? res.data.message: res.data.message)
                        if (res.data.status) {
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
                    // console.log(res.data.message);
                    toast(err.message)
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
                <div className='signupcontainer'>
                    <div className=' signuprow'>
                        <div className='signuprowimg'>
                            <img src={signupimg} className='signuprowimg2' alt="" />
                        </div>
                    </div>
                    <div className='shadow-lg p-4 signuprow2'>
                        <div className='signinrowinner2'>
                            <div className='p-2 text-success text-center'>
                                <h4 className='mx-auto w-50 border-2 border-bottom p-3'>Login</h4>
                            </div>

                            <div className='w-100' >
                            <input
                                    // className={`form-control my-4 p-3 ${formik.values.username && !formik.errors.username ? 'is-valid' : (formik.errors.username ? 'is-invalid' : '')}`}
                                    // 

                                    className={`form-control w-100 my-4 p-3 ${(formik.values.username && !formik.errors.username) ||
                                        (formik.touched.username && formik.values.username && formik.errors.username && formik.touched.username && formik.values.username)
                                        ? 'is-valid'
                                        : formik.values.username || formik.touched.username
                                            ? 'is-invalid'
                                            : ''
                                        }`}

                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="username"
                                    value={formik.values.username}
                                    placeholder="Username"
                                />
                            </div>

                            <div className='w-100'>
                            <input type="text"
                                    className={`form-control w-100 my-4 p-3 ${(formik.values.password && !formik.errors.password) ||
                                        (formik.touched.password && formik.values.password && formik.errors.password && formik.touched.password && formik.values.password)
                                        ? 'is-valid'
                                        : formik.values.password || formik.touched.password
                                            ? 'is-invalid'
                                            : ''
                                        }`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="password"
                                    value={formik.values.password}
                                    placeholder="Password"
                                />
                            </div>
                           
                            <div className='my-2 text-center'>
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