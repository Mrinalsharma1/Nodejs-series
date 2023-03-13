import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';


function Navbar() {
    const [items, setItems] = useState([])
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('username'));
        // console.log(item)
        if (item) {
            setItems(item);
        }
    }, []);
    // console.log(items)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='' className="navbar-brand" >Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to='' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to='/add' className="dropdown-item">Add Product</Link></li>
                                    <li><Link to='/update' className="dropdown-item">Update Product</Link></li>
                                    <li><Link to='/delete' className="dropdown-item">Delete Product</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <div className="btn-group d-grid gap-2 d-md-flex justify-content-md-end" role="group" aria-label="Button group with nested dropdown">
                                <div className='pt-1'>
                                    <button className='btn text-white'>{items}</button>
                                </div>
                                <div className="btn-group">
                                    <button id="btnGroupDrop1" className="btn dropdown-toggle btn-sm" data-bs-toggle="dropdown" aria-expanded="false" ><FaUserCircle className='text-white fs-2' /> </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li><Link className="dropdown-item" to=''>Setting</Link></li>
                                        <li><Link className="dropdown-item" to=''>Contact</Link></li>
                                        <li><Link className="dropdown-item" to=''>Help</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <button className="btn btn-outline-danger" type="button">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar