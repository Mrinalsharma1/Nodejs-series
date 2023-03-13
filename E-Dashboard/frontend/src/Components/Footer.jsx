import React from 'react'
import { FaCcVisa, FaCcMastercard, FaRupeeSign, FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { GrVisa } from 'react-icons/gr'
import { SiNubank } from 'react-icons/si'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { BsTelephonePlusFill, BsFillLockFill } from 'react-icons/bs'
import { ImGooglePlus2 } from 'react-icons/im'
import { RiInstagramFill } from 'react-icons/ri'



function Footer() {
    return (
        <div>
            <div className='container-fluid mt-5' style={{ backgroundColor: '#282828' }}>
                <div className='row p-4 text-light'>
                    <div className='col-md-3'>
                        <div className='footerTitle mb-3'>
                            <h3>ABOUT</h3>
                        </div>
                        <div className='footerCont mb-3'>
                            <p className='justify-content-start'>Include popular icons in your React projects easily with react-icons, which utilizes
                                ES6 imports that allows you to include only the icons that your project is using.</p>
                        </div>
                        <div className='footerPayment'>
                            <div className='row'>
                                <div className='col-md-2'><FaCcVisa className='fs-4' /></div>
                                <div className='col-md-2'><FaCcMastercard className='fs-4' /></div>
                                <div className='col-md-2'><GrVisa className='fs-4' /></div>
                                <div className='col-md-2'><SiNubank className='fs-4' /></div>
                                <div className='col-md-2'><FaRupeeSign className='fs-4' /></div>
                            </div>
                        </div>
                        <p className='mt-1'><BsFillLockFill className='mb-1 text-success fs-6' />Secure Payment Partner</p>
                    </div>
                    <div className='col-md-3'>
                        <div className='footerTitle mb-3'>
                            <h3>CATEGORIES</h3>
                        </div>
                        <div className='footerCont mb-3'>
                            <ul>
                                <li className='p-1'>Clothing</li>
                                <li className='p-1'>Lighting</li>
                                <li className='p-1'>Formals</li>
                                <li className='p-1'>Table Light</li>
                                <li className='p-1'>Hand Bag</li>
                                <li className='p-1'>Shoes</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='footerTitle mb-3'>
                            <h3>INFORMATIONS</h3>
                        </div>
                        <div className='footerCont mb-3'>
                            <ul>
                                <li className='p-1'>About Us</li>
                                <li className='p-1'>Contact Us</li>
                                <li className='p-1'>Terms & Condictions</li>
                                <li className='p-1'>Room & Exchanges</li>
                                <li className='p-1'>Shiping & Devivery</li>
                                <li className='p-1'>Private Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='footerTitle mb-3'>
                            <h3>CONTACT</h3>
                        </div>
                        <div className='footerAddress'>
                            <p><span><MdLocationOn className='pl-3' /></span><span className=' p-2'>Address : Silver Cryst Apt Outer Ring Road, Bangalore Karnatak 560103</span></p>
                        </div>
                        <hr />
                        <div className='footerContact'>
                            <p><span><BsTelephonePlusFill /></span><span className='p-2'>  Phone : +91 9155532568</span></p>
                            <p><span><MdEmail /></span><span className='p-2'>  Email : Contact@ecom.com</span></p>
                        </div>
                        <div className='footerSocial'>
                            <div className='row '>
                                <div className='col-md-2 fs-4'><FaFacebookSquare /></div>
                                <div className='col-md-2 fs-4'><ImGooglePlus2 /></div>
                                <div className='col-md-2 fs-4'><RiInstagramFill /></div>
                                <div className='col-md-2 fs-4'><FaLinkedin /></div>
                                <div className='col-md-2 fs-4'><FaYoutube /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Copyright content start from below lines */}
            <div className='container-fluid' style={{ backgroundColor: '#000000' }}>
                <div className='row text-white'>
                    <div className='col-md-12'>
                        <p className='text-center mt-2'>Copyright &#169; 2023 All Right Reserved | Design Made with <span className='text-danger'>&#10084; </span>By Mrinal</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer