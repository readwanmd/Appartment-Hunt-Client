import React from 'react';
import ApartmentArea from '../ApartmentArea/ApartmentArea';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import ServiceArea from '../ServiceArea/ServiceArea';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <ApartmentArea></ApartmentArea>
            <ServiceArea></ServiceArea>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;