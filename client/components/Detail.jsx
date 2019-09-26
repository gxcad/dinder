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

  let counter = 0;
  return currentBusiness ?
    <div className={'container detail'}>
      <Sidebar isSidebarOpen={false} />
    <main className={''}>
    <div className={'modal details'}>
    <div className='details-content'>
      <div className={'detail-top'}>
        {
          currentBusiness.photos.map(url => {
            return counter++ < 2 ? <img key={url} src={url} alt="Photo"/> : undefined
          })
        }
      </div>
      <div className={'detail-bottom'}>
        <h3>{currentBusiness.name}</h3>
        <p>Address: {currentBusiness.location.address1}</p>
        <p>Phone Number: {currentBusiness.display_phone}</p>
        <p>Rating: {currentBusiness.rating}</p>
        <p>{currentBusiness.review_count} reviews</p>
        <p>Price: {currentBusiness.price}</p>       
      </div>
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