import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Homepage/Header/Header';
import './ApartmentDetails.css';

const ApartmentDetails = () => {
	const { id } = useParams();

	const [singleApartment, setSingleApartment] = useState([]);

	useEffect(() => {
		fetch(`https://still-lowlands-65832.herokuapp.com/appartment?id=${id}`)
			.then((res) => res.json())
			.then((data) => setSingleApartment(data));
	}, []);

	const apartment = singleApartment[0];

	// console.log(imgMain);
	return (
		<div className="apartmentDetails">
			<Header></Header>
			<div className="apartmentHero py-5 text-white">
				<h2 className="py-5">Apartment</h2>
			</div>
			{singleApartment.length && (
				<div className="container py-5">
					<div className="row">
						<div className="col-md-8">
							<img
								className="img-fluid apartmentImg"
								src={apartment.imgMain}
								alt=""
							/>
							<div className="title brand-color">
								<h2 className="appTitle py-3 mt-3">{apartment.appName}</h2>
								<p className="price m-0 ">${apartment.price}</p>
							</div>

							<p className="shortSummary">{apartment.shortSummary}</p>

							<h4 className="brand-color text-bold mb-3 mt-5">Price Details</h4>
							<p className="priceDetails">
								Rent/Month: ${apartment.price} (negotiable)
								<br />
								Service Charge : ${apartment.serviceCharge} per month, subject
								to change
								<br />
								Security Deposit : {apartment.sequrityDeposit} month’s rent
							</p>

							<h4 className="brand-color text-bold mb-3 mt-5">
								Property Details
							</h4>
							<p className="propertyDetails">
								Address: {apartment.address}
								<br />
								Number of Bedrooms: {apartment.bed}
								<br />
								Number of Bathrooms: {apartment.bath}
								<br />
								Flat Size: {apartment.flatSize} Sq Feet.
								<br />
							</p>
						</div>
						<div className="col-md-4">
							<div className="apartmentForm px-3 py-4">
								<form>
									<div class="form-group">
										<input
											type="name"
											class="form-control"
											id="name"
											aria-describedby="name"
											placeholder="Full Name"
										/>
									</div>
									<div class="form-group">
										<input
											type="tel"
											class="form-control"
											id="phone"
											aria-describedby="phone"
											placeholder="Phone Number"
										/>
									</div>
									<div class="form-group">
										<input
											type="email"
											class="form-control"
											id="email"
											aria-describedby="email"
											placeholder="Enter email"
										/>
									</div>
									<div class="form-group">
										<textarea rows="5" class="form-control"></textarea>
									</div>
									<button
										type="submit"
										class="brand-btn apartment-submit-btn w-100"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ApartmentDetails;
