import React, { useState } from 'react';
import img1 from '../../../assets/poert1.png';
import img2 from '../../../assets/port2.png';
import img3 from '../../../assets/port3.png';
import pstyle from '../Portofolio/Portofoli.module.css';

const Portofolio = () => {
  const images = [img1, img2, img3, img1, img2, img3];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <h1 className={`${pstyle.icon} text-center mt-5 pt-3`}>PORTFOLIO COMPONENT</h1>
          <div className="star d-flex flex-row gap-3 justify-content-center mt-3 mb-5">
            <div className={pstyle.line}></div>
            <i className={`${pstyle.icon} fa-solid fa-star`}></i>
            <div className={pstyle.line}></div>
          </div>

          {images.map((img, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div
                className={`${pstyle.portItem} position-relative`}
                onClick={() => setSelectedImage(img)} 
              >
                <img src={img} className="w-100 rounded-3" alt={`portfolio-${index}`} />
                <div className={`${pstyle.layer} d-flex justify-content-center align-items-center`}>
                  <i className="fa-solid fa-plus fa-3x text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className={pstyle.popupOverlay} onClick={() => setSelectedImage(null)}>
          <div className={pstyle.popupImageWrapper}>
            <img src={selectedImage} alt="Selected" className="img-fluid rounded-3" />
          </div>
        </div>
      )}
    </>
  );
};

export default Portofolio;