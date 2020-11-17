import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';
import './MyRent.css'

const MyRent = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [myRent, setMyRent] = useState([]);
	// const [appName] = myRent[0]

	useEffect(() => {
		fetch(
			`https://still-lowlands-65832.herokuapp.com/myRent?email=${loggedInUser.email}`
		)
			.then((res) => res.json())
			.then((data) => setMyRent(data[0]));
	}, []);

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
								{
									myRent.length === 0 ? <p>Please book an apartment</p> : <p><table class="table table-striped">
										<thead>
											<tr>
												<th scope="col">Apartment</th>
												<th scope="col">Address</th>
												<th scope="col">Price</th>
												<th scope="col">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr className="align-items-center">
												<td>{myRent.appName}</td>
												<td>{myRent.address}</td>
												<td>{myRent.price}</td>
												<td>
													<Link style={{ textDecoration: "none" }} to={`/apartment/${myRent.id}`}>
														<p className="brand-color action-btn">
															View Details
													</p>
													</Link>
												</td>
											</tr>
										</tbody>
									</table></p>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyRent;
