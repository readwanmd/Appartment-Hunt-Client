import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Utility/logos/Logo.png';
import './DashboardTitle.css';

const DashboardTitle = ({ title }) => {
	const logoStyle = {
		width: '100px',
	};
	const [loggedInUser] = useContext(UserContext);
	return (
		<div className="container-fluid bg-white">
			<div className="row d-flex align-items-center">
				<div className="col-md-2 pl-5">
					<Link to="/">
						<img className="" style={logoStyle} src={logo} alt="" />
					</Link>
				</div>
				<div className="col-md-10">
					<div>
						<div className="dashboardTitle pt-5 pb-4 pl-4">
							<div className="title">
								<h4>{title}</h4>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardTitle;
