import React from 'react';

class LocationLinkBar extends React.Component {
    render () {
        return (
            <div >
                <ul className="location-link-bar">
                    <li className="location-item">Home</li>
                    <li className="location-item">United States</li>
                    <li className="location-item">San Francisco Bay Area</li>
                    <li className="location-item">San Francisco</li>
                </ul>
            </div>
        );
    }
}

export default LocationLinkBar;