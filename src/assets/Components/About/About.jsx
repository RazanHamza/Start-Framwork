import React from 'react';
import astyle from '../About/About.module.css'

const About = () => {
    return ( <>
    <div className={`${astyle.color} all d-flex justify-content-center align-items-center py-5`}>
       <div className="container my-5 py-5">
        <div className="row my-5">
         <h1 className='text-center text-light'>ABOUT COMPONANT</h1>
         <div className="star d-flex flex-row gap-3 d-flex justify-content-center  mt-3">
            <div className={astyle.line}></div>
            <i className="fa-solid fa-star text-light"></i>
            <div className={astyle.line}></div>
         </div>
         <div className="container d-flex justify-content-cente mt-3 ">
            <div className="row">
         <div className="col-md-6">
            <p className='text-light'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
         </div>
          <div className="col-md-6">
            <p className='text-light'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
         </div>
        </div>
       </div>
       </div>
       </div>
       </div>
       
       </>
    );
}

export default About;
