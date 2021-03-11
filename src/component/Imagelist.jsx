import React from 'react';
import './Imagelist.css';
import ImageCard from './ImageCard';
const Imagelist=({images})=>{
    const imgs =images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ));
    return <div className="image-list">{imgs}</div>
}
export default Imagelist;
