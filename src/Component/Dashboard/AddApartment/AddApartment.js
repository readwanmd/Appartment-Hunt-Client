import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import UserDashboard from '../UserDashboard/UserDashboard';
import UserSidebar from '../UserSidebar/UserSidebar';

const AddApartment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="container-fluid bg-white">
                <div className="row">
                    <UserSidebar></UserSidebar>
                    <div className="col-md-10 pl-4">
                        <div className="dashboardTitle pt-5 pb-4 ">
                            <div className="title"><h4>Add Apartment</h4></div>
                            {
                                loggedInUser.email ? <div className="username text-right">
                                    <img src={loggedInUser.photo} alt="" />
                                    {loggedInUser.name}
                                </div> : ''
                            }
                        </div>

                        <div className="dashboardBody">
                            <div className="apartmentForm">
                                <div className="row p-4 mb-5">
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label for="title">Title</label>
                                            <input type="text" name="appName" class="form-control" id="title" aria-describedby="title" placeholder="Enter Title" />
                                        </div>
                                        <div class="form-group">
                                            <label for="title">Location</label>
                                            <input type="text" name="address" class="form-control" id="address" aria-describedby="address" placeholder="Enter Title" />
                                        </div>
                                        <div class="form-group">
                                            <label for="title">Number of Bedroom</label>
                                            <input type="text" name="bed" class="form-control" id="bed" aria-describedby="bedroom" placeholder="Bedroom number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label for="title">Number of Bathroom</label>
                                            <input type="text" name="bath" class="form-control" id="bath" aria-describedby="bathroom" placeholder="Bathroom number" />
                                        </div>
                                        <div class="form-group">
                                            <label for="title">Price</label>
                                            <input type="num" name="price" class="form-control" id="price" aria-describedby="price" placeholder="Price" />
                                        </div>
                                        <form>
                                            <div class="form-group">
                                                <label for="exampleFormControlFile1">Example file input</label>
                                                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="submitBtn d-block ml-auto justify-content-center">
                                        <button className="btn brand-btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddApartment;