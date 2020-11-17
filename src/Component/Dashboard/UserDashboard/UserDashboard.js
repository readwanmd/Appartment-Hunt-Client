import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';

const UserDashboard = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	return (
		<div>
			<div className="container-fluid bg-white">
				<div className="row">
					<UserSidebar></UserSidebar>
					<div className="col-md-10 pl-4">
						<div className="dashboardTitle pt-5 pb-4 ">
							<div className="title">
								<h4>My Rents</h4>
							</div>
							{loggedInUser.email ? (
								<div className="username text-right">
									<img
										className="rounded-circle"
										style={{ height: '40px', width: '40px' }}
										src={loggedInUser.photo}
										alt=""
									/>
									{loggedInUser.name}
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
										<tr>
											<td>Name</td>
											<td>Email</td>
											<td>Phone</td>
											<td>Message</td>
											<td>Status</td>
										</tr>
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

export default UserDashboard;
