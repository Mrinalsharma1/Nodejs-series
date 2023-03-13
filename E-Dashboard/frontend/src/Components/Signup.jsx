import React, { useState } from 'react'
import { FaFacebookSquare, FaGoodreads } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const signupimg = require('../Assets/img4.jpg')

function Signup() {
    const [data, setdata] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

    const signup = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/user/`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            // redirect: 'follow',
            // referrerPolicy: 'no-referrer',
            body: JSON.stringify({ name: data.username, email: data.email, password: data.password })
        });
        const resp = await response.json()
        console.log(resp)
        if (!response) {
            return console.warn("Not Submitted")
        } else {
            alert(resp.msg)
        }
    }
    return (
        <div>
            <div className='container-fluid bg-light'>
                <div className='row justify-content-md-center '>
                    <div className='col-md-5 bg-white shadow rounded p-1'>
                        <div className='signupImg'>
                            <img src={signupimg} alt="signup" />
                        </div>
                        <div className='signupBox p-3'>
                            <div className='signupTitle'>
                                <div className='row'>
                                    <div className='col-md-6'> <h3 className='footerTitle'>Signup</h3></div>
                                    <div className='col-md-6'>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end social">
                                            <p><FaFacebookSquare className='fs-3' /></p>
                                            <p><FaGoodreads className='fs-3' /></p>
                                        </div>
                                    </div>
                                    <div className='signupForm'>
                                        <form onSubmit={signup}>
                                            <div className="mb-3">
                                                <label className="form-label">UserName</label>
                                                <input type="text" className="form-control" name="username" onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email address</label>
                                                <input type="email" className="form-control" name='email' onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="text" className="form-control" name='password' onChange={handleChange} />
                                            </div>
                                            <div className='mb-2 d-grid gap-2'>
                                                <button disabled={data.username <= 3 || data.email <= 3 || data.password <= 3} className='btn btn-primary lg'>Signup</button>
                                            </div>
                                            <div>
                                                <p className='text-center'>Have a Account? <Link to='/login' className='text-success signupbtn'>Login</Link> </p>
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

export default Signup