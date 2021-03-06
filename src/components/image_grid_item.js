import React, { Component } from 'react';

class ImageGridItem extends Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageError() {
    this.setState({ imageStatus: "failed to load image" });
  }

  render() {
    return (
      <div className="col-sm">
        <div className={`card`}>
          <img 
            className="card-img-top"
            src={this.props.image_url} 
            alt="First API request result" 
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageError.bind(this)}
          />
          <div className="card-body">
            <h5 className="card-text">{this.props.description}</h5>
          </div>
        </div>
      </div>
    );
  }
  
};

export default ImageGridItem;
