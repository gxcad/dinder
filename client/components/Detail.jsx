import React, {useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { getCurrentBusiness } from '../action/action';
import Sidebar from "./Sidebar.jsx";
import ReactLoading from "react-loading";

export default props => {
  const id = props.match.params.id;

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCurrentBusiness(id));
  }, []);

  const currentBusiness = useSelector(state => state.currentBusiness.data);

  return currentBusiness ?
    <div className={'container'}>
      <Sidebar isSidebarOpen={false} />
    <main className={'detail'}>
    <div className={'modal details'}>
    <div className='details-content'>
      <h3>{currentBusiness.name}</h3>
      <p>Address: {currentBusiness.location.address1}</p>
      <p>Rating: {currentBusiness.rating}</p>
      <p>{currentBusiness.review_count} reviews</p>
      <p>Price: {currentBusiness.price}</p>
    </div>
    <div className='button-group'>
      <button
        className='fav'
        onClick={() => {
          // addFav();
          // this.resetState();
        }}
      >
        <i className='fa fa-heart' />
      </button>
      <button
        className='next'
        onClick={() => {
          // moveNext();
          // this.resetState();
        }}
      >
        <i className='fa fa-times' />
      </button>
      <a
        className='yelp'
        href={currentBusiness.url}
        target='_blank'
      >
        <i className='fa fa-info' />
      </a>
    </div>
  </div>
    </main>
    </div>
      : <ReactLoading type={'bars'} color={'#000000'} height={350} width={350} />;
};