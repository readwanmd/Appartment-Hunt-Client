import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { Form } from 'react-bootstrap';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import UserDashboard from '../UserDashboard/UserDashboard';
import UserSidebar from '../UserSidebar/UserSidebar';

const AddApartment = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const [file, setFile] = useState(null);
	const [appartmentInfo, setAppartmentInfo] = useState({
		// file: '',
		appName: '',
		serviceCharge: '',
		flatSize: '',
		bath: '',
		shortSummary: '',
		price: '',
		address: '',
		sequrityDeposit: '',
		bed: '',
	});

	const handleBlur = (e) => {
		const newAppartmentInfo = { ...appartmentInfo };
		newAppartmentInfo[e.target.name] = e.target.value;
		setAppartmentInfo(newAppartmentInfo);
		// console.log(newAppartmentInfo);
	};

	const handleFileChange = (e) => {
		const newFile = e.target.files[0];
		setFile(newFile);
	};
	// const [info, setInfo] = useState({});

	const handleSubmit = (e) => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('appName', appartmentInfo.appName);
		formData.append('serviceCharge', appartmentInfo.serviceCharge);
		formData.append('flatSize', appartmentInfo.flatSize);
		formData.append('bath', appartmentInfo.bath);
		formData.append('shortSummary', appartmentInfo.shortSummary);
		formData.append('price', appartmentInfo.price);
		formData.append('address', appartmentInfo.address);
		formData.append('sequrityDeposit', appartmentInfo.sequrityDeposit);
		formData.append('bed', appartmentInfo.bed);

		fetch('https://still-lowlands-65832.herokuapp.com/addAppartment', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					alert('Appartment added successfully.');
					e.target.reset();
				}
			})
			.catch((error) => {
				console.error(error);
			});

		e.preventDefault();
	};
	return (
		<div>
			<div className="container-fluid bg-white">
				<div className="row">
					<AdminSidebar></AdminSidebar>
					<div className="col-md-10 pl-4">
						<div className="dashboardTitle pt-5 pb-4 ">
							<div className="title">
								<h4>Add Apartment</h4>
							</div>
							{loggedInUser.email ? (
								<div className="username text-right">

									{loggedInUser.name}
									<img
										className="rounded-circle ml-3"
										style={{ height: '40px', width: '40px' }}
										src={loggedInUser.photo}
										alt=""
									/>
								</div>
							) : (
									''
								)}
						</div>

						<div className="dashboardBody">
							<div className="apartmentForm">
								<form onSubmit={handleSubmit} className="row p-4 mb-5">
									<div className="col-md-6">
										<div class="form-group">
											<label for="title">Appartment Name</label>
											<input
												onBlur={handleBlur}
												type="text"
												name="appName"
												class="form-control"
												id="title"
												aria-describedby="title"
												placeholder="Enter appartment name"
												required
											/>
										</div>
										<div class="form-group">
											<label for="title">Service Charge</label>
											<input
												type="num"
												onBlur={handleBlur}
												name="serviceCharge"
												class="form-control"
												id="price"
												aria-describedby="price"
												placeholder="Enter service charge"
												required
											/>
										</div>

										<div class="form-group">
											<label for="title">Flat Size</label>
											<input
												type="text"
												onBlur={handleBlur}
												name="flatSize"
												class="form-control"
												id="address"
												aria-describedby="address"
												placeholder="Enter flat size"
												required
											/>
										</div>
										<div class="form-group">
											<label for="title">Number of Bathroom</label>
											<input
												type="text"
												onBlur={handleBlur}
												name="bath"
												class="form-control"
												id="bath"
												aria-describedby="bathroom"
												placeholder="Enter number of bathroom"
												required
											/>
										</div>
										<div class="form-group">
											<label for="title">Short Summary</label>
											<textarea
												onBlur={handleBlur}
												name="shortSummary"
												rows="3"
												class="form-control"
												placeholder="Enter short summary"
												required
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div class="form-group">
											<label for="title">Price</label>
											<input
												type="num"
												onBlur={handleBlur}
												name="price"
												class="form-control"
												id="price"
												aria-describedby="price"
												placeholder="Enter price"
												required
											/>
										</div>
										<div class="form-group">
											<label for="title">Location</label>
											<input
												type="text"
												onBlur={handleBlur}
												name="address"
												class="form-control"
												id="address"
												aria-describedby="address"
												placeholder="Enter location"
												required
											/>
										</div>
										<div class="form-group">
											<label for="title">Sequrity Deposit(month)</label>
											<input
												type="text"
												onBlur={handleBlur}
												name="sequrityDeposit"
												class="form-control"
												id="address"
												aria-describedby="address"
												placeholder="Enter sequrity deposit"
												required
											/>
										</div>
										<div class="form-group">
											<label for="title">Number of Bedroom</label>
											<input
												type="text"
												onBlur={handleBlur}
												name="bed"
												class="form-control"
												id="bed"
												aria-describedby="bedroom"
												placeholder="Enter number of Bedroom"
												required
											/>
										</div>
										<div class="form-group">
											<label for="exampleFormControlFile1">
												Example file input
											</label>
											{/* <input
												onChange={handleFileChange}
												name="file"
												type="file"
												class="form-control-file"
												id="exampleFormControlFile1"
											/> */}
											<Form.File
												onChange={handleFileChange}
												name="file"
												id="exampleFormControlFile1"
												required
											/>
										</div>
										{/* </div> */}
										<div className="submitBtn d-block ml-auto justify-content-center">
											<button type="submit" className="btn brand-btn">
												Submit
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddApartment;
