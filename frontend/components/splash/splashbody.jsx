import React from 'react';

class SplashBody extends React.Component {
    render() {
        return(
            <div className='splash-body-container'>
                <div className="page-header">
                    <div className="page-header-hero">
                        <div className="content-block">
                            <div className="dtp-title">
                                <div className="content-block-header">
                                    <div className="page-header-title">Find your table for any occasion</div>
                                </div>
                                <div className="content-block-body">
                                    <div className="dtp-picker">
                                        <form className="dtp-picker-form" action="">
                                            <div className="dtp-picker-selectors-container">
                                                <div className="dtp-party-size">
                                                    <a className="select-label-party">2 people <i class="fas fa-angle-down angle-icon"></i></a>
                                                    
                                                    <select className="party-dropdown" name="Select_1" aria-label="party size" >
                                                        <option value="1">1 person</option>
                                                        <option value="2">2 people</option>
                                                        <option value="3">3 people</option>
                                                        <option value="4">4 people</option>
                                                        <option value="5">5 people</option>
                                                        <option value="6">6 people</option>
                                                        <option value="7">7 people</option>
                                                        <option value="8">8 people</option>
                                                        <option value="9">9 people</option>
                                                        <option value="10">10 people</option>
                                                        <option value="11">Larger Party</option>
                                                    </select>
                                    
                                                </div>
                                                <div className="dtp-date-picker">
                                                    <a className="select-label-party">Date <i class="fas fa-angle-down angle-icon"></i></a>
                                                    
                                                </div>
                                                <div className="dtp-time-picker">
                                                    <a className="select-label-party">7:00 PM <i class="fas fa-angle-down angle-icon"></i></a>

                                                </div>
                                            </div>
                                            <div className="dtp-picker-search-container">
                                                <a className="select-label-party">Neighborhood </a>

                                            </div>
                                            <input className="dtp-picker-button" type="submit" value="Let's go"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-wrapper">
                    <div className="page-main">
                        <div className="page-main-content">
                            <div className="row-page-content">
                                <div className="column-page-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   

export default SplashBody;