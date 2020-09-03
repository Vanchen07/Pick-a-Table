// import React from 'react';
// import NavbarContainer from "../navbar/nav_bar_container";
// import Sidebar from './sidebar';

// class ReservationShow extends React.Component {
//     componentDidMount() {
//         this.props.fetchReservation(this.props.match.params.id)
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.match.params.id !== this.props.match.params.id) {
//             this.props.fetchReservation(this.props.match.params.id)
//         }
//     }

//     render() {
//         // debugger
//         if (!this.props.reservation) return null

//         return (
//             <div >
//                 <NavbarContainer />
//                 <div className="profile-container-wrapper">
//                     <Sidebar />
//                     I'm in reservation show
//                 </div>
//             </div>
//         );
//     }
// }

// export default ReservationShow;