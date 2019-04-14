import React from 'react';
import NavBar from './nav_bar';
import Splashbody from './splashbody';

class Splash extends React.Component {
   
    render () {
        return (
        <div>
            <NavBar/>
            <Splashbody/>
        </div>
        );
    }
}

export default Splash;