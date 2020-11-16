import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import service1 from '../../../Utility/logos/service1.png'
import service2 from '../../../Utility/logos/service2.png'
import service3 from '../../../Utility/logos/service3.png'
import './ServiceArea.css'

const ServiceArea = () => {
    return (
        <div className="container">
            <SectionTitle shortTitle={"Service"} longTitle1={"We're an agency tailored to all"} longTitle2={"clients' needs that always delivers"}></SectionTitle>

            <div className="row mb-5 pb-4">
                <div className="col-md-6 col-lg-4 my-3">
                    <div class="card brand-bg text-center">
                        <img class="card-img-top w-25 mx-auto" src={service1} alt="" />
                        <div class="card-body">
                            <h5 class="card-title brand-color mb-3">Wide Range of Properties</h5>
                            <p class="service-card-details">With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-3">
                    <div class="card brand-bg text-center">
                        <img class="card-img-top w-25 mx-auto" src={service2} alt="" />
                        <div class="card-body">
                            <h5 class="card-title brand-color mb-3">Financing Made Easy</h5>
                            <p class="service-card-details">Our stress-free finance department that can find financial solutions to save you money.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-3">
                    <div class="card brand-bg text-center">
                        <img class="card-img-top w-25 mx-auto" src={service3} alt="" />
                        <div class="card-body">
                            <h5 class="card-title brand-color mb-3">Trusted by Thousands</h5>
                            <p class="service-card-details">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceArea;