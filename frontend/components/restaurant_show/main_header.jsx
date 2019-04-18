import React from 'react';

class MainHeader extends React.Component {
    
    render() {
        return (
            <div className="style2" >
               <ul className="main-header">
                   <li className="main-header-list-overview">
                        <a className="overview-link" href="#overview">
                            <span>Overview</span>
                        </a>
                   </li>
                   <li className="main-header-list-reservations">
                        <a className="overview-link-description" href="#">
                            <span>Reservations</span>
                        </a>
                   </li>
                   <li className="main-header-list-description">
                        <a className="overview-link-description" href="#">
                            <span>Description</span>
                        </a>
                   </li>
                   <li className="main-header-list-description">
                        <a className="overview-link-description" href="#">
                            <span>Details</span>
                        </a>
                   </li>
            
               </ul>
            </div>
        )
    }
}

export default MainHeader;