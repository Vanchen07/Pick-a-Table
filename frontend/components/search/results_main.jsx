import React from 'react';
import MainSideBar from './main_side_bar';
import MainBody from './main_body';

class ResultsMain extends React.Component {
    render () {
        return (
            <div>
                <MainSideBar {...this.props}/>
                <MainBody {...this.props}/>
            </div>
        );
    }
}

export default ResultsMain;

