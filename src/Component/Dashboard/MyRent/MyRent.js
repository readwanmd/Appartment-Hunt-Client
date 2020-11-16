import { faComment, faHome, faPlus, faServer, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import DashboardTitle from '../DashboardTitle/DashboardTitle';
import logo from '../../../Utility/logos/Logo.png'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import UserSidebar from '../UserSidebar/UserSidebar';

const MyRent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <div className="container-fluid bg-white">
                <div className="row">
                    <UserSidebar></UserSidebar>
                    <div className="col-md-10 pl-4">
                        <div className="dashboardTitle pt-5 pb-4 ">
                            <div className="title"><h4>My Rents</h4></div>
                            {
                                loggedInUser.email ? <div className="username text-right">
                                    <img src={loggedInUser.photo} alt="" />
                                    {loggedInUser.name}
                                </div> : ''
                            }
                        </div>

                        <div className="dashboardBody">
                            <div className="dashboardTable">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">House Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="align-items-center">
                                            <td>House Name</td>
                                            <td>Price</td>
                                            <td><Link to=""><button className="btn brand-btn">View Details</button></Link></td>
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

export default MyRent;