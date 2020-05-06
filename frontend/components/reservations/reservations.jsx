import React from 'react';
import Navbar from '../navbar/nav_bar';
import ReservationItem from './reservation_item';

class Reservation extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {
        console.log(this.props)

        if (!this.props.reservations) return null;

        return (
            <div>
                <Navbar />
                {
                    this.props.reservations.map((res, i) => {
                        return (
                            <ReservationItem key={i} res={res}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Reservation;