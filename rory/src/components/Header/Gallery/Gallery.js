import React, {Component} from "react";
import PropTypes from 'prop-types';


class Gallery extends Component {
    renderImage(imageUrl) {
        return (
            <div key={imageUrl}>
                <img src={imageUrl}  alt=""/>
            </div>
        );
    }
    render(){
        return (
            <div className="header-img-box">
                    {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl) ) }
            </div>
        )
    }

}
Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Gallery;
