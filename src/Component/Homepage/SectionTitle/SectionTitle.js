import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({ shortTitle, longTitle1, longTitle2 }) => {
    return (
        <div className="py-3 my-5">
            <div className="title text-center">
                <p className="shortTitle brand-color">{shortTitle}</p>
                <h3 className="longTitle1 d-inline d-md-block">{longTitle1}</h3>
                <h3 className="longTitle2 d-inline d-md-block"> {longTitle2}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;