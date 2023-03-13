import React, { useState } from 'react'
import { FaFacebookSquare, FaGoodreads } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

// const dotenv = require('dotenv'); //install doenv and import
// dotenv.config();

// var url = process.env.URL;
const signupimg = require('../Assets/img4.jpg')

function Login() {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        email: '',
        password: ''
    })

    const handlerChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const login = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/user/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: data.email, password: data.password })
        });

        // console.log({ email: data.email, password: data.password })
        const result = await response.json();
        console.log(result.uname)
        // console.log()


        if (!result) {
            return console.log("Unsuccessfully")
        } else {

            localStorage.setItem('auth_token', result.token)
            localStorage.setItem('username', JSON.stringify(result.uname))
            navigate("/home")
        }

    }
    return (
        <div>
            <div className='container-fluid bg-light'>
                <div className='row justify-content-md-center  '>
                    <div className='col-md-5 bg-white shadow rounded p-1 mt-4 mb-4'>
                        <div className='signupImg'>
                            <img style={{ height: '160px' }} src={signupimg} alt="signup" />
                        </div>
                        <div className='signupBox p-3'>
                            <div className='signupTitle'>
                                <div className='row'>
                                    <div className='col-md-6'> <h3 className='footerTitle'>Login</h3></div>
                                    <div className='col-md-6'>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end social">
                                            <p><FaFacebookSquare className='fs-3' /></p>
                                            <p><FaGoodreads className='fs-3' /></p>
                                        </div>
                                    </div>
                                    <div className='signupForm'>
                                        <form onSubmit={login}>
                                            <div className="mb-3">
                                                <label className="form-label">Email address</label>
                                                <input type="email" className="form-control" name='email' onChange={handlerChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="text" className="form-control" name='password' onChange={handlerChange} />
                                            </div>
                                            <div className='mb-3 d-grid gap-2'>
                                                <button className='btn btn-primary lg'>Login</button>
                                            </div>
                                            <div className='mb-2'>
                                                <p className='text-center'>Not a member? <Link to='/' className='text-success signupbtn'>Sign Up</Link> </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login