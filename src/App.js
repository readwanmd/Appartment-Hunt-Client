import { createContext, useState } from 'react';
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
import Signup from './Component/Signup/Signup';

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Homepage></Homepage>
					</Route>
					<Route exact path="/home">
						<Homepage></Homepage>
					</Route>
					<Route path="/apartment/:id">
						<ApartmentDetails></ApartmentDetails>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/signup">
						<Signup></Signup>
					</Route>
					<Route exact path="/adminDashboard">
						<AdminDashboard></AdminDashboard>
					</Route>
					<Route exact path="/dashboard">
						<UserDashboard></UserDashboard>
					</Route>
					<Route exact path="/dashboard/addApartment">
						<AddApartment></AddApartment>
					</Route>
					<Route exact path="/dashboard/myRents">
						<MyRent></MyRent>
					</Route>
					<Route path="*">
						<Error></Error>
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
