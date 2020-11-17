import {
	faHome,
	faPlus,
	faServer,
	faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Utility/logos/Logo.png';
import firebase from "firebase/app";
import "firebase/auth";

const UserSidebar = () => {
	const logoStyle = {
		width: '100px',
	};
	const [loggedInUser, setLoggedInUser] = useContext(UserContext)
	const signOut = () => {
		firebase.auth().signOut().then(function () {
			setLoggedInUser({})
			sessionStorage.removeItem("userToken");
			sessionStorage.clear();
		}).catch(function (error) {
			// An error happened.
		});
	}
	return (
		<div className="col-md-2 pl-5">
			<div className="sidebar d-flex flex-column justify-content-space-between">
				<div className="py-2  pb-5">
					<Link to="/">
						<img className="" style={logoStyle} src={logo} alt="" />
					</Link>
				</div>
				<ul className="list-unstyled">
					<li>
						<Link to="/dashboard" className="text-dark">
							<FontAwesomeIcon icon={faHome} /> <span>My Rents</span>
						</Link>
					</li>
					<li>
						<Link to="/" className="text-dark">
							<FontAwesomeIcon icon={faHome} /> <span>Go to Home</span>
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<Link to="" className="text-danger" onClick={signOut}>
					<FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
				</Link>
			</div>
		</div>
	);
};

export default UserSidebar;
