import React from 'react';
import Navbar from '../navbar/nav_bar';

class Reservation extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Navbar />
                hello
            </div>
        )
    }
}

export default Reservation;