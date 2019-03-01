import React from 'react';

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
        return(<div className="hero-container">
            {this.renderBackgroundImage()}
        </div>)
    }
}

export default Hero;