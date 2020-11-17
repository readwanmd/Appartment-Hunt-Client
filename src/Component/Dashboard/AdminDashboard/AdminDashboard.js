import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './AdminDashboard.css';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminDashboard = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const [bookingList, setBookingList] = useState([]);

	useEffect(() => {
		fetch('https://still-lowlands-65832.herokuapp.com/bookingList')
			.then((res) => res.json())
			.then((data) => setBookingList(data));
	}, []);

	return (
		<div>
			<div className="container-fluid bg-white">
				<div className="row">
					<AdminSidebar></AdminSidebar>
					<div className="col-md-10 pl-4">
						<div className="dashboardTitle pt-5 pb-4 ">
							<div className="title">
								<h4>Booking List</h4>
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
							<div className="dashboardTable">
								<table class="table table-striped">
									<thead>
										<tr>
											<th scope="col">Name</th>
											<th scope="col">Email</th>
											<th scope="col">Phone</th>
											<th scope="col">Message</th>
											<th scope="col">Status</th>
										</tr>
									</thead>

									<tbody>
										{bookingList.map((data) => (
											<tr>
												<td>{data.name}</td>
												<td>{data.email}</td>
												<td>{data.phone}</td>
												<td>{data.message}</td>
												<td>Pending</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
