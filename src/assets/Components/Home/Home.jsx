import React from 'react'
import logo from '../../../assets/avataaars.svg';
import hstyle from '../Home/Home.module.css'
export default function Home() {
  return <>
  <section className={hstyle}>
    <div className="container">
      <div className="row  justify-content-center">
          <div className="col-md-5">
            <div className="cardy">
              <div className="photo text-center">
                <img src={logo} className=' w-50'/>
              </div>
              <div className="star text-center mt-4">
                <h2 className=' text-white fw-bolder text-uppercase fs-1'>start framework</h2>
                <div className="star d-flex gap-2 align-items-center justify-content-center mt-3">
                  <div className={hstyle.icons}></div>
                  <i className={`fa-solid fa-star text-white `}></i>
                  <div className={hstyle.icons}></div>
                </div>
                <p className=' text-white mt-3'>Graphic Artist - Web Designer - Illustrator</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  
  </>
}
