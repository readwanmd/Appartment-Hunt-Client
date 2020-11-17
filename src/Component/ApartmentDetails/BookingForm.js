import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const BookingForm = ({ id, appName, address, price }) => {
	const [loggedInUser] = useContext(UserContext)
	const [usersBooking, setUsersBooking] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
		id: id,
		appName: appName,
		address: address,
		price: price,

	});

	console.log(usersBooking)

	const handleBlur = (e) => {
		const newBooking = { ...usersBooking };
		newBooking[e.target.name] = e.target.value;
		setUsersBooking(newBooking);
	};

	const handleSubmit = (e) => {
		// console.log(usersBooking);
		fetch('https://still-lowlands-65832.herokuapp.com/placeBooking', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(usersBooking),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					alert('Appartment booking successful.');
					e.target.reset();
				}
			})
			.catch((error) => {
				console.error(error);
			});

		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div class="form-group">
				<input
					onBlur={handleBlur}
					name="name"
					type="name"
					class="form-control"
					id="name"
					aria-describedby="name"
					placeholder="Full Name"
					defaultValue={loggedInUser.name}
				/>
			</div>
			<div class="form-group">
				<input
					onBlur={handleBlur}
					name="phone"
					type="text"
					class="form-control"
					id="phone"
					aria-describedby="phone"
					placeholder="Phone Number"
				/>
			</div>
			<div class="form-group">
				<input
					onBlur={handleBlur}
					name="email"
					type="email"
					class="form-control"
					id="email"
					aria-describedby="email"
					placeholder="Enter email"
					defaultValue={loggedInUser.email}
				/>
			</div>
			<div class="form-group">
				<textarea
					onBlur={handleBlur}
					name="message"
					rows="5"
					class="form-control"
				/>
			</div>
			<button type="submit" class="brand-btn apartment-submit-btn w-100">
				Submit
			</button>
		</form>
	);
};

export default BookingForm;
