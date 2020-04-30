import React from 'react';
import NavBar from '../navbar/nav_bar';
import Splashbody from './splashbody';
import Footer from '../footer/footer';

class Splash extends React.Component {
   
    render () {
        return (
        <div className="splash-display">
            <NavBar {...this.props}/>
            <Splashbody {...this.props}/>
            <Footer/>
        </div>
        );
    }
}

export default Splash;