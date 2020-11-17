import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ApartmentDetails from './Component/ApartmentDetails/ApartmentDetails';
import AddApartment from './Component/Dashboard/AddApartment/AddApartment';
import AdminDashboard from './Component/Dashboard/AdminDashboard/AdminDashboard';
import MyRent from './Component/Dashboard/MyRent/MyRent';
import UserDashboard from './Component/Dashboard/UserDashboard/UserDashboard';
import Error from './Component/Error/Error';
import Homepage from './Component/Homepage/Homepage/Homepage';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Signup from './Component/Signup/Signup';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Component/Login/firebase.config';

export const UserContext = createContext();
export const AdminContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}

	const [admin, setAdmin] = useState(false);
	useEffect(() => {
		fetch('https://still-lowlands-65832.herokuapp.com/adminAccess', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: loggedInUser.email })
		})
			.then(res => res.json())
			.then(data => setAdmin(data))
	}, [loggedInUser.email])


	useEffect(() => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				const signedInUser = {
					isSignedIn: true,
					name: user.displayName,
					email: user.email,
					photo: user.photoURL
				}
				setLoggedInUser(signedInUser)
			} else {
				// No user is signed in.
			}
		});
	}, [])


	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			{/* <UserContext.Provider value={[admin, setAdmin]}> */}
			<Router>
				<Switch>
					<Route exact path="/">
						<Homepage></Homepage>
					</Route>
					<Route exact path="/home">
						<Homepage></Homepage>
					</Route>
					<PrivateRoute path="/apartment/:id">
						<ApartmentDetails></ApartmentDetails>
					</PrivateRoute>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/signup">
						<Signup></Signup>
					</Route>

					{
						admin ?
							<PrivateRoute exact path="/dashboard">
								<AdminDashboard></AdminDashboard>
							</PrivateRoute>
							:
							<PrivateRoute exact path="/dashboard">
								<MyRent></MyRent>
							</PrivateRoute>
					}

					<PrivateRoute exact path="/dashboard/addApartment">
						<AddApartment></AddApartment>
					</PrivateRoute>
					<Route path="*">
						<Error></Error>
					</Route>
				</Switch>
			</Router>
			{/* </UserContext.Provider> */}
		</UserContext.Provider>

	);
}

export default App;
