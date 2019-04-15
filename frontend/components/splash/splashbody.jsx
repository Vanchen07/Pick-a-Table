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
                                    <div id="react-root">
                                        <div className="bar">
                                            <div className="bar-subbar">
                                            </div>
                                        </div>
                                        <section>
                                            <div className="popular-restaurant-bar">
                                                <div className="popular-restaurant-bar-title">
                                                    <h2 className="popular-restaurant-heading">Popular restaurants in San Francisco</h2>
                                                </div>
                                                <span className="view-all-bar">
                                                    <a className="view-all" target="_blank" href="/search">
                                                        <span>View all</span>
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="popular-restaurant-body">
                                                <div className="popular-restaurant-main-container">
                                                    <div className="popular-restaurant-main">
                                                        <div className="popular-restaurant-list">
                                                            <div className="popular-restaurant-list-item-first">
                                                                <a target="_blank" href="#">
                                                                    <div className="popular-restaurant-list-item-content">
                                                                        <div className="absinthe-head">
                                                                        </div>
                                                                        <div className="absinthe-body">
                                                                            <h3  className="absinthe-body-name">Absinthe Brasserie and Bar - SF</h3>
                                                                            <div className="absinthe-body-attributes">
                                                                                <span className="absinthe-body-attributes-cuisine">French</span>
                                                                                <span className="absinthe-body-attributes-dollars">
                                                                                    <span className="absinthe-body-attributes-dollars-signs">$$$</span>
                                                                                </span>
                                                                                <span className="absinthe-body-attributes-neighborhood">Civic Center</span>
                                                                            </div>
                                                                            <div className="absinthe-body-booked">
                                                                                <div className="absinthe-body-booked-body">
                                                                                    <div><i class="fas fa-chart-line"></i></div>
                                                                                    <div className="absinthe-body-booked-text">Booked 134 times today</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="popular-restaurant-list-item">
                                                                <a target="_blank" href="#">
                                                                    <div className="popular-restaurant-list-item-content">
                                                                        <div className="flour-head">
                                                                        </div>
                                                                        <div className="absinthe-body">
                                                                            <h3 className="absinthe-body-name">Flour + Water</h3>
                                                                            <div className="absinthe-body-attributes">
                                                                                <span className="absinthe-body-attributes-cuisine">Italian</span>
                                                                                <span className="absinthe-body-attributes-dollars">
                                                                                    <span className="absinthe-body-attributes-dollars-signs">$$</span>
                                                                                </span>
                                                                                <span className="absinthe-body-attributes-neighborhood">Mission</span>
                                                                            </div>
                                                                            <div className="absinthe-body-booked">
                                                                                <div className="absinthe-body-booked-body">
                                                                                    <div><i class="fas fa-chart-line"></i></div>
                                                                                    <div className="absinthe-body-booked-text">Booked 52 times today</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="popular-restaurant-list-item">
                                                                <a target="_blank" href="#">
                                                                    <div className="popular-restaurant-list-item-content">
                                                                        <div className="cala-head">
                                                                        </div>
                                                                        <div className="absinthe-body">
                                                                            <h3 className="absinthe-body-name">Cala</h3>
                                                                            <div className="absinthe-body-attributes">
                                                                                <span className="absinthe-body-attributes-cuisine">Mexican</span>
                                                                                <span className="absinthe-body-attributes-dollars">
                                                                                    <span className="absinthe-body-attributes-dollars-signs">$$$</span>
                                                                                </span>
                                                                                <span className="absinthe-body-attributes-neighborhood">Civic Center</span>
                                                                            </div>
                                                                            <div className="absinthe-body-booked">
                                                                                <div className="absinthe-body-booked-body">
                                                                                    <div><i class="fas fa-chart-line"></i></div>
                                                                                    <div className="absinthe-body-booked-text">Booked 53 times today</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="popular-restaurant-list-item-last">
                                                                <a target="_blank" href="#">
                                                                    <div className="popular-restaurant-list-item-content">
                                                                        <div className="le-head">
                                                                        </div>
                                                                        <div className="absinthe-body">
                                                                            <h3 className="absinthe-body-name">Le P'tit Laurent</h3>
                                                                            <div className="absinthe-body-attributes">
                                                                                <span className="absinthe-body-attributes-cuisine">French</span>
                                                                                <span className="absinthe-body-attributes-dollars">
                                                                                    <span className="absinthe-body-attributes-dollars-signs">$$</span>
                                                                                </span>
                                                                                <span className="absinthe-body-attributes-neighborhood">Glen Park</span>
                                                                            </div>
                                                                            <div className="absinthe-body-booked">
                                                                                <div className="absinthe-body-booked-body">
                                                                                    <div><i class="fas fa-chart-line"></i></div>
                                                                                    <div className="absinthe-body-booked-text">Booked 20 times today</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section>
                                            
                                        </section>
                                        <section>
                                            
                                        </section>
                                    </div>
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