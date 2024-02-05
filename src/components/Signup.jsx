import React, { useState } from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import Loader from './Loader'
import signupimg from '../assets/signuplogo.jpg'
const Signup = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const linktosigninBtn = () => {
        navigate("/login")
    }
    const formik = useFormik({
        initialValues: {
            username: "",
            firstname: "",
            lastname: "",
            password: "",

        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
            firstname: Yup.string()
                .required('Required'),
            lastname: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            setLoading(true);
            let successMessage, errorMessage;
            // http://localhost:3500/cloud/getsignup

            axios.post("https://cloudbackend-7p7e.onrender.com/cloud/getsignup", { uname: values.username, fname: values.firstname, lname: values.lastname, pass: values.password, myimage: "" })
                .then((res) => {
                    successMessage = res.data.message;
                    errorMessage = res.data.message;
                    // console.log(res);
                    // setTimeout(() => {
                    toast(res.data.status ? "success" : successMessage)
                    if (res.data.status == true) {
                        // setTimeout(() => {
                        navigate("/login")
                        // }, 1600);
                    }
                    // }, 6000);
                })
                .catch((err) => {
                    console.log(res.data.message);
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

                        <div className='signuprowinner2'>
                            <div className='p-2 text-success text-center'>
                                <h4 className='mx-auto w-50 border-2 border-bottom p-3'>Sign-Up</h4>
                            </div>

                            <div className='w-100' >
                                <input
                                    type="text"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    className={`form-control my-4 p-3 ${formik.values.username && !formik.errors.username ? 'is-valid' : (formik.errors.username ? 'is-invalid' : '')}`}
                                    placeholder='Username'
                                />
                            </div>



                            <div className='w-100'>
                                <input type="text" name='firstname' value={formik.values.firstname} onChange={formik.handleChange}
                                   className={`form-control my-4 p-3 ${formik.values.firstname && !formik.errors.firstname ? 'is-valid' : (formik.errors.firstname ? 'is-invalid' : '')}`}
                                    placeholder='Firstname' />
                            </div>
                            {/* <div className='text-end text-danger'>
                                        {formik.errors.firstname}
                                    </div> */}


                            <div className='w-100'>
                                <input type="text" name='lastname' value={formik.values.lastname} onChange={formik.handleChange}
                                  className={`form-control my-4 p-3  ${formik.values.lastname && !formik.errors.lastname ? 'is-valid' : (formik.errors.lastname ? 'is-invalid' : '')}`}
                                    placeholder='Lastname' />
                            </div>
                           


                            <div className='w-100'>
                                <input type="text" name='password' value={formik.values.password} onChange={formik.handleChange}
                                     className={`form-control my-4 p-3 ${formik.values.password && !formik.errors.password ? 'is-valid' : (formik.errors.password ? 'is-invalid' : '')}`}
                                    placeholder='Password' />
                            </div>
                           
                            <div className='my-2 text-center'>
                                <button className='btn btn-dark' type='submit'>Signup</button>
                            </div>
                            <div className='text-dark fw-bold d-flex'>
                                <div>
                                    <p>Already have an account?</p>
                                </div>
                                <div className='mx-2'>
                                    <p onClick={linktosigninBtn} className='signinstyle'>Signin</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>

        </>
    )
}

export default Signup