import React, { useState } from 'react';
import cstyle from '../Contact/Contact.module.css';

const Contact = () => {
    const [username, setUsername] = useState('');
    const [userage, setUserage] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userpassword, setUserpassword] = useState('');

    return (
        <>
            <div className="d-flex justify-content-center py-5">
                <div className="container py-5">
                    <div className="row">
                        <h1 className={`${cstyle.icon} text-center mt-5 `}>CONTACT SECTION</h1>

                        <div className="star d-flex gap-3 justify-content-center mt-3">
                            <div className={cstyle.line}></div>
                            <i className={`${cstyle.icon} fa-solid fa-star`}></i>
                            <div className={cstyle.line}></div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="pt-5 mb-3 mt-5 col-sm-7">

                                <div className="form-floating mb-2">
                                    <input
                                        type="text"
                                        className={`form-control ${cstyle.input}`}
                                        id="username"
                                        placeholder="name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <label htmlFor="username" className={username ? cstyle.labelActive : ''}>
                                        userName
                                    </label>
                                </div>

                                <div className="form-floating mb-2">
                                    <input
                                        type="number"
                                        className={`form-control ${cstyle.input}`}
                                        id="userage"
                                        placeholder="Age"
                                        value={userage}
                                        onChange={(e) => setUserage(e.target.value)}
                                    />
                                    <label htmlFor="userage" className={userage ? cstyle.labelActive : ''}>
                                        userAge
                                    </label>
                                </div>

                                <div className="form-floating mb-2">
                                    <input
                                        type="email"
                                        className={`form-control ${cstyle.input}`}
                                        id="useremail"
                                        placeholder="name@example.com"
                                        value={useremail}
                                        onChange={(e) => setUseremail(e.target.value)}
                                    />
                                    <label htmlFor="useremail" className={useremail ? cstyle.labelActive : ''}>
                                        userEmail
                                    </label>
                                </div>

                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className={`form-control ${cstyle.input}`}
                                        id="userpassword"
                                        placeholder="password"
                                        value={userpassword}
                                        onChange={(e) => setUserpassword(e.target.value)}
                                    />
                                    <label htmlFor="userpassword" className={userpassword ? cstyle.labelActive : ''}>
                                        userPassword
                                    </label>
                                </div>

                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className='d-flex justify-content-center'>
                                    <div className="col-sm-7">
                                        <button className={`${cstyle.btncolor} btn`} type="submit">
                                            send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;