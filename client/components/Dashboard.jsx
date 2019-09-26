import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBusinessList } from '../action/action';

import Resturant from './Resturant.jsx';

export default props => {

  const dispatch = useDispatch();

  const loading = useSelector(state => state.businessList.loading);

  const businessList = useSelector(state => state.businessList.data);

  useEffect(() => {
    dispatch(getBusinessList());
  }, []);

  return <div id='dashboard'>
    {
      businessList ? businessList.businesses.map(business => <Resturant key={business.id} name={business.name} url={business.url} image_url={business.image_url} address={business.address} />) : <div>Don't have business</div>
    }
  </div>
};
