import React from 'react';

class MainHeader extends React.Component {
    
    render() {
        return (
            <div >
               <ul className="main-header">
                   <li className="main-header-list">Overview</li>
                   <li className="main-header-list">Description</li>
                   <li className="main-header-list">Details</li>
                   <li className="main-header-list">Reviews</li>
               </ul>
            </div>
        )
    }
}

export default MainHeader;