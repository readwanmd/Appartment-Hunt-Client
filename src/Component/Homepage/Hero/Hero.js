import React from 'react';
import './Hero.css'

const Hero = () => {
    const buttonFont = {
        fontSize: "1 rem"
    }
    return (
        <div className="hero-layout py-5">
            <div className="layer"></div>
            <div className="hero-area container-fluid text-center my-5 py-5">
                <h1 className="mb-5 text-uppercase text-white">Find your house rent</h1>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="row">
                            <div className="col-md-8">
                                <input type="text" class="form-control searchBar" id="searchBar" aria-describedby="searchBar" placeholder="Search...." />
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-md-0 d-flex justify-content-center">
                                <button style={{ buttonFont }} className="btn brand-btn">Find Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;