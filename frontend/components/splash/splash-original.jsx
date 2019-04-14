import React from 'react';
import NavBar from './nav_bar';
import Hero from './hero';

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cuisineImages: [],
            restaurantImages: [],
            neighborhoodImages: []
        };
    }
    componentDidMount() {
        this.props.fetchRestaurants();
        this.fetchCuisineImages();
        this.fetchNeighboodhoodImages();
        this.fetchRestaurantImages();
    }
    fetchCuisineImages() {
        $.ajax({
            method: 'get',
            url: '/api/images/cuisines',        
          }).then(res => {
              this.setState({cuisineImages: res.images})
          });
    }
    fetchRestaurantImages() {
        $.ajax({
            method: 'get',
            url: '/api/images/restaurants',        
          }).then(res => {
              this.setState({restaurantImages: res.images})
          });

    }
    fetchNeighboodhoodImages() {
        $.ajax({
            method: 'get',
            url: '/api/images/neighborhoods',        
          }).then(res => {
              this.setState({neighborhoodImages: res.images})
          });

    }

    renderImageBody(image){
        return(
        <div className="splash-block-body-item">   
            <img className='background-image' src={image.url} alt={image.alt}/>
        </div>
        )
    }

    render () {
        return (
        <div>
            <NavBar/>
            <Hero {...this.props}/>
            <div className="splash-main">
                <section className="splash-block">
                    <div>
                        <div className="splash-block-header">
                            <h2>Popular Restaurants in San Francisco</h2>
                        </div>
                        <div className="splash-block-body">
                            {this.state.restaurantImages.map(image => {
                                return this.renderImageBody(image)
                            })}
                        </div>
                    </div>
                </section>
                <section className="splash-block">
                    <div className="splash-block-header">
                        <h2>Top Cuisines Near You</h2>
                    </div>
                    <div className="splash-block-body">
                        {this.state.cuisineImages.map(image => {
                            return this.renderImageBody(image)
                        })}
                    </div>
                </section>
                <section className="splash-block">
                    <div className="splash-block-header">
                        <h2>Featured Neighborhoods</h2>
                    </div>
                    <div className="splash-block-body">
                        {this.state.neighborhoodImages.map(image => {
                            return this.renderImageBody(image)
                        })}
                    </div>
                </section>
            </div>
        </div>
        );
    }
}

export default Splash;