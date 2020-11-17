import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './ApartmentArea.css';
import fakeData from '../../FakeData/HomeFakeData/FakeData';
import ApartmentCard from '../ApartmentCard/ApartmentCard';

const ApartmentArea = () => {
	const [apartment, setApartment] = useState([]);
	useEffect(() => {
		fetch('https://still-lowlands-65832.herokuapp.com/appartments')
			.then((res) => res.json())
			.then((data) => setApartment(data));
	}, []);

	return (
		<div className="container">
			<SectionTitle
				shortTitle="House Rent"
				longTitle1="Discover the latest Rent"
				longTitle2="available today"
			></SectionTitle>
			<div className="row mb-5 pb-5">
				{apartment.length === 0 ? (
					<div className="spinner-border text-success d-block m-auto" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				) : (
						apartment.map((apartment) => (
							<ApartmentCard apartment={apartment}></ApartmentCard>
						))
					)}
			</div>
		</div>
	);
};

export default ApartmentArea;
