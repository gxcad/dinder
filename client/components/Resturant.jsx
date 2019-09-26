import React, { useState, useEffect } from 'react';

export default props => {
    const { name, url, image_url } = props;
    return (
        <div className='restaurantCard'>
            <h3>{name}</h3>
            <a href={url}>Link</a>
            <img src={image_url} alt="Image" />
        </div>
    )

}