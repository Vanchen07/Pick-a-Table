import React from 'react';
import SearchField from '../search_field/search_field';

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
                                    <SearchField/>
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
                                                    <h2 className="popular-restaurant-heading">Popular Restaurants in San Francisco</h2>
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
                                            <div className="popular-restaurant-bar">
                                                <div className="popular-restaurant-bar-title">
                                                    <h2 className="popular-restaurant-heading">Top Cuisines in San Francisco</h2>
                                                </div>
                                                <span className="view-all-bar">
                                                    <a className="view-all" target="_blank" href="/search">
                                                        <span>View all</span>
                                                    </a>
                                                </span>
                                            </div>  
                                            <div className="top-cuisines-body">
                                                <div className="top-cuisines-body-container">
                                                    <div className="top-cuisines-body-row">
                                                        <div className="top-cuisines-body-display">
                                                            <div className="top-cuisines-body-display-first">
                                                                <a href="#">
                                                                    <div className="top-cuisines-body-display-img-american">
                                                                        <h5 className="top-cuisines-body-display-heading">
                                                                            <span className="top-cuisines-body-display-heading-span">
                                                                                Best American Restaurants Around You
                                                                            </span>
                                                                        </h5>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="top-cuisines-body-display-middle">
                                                                <a href="#">
                                                                    <div className="top-cuisines-body-display-img-italian">
                                                                        <h5 className="top-cuisines-body-display-heading">
                                                                            <span className="top-cuisines-body-display-heading-span">
                                                                                Best Italian Restaurants Around You
                                                                            </span>
                                                                        </h5>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="top-cuisines-body-display-middle">
                                                                <a href="#">
                                                                    <div className="top-cuisines-body-display-img-seafood">
                                                                        <h5 className="top-cuisines-body-display-heading">
                                                                            <span className="top-cuisines-body-display-heading-span">
                                                                                Best Seafood Restaurants Around You
                                                                            </span>
                                                                        </h5>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="top-cuisines-body-display-middle">
                                                                <a href="#">
                                                                    <div className="top-cuisines-body-display-img-french">
                                                                        <h5 className="top-cuisines-body-display-heading">
                                                                            <span className="top-cuisines-body-display-heading-span">
                                                                                Best French Restaurants Around You
                                                                            </span>
                                                                        </h5>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            {/* <div className="top-cuisines-body-display-last"></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        {/* <section></section> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="splash-footer"></div> */}
            </div>
        )
    }
}   

export default SplashBody;