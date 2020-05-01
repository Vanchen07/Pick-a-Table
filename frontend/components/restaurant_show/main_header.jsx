import React from 'react';

class MainHeader extends React.Component {
    constructor(props) {
        super(props)

        this.scrollToOverview = this.scrollToOverview.bind(this);
        this.scrollToRes = this.scrollToRes.bind(this);
        this.scrollToDes = this.scrollToDes.bind(this);
        this.scrollToAttributes = this.scrollToAttributes.bind(this);
    }

    scrollToOverview(e) {
        e.preventDefault();
        let ele = document.getElementById('scroll-overview');
        ele.scrollIntoView();
    }

    scrollToRes(e) {
        e.preventDefault();
        let ele = document.getElementById('scroll-reservation');
        ele.scrollIntoView();
    }

    scrollToDes(e) {
        e.preventDefault();
        let ele = document.getElementById('scroll-description');
        ele.scrollIntoView();
    }

    scrollToAttributes(e) {
        e.preventDefault();
        let ele = document.getElementById('scroll-attributes');
        ele.scrollIntoView();
    }
    
    render() {
        return (
            <div className="style2" >
               <ul className="main-header">
                   <li className="main-header-list-overview">
                        <a className="overview-link" href="#" onClick={this.scrollToOverview}>
                            <span id="scroll-overview">Overview</span>
                        </a>
                   </li>
                   <li className="main-header-list-reservations">
                        <a className="overview-link-description" href="#" onClick={this.scrollToRes}>
                            <span>Reservations</span>
                        </a>
                   </li>
                   <li className="main-header-list-description">
                        <a className="overview-link-description" href="#" onClick={this.scrollToDes}>
                            <span>Description</span>
                        </a>
                   </li>
                   <li className="main-header-list-description">
                        <a className="overview-link-description" href="#" onClick={this.scrollToAttributes}>
                            <span>Details</span>
                        </a>
                   </li>
            
               </ul>
            </div>
        )
    }
}

export default MainHeader;