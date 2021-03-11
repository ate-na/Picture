import React from 'react';
import './Imagelist.css';
class ImageCard extends React.Component{
    state={span:0}
imageRef=React.createRef();
componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setspan);
}
setspan=()=>{
    const hieght= this.imageRef.current.clientHeight;
    const spans = Math.ceil(hieght / 10);
    this.setState({ spans });
}
render(){

    return(
    <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
    <img className="a"
        src={ this.props.image.urls.regular}
        alt={ this.props.image.alt_description}
        ref={this.imageRef}
         />
    </div>)
}
}
export default ImageCard;