import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import Splashbody from './splashbody';
import Footer from '../footer/footer';

class Splash extends React.Component {
   
    render () {
        return (
        <div className="splash-display">
            <NavBarContainer />
            <Splashbody {...this.props}/>
            <Footer/>
        </div>
        );
    }
}

export default Splash;