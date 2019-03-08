import React from 'react';
import SearchBar from '../search/search_bar';

class Hero extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [],
            currentImage: null
        }
        this.changeImage = this.changeImage.bind(this)
    }
    
    componentDidMount() {
        this.transition = setInterval(this.changeImage, 10000)
        $.ajax({
            method: 'GET',
            url: '/api/images'
        }).then((response)=>{
            this.setState({
                images: response.images,
                currentImage: response.images[0]
            })
        })
    }

    changeImage() {
        const newImage = this.state.images[Math.floor(Math.random() * this.state.images.length)]
        this.setState({currentImage: newImage})
    }
    componentWillUnmount () {
        clearInterval(this.transition)
    }
    renderBackgroundImage(){
        if(this.state.currentImage) {
            return(
                <img className="background-image" src={this.state.currentImage.url} alt={this.state.currentImage.alt}/>
            )
        }
    }
    
    render () {
        return(
        <div>
            <div className="hero-container" >
                {this.renderBackgroundImage()}
            </div>
            <div className="hero-container search-bar">
            <SearchBar {...this.props} />
            </div>
        </div>
        )
    }
}

export default Hero;