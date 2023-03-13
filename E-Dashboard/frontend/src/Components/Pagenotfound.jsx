import React from 'react'
import { Link } from 'react-router-dom'
import { TbError404 } from 'react-icons/tb'

function Pagenotfound() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12 text-center mt-5'>
                        <h1 className='mt-5'>Page Not Found <TbError404 className='fs-1 text-danger' /></h1>
                        <Link className='btn btn-danger mt-3' to="/">Back to login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagenotfound