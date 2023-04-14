import React from 'react';
import './loader.css'

const Loader = () => {
    return (
        
        <div>
        <section id="myload">
          <div className="loader">
            <div className="upper ball"></div>
            <div className="right ball"></div>
            <div className="lower ball"></div>
            <div className="left ball"></div>
          </div>
        </section>
    
    
        
    <div style={{display: "none"}} id="myDiv">
        {/* THE LOADER WILL SPIN FOR 4 SECONDS AND THEN DISPLAY THE PAGE CONTENT */}
        </div>
    
    
      
    </div>

    );
}

export default Loader;
