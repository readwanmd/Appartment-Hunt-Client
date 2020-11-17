import React from 'react';
import './ApartmentCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ApartmentCard = ({ apartment }) => {
	const { _id, appName, address, bed, bath, price, imgMain } = apartment;
	const bedIcon = <FontAwesomeIcon icon={faBed} />;
	const locationIcon = <FontAwesomeIcon icon={faMapMarker} />;
	const bathIcon = <FontAwesomeIcon icon={faBath} />;

	return (
		<div className="col-md-6 col-lg-4 my-3">
			<div class="card">
				<img
					class="card-img-top apartmentCard-img"
					src={
						typeof imgMain == 'string'
							? imgMain
							: `data:image/png;base64,${imgMain.img}`
					}
					alt={appName}
				/>
				<div class="card-body">
					<h5 class="card-title">{appName}</h5>
					<div className="details">
						<div className="d-flex align-items-center mb-2">
							<span className="pr-2">{locationIcon}</span>
							<span>
								<p class="card-text">{address}</p>
							</span>
						</div>
						<div className="bed-bath d-flex">
							<div className="d-flex align-items-center">
								<span className="pr-2">{bedIcon}</span>
								<span>
									<p class="card-text">{bed} Bedrooms</p>
								</span>
							</div>
							<div className="d-flex align-items-center">
								<span className="pr-2">{bathIcon}</span>
								<span>
									<p class="card-text">{bath} Bathrooms</p>
								</span>
							</div>
						</div>
					</div>
					<div className="footer d-flex align-items-center pt-4">
						<div className="price brand-color">${price}</div>
						<div className="details-btn">
							{' '}
							<Link to={'apartment/' + _id} className="btn brand-btn">
								View Details
							</Link>{' '}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApartmentCard;
