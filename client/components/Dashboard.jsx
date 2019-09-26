import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBusinessList } from '../action/action';

export default props => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinessList());
  }, []);

  return <div>Dashboard</div>
};
