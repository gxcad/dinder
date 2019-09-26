import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


// const loading = useSelector(state => state.getCurrentBusiness.loading)


export default props => {
    const { name, url, image_url, address } = props;
    return (
        <div className='resturantCard'>
            <h3>{name}</h3>
            <Link to={'/resturant'}><img src={image_url} alt="Image" /> </Link>
            <a href={url}>Yelp Details</a>
            <p className="googlemap">{address} Google Map</p>
        </div>
    )

}