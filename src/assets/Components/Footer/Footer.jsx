import React from 'react';
import fstyle from '../Footer/Footer.module.css'
const Footer = () => {
    return (
        <>
            <div className={fstyle.color}>
                <div className='container py-5'>
                    <div className="row">
                        <div className="col-md-4 d-flex flex-column my-5 ">
                            <h4 className='text-center text-white'>LOCATION</h4>
                            <p className='text-center text-white'>2215 John Daniel Drive</p>
                            <p className='text-center text-white'>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4 d-flex flex-column my-5">
                            <h4 className='text-center text-white'>AROUND THE WEB</h4>
                            <ul className="list-unstyled d-flex flex-row gap-3  justify-content-center mt-2">
                                <li className={fstyle.icons}> <i className="fa-solid fa-globe text-white" /></li>
                                <li className={fstyle.icons}><i className="fa-solid fa-globe text-white" /></li>
                                <li className={fstyle.icons}><i className="fa-solid fa-globe text-white" /></li>
                                <li className={fstyle.icons}><i className="fa-solid fa-globe text-white" /></li>
                            </ul>
                        </div>
                        <div className="col-md-4 d-flex flex-column my-5">
                            <h4 className='text-center text-white'>ABOUT FREELANCER</h4>
                            <p className='text-center text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={`${fstyle.color2} d-flex justify-content-center align-items-center py-3`}>
                <p className="m-0 text-white">Copyright © Your Website 2021</p>
            </footer>
        </>
    );
}

export default Footer;
