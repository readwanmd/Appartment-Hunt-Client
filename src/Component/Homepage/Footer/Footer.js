import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const locationIcon = <FontAwesomeIcon icon={faMapMarker} />
    return (
        <div className="footerArea">
            <div className="container text-light py-5">
                <div className="row my-4">
                    <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-start mb-2">
                            <span className="pr-3">{locationIcon}</span><span><p className="m-0">H#340 (4th Floor), Road #24,<br />New DOHS, Mohakhali, Dhaka <br />Phone: 018XXXXXXXX<br />E-mail: info@company.com</p></span>
                        </div>
                        <p className="m-0"></p>
                    </div>
                    <div className="col-md-5 mb-3">
                        <div className="links d-flex">
                            <div className="company">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Site Map</a></li>
                                    <li><a href="#">Support Center</a></li>
                                    <li><a href="#">Terms &amp; Condition</a></li>
                                    <li><a href="#">Submit Listing</a></li>
                                </ul>
                            </div>
                            <div className="quickLinks">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#">Rentals</a></li>
                                    <li><a href="#">Sales</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Terms &amp; Condition</a></li>
                                    <li><a href="#">Our blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <h4>About us</h4>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;