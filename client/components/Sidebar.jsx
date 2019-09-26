import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

const Sidebar = props => {
  const dispatch = useDispatch();
  const [favs, setFavs] = useState([]);
  const [favsList, setFavsList] = useState([]);

  // get favs data from reducer
  // const favsFromDB = useSelector(state => state.favs);

  const deleteFav = yelpid => dispatch({
    type: 'DELETE_FAV',
    payload: yelpid
  });


  // populate fav list with favs data; runs it on mount and injected dependency with favs
  useEffect(() => {
    const list = favs.map(fav => {
      return <li key={fav.yelpid}>
        <img src={fav.imgurl} />
        <div className='fav-details'>
          <p>{fav.name}</p>
          <p>{fav.address}</p>
        </div>
        <button className='next' onClick={() => deleteFav(fav.yelpid)}>
          <i className='fa fa-times'></i>
        </button>
      </li>
    });

    setFavsList(list); // set favs list component
  }, [favs]);

  return <div>
    <nav>
      <div className='nav-container'>
        <div
          className='image-frame'
          onClick={() => {
            // secret();
            // pressPlay();
          }}
        >
          <img className='logo' src={'../assets/logo.png'} />
        </div>
        <h1>Dinder</h1>
        <button
          className='history'
          onClick={() => {
            // toggleSidebar();
            // favs;
          }}
        >
          <i className='fa fa-history'></i>
        </button>
      </div>
    </nav>
    {
      props.isSidebarOpen && <div className='popup'>
        <div className='popup-header'>
          <h2>Favorites:</h2>
          <button className='back'>
            <i className='fa fa-arrow-left'></i>
          </button>
        </div>
        <ul>{favsList}</ul>
      </div>
    }
  </div>;
};

class SidebarOld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isSidebarOpen,
      deleteFav,
      favs,
      toggleSidebar,
      dance,
      secret,
      pressPlay
    } = this.props;

    let playSecret = dance ? 'dance' : '';

    const favsList = favs.map((fav, idx) => {
      return (
        <li key={idx}>
          <img src={fav.imgurl} />
          <div className='fav-details'>
            <p>{fav.name}</p>
            <p>{fav.address}</p>
          </div>
          <button className='next' onClick={() => deleteFav(fav.yelpid)}>
            <i className='fa fa-times'></i>
          </button>
        </li>
      );
    });

    // when sidebar is open, show favs list
    if (isSidebarOpen) {
      return (
        <div>
          <nav>
            <div className='nav-container'>
              <div
                className='image-frame'
                onClick={() => {
                  secret();
                  pressPlay();
                }}
              >
                <img className='logo' src={'../assets/logo.png'} />
              </div>
              <h1>Dinder</h1>
              <button
                className='history'
                onClick={() => {
                  toggleSidebar();
                  favs;
                }}
              >
                <i className='fa fa-history'></i>
              </button>
            </div>
          </nav>
          <div className='popup'>
            <div className='popup-header'>
              <h2>Favorites:</h2>
              <button className='back' onClick={() => toggleSidebar()}>
                <i className='fa fa-arrow-left'></i>
              </button>
            </div>
            <ul>{favsList}</ul>
          </div>
        </div>
      );
    }

    // when sidebar is collapsed, only show the Show Favs button
    return (
      <nav>
        <div className='nav-container'>
          <div
            className='image-frame'
            onClick={() => {
              secret();
              pressPlay();
            }}
          >
            <img className='logo' src={'../assets/logo.png'} />
          </div>
          <h1>Dinder</h1>
          <button
            className='history'
            onClick={() => {
              toggleSidebar();
              favs;
            }}
          >
            <i className='fa fa-history'></i>
          </button>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
