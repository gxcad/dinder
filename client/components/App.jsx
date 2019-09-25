import React, { Component, useEffect, useState } from 'react';
import Sidebar from './Sidebar.jsx';
import MainContainer from './MainContainer.jsx';
import axios from 'axios';
import key from '../../config/keys';
import Login from './Loginpage.jsx';
import Signup from './Signup.jsx';
import { Redirect } from "react-router-dom";

import Dashboard from './Dashboard.jsx';
let MAX_SIZE = 0;

const App = props => {
  const [sidebar, setSidebar] = useState(false);
  const [dance, setDance] = useState(false);
  const [visited, setVisited] = useState({});
  const [play, setPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const audio = new Audio('https://iringtone.net/rington/file?id=8454&type=sound&name=mp3');

  useEffect(() => {
    if (play) audio.play();
    else audio.pause();
  }, [play]);

  // function invokes when the next button is clicked in MainContainer
  const moveNext = () => { // this brings new card
    let visited = Object.assign(visited);
    visited[currentIndex] = true;

    setCurrentIndex(getRandomNum(MAX_SIZE));
    // if currentIndex is already visited get another one
    while (visited[currentIndex]) {
      setCurrentIndex(getRandomNum(MAX_SIZE));
    }
    setVisited(visited);
    setFetchingDetails(false);
  };

  return (
    <div className={`container`}>
      <Sidebar
        isSidebarOpen={sidebar}
        toggleSidebar={() => setSidebar(!sidebar)}
        dance={dance}
        secret={() => setDance(!dance)}
        pressPlay={setPlay}
      />
      <Dashboard />
      {/*<MainContainer*/}
      {/*  moveNext={moveNext}*/}
      {/*/>*/}
    </div>
  );
};

// class AppOld extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       businessList: [], //
//       currentIndex: 0,
//       visited: {},
//       favs: [],
//       fetchingDetails: false,
//       isSidebarOpen: false,
//       currentUser: '',
//       verified: false,
//       rerender: false,
//       dance: false,
//       play: false,
//       user: "",
//       pass: "",
//       createUser: false
//     };
//     this.signup = this.signup.bind(this);
//     this.toggleSidebar = this.toggleSidebar.bind(this);
//     this.addFav = this.addFav.bind(this);
//     this.deleteFav = this.deleteFav.bind(this);
//     this.moveNext = this.moveNext.bind(this);
//     this.verify = this.verify.bind(this);
//     this.secret = this.secret.bind(this);
//     this.pressPlay = this.pressPlay.bind(this);
//     this.audio = new Audio(
//       'https://iringtone.net/rington/file?id=8454&type=sound&name=mp3'
//     );
//   }
//
//
//   // // launch signup page after clicked the signup button
//   // signupOpen() {
//   //   this.setState({ createUser: false });
//   //   console.log("click");
//   // }
//
//   // // signup functions
//   // signup(e) {
//   //   e.preventDefault();
//   //   const user = e.target.username.value;
//   //   const pass = e.target.password.value;
//   //
//   //   axios
//   //     .post('/signup', { user: user, pass: pass })
//   //     .then(res => {
//   //       console.log(res.data)
//   //       if (res.data === "createUser") {
//   //         this.setState({ createUser: true, currentUser: user, rerender: true, user: user, pass: pass })
//   //       }
//   //     })
//   //     .catch(err => console.error);
//   // }
//
//   // //login functions
//   // verify(e) { // verify users to login
//   //   e.preventDefault();
//   //   const user = e.target.username.value;
//   //   const pass = e.target.password.value;
//   //
//   //   // post request for login by updating the state user and password
//   //   axios
//   //     .post('/login', { user: user, pass: pass })
//   //     .then(res => {
//   //       console.log(res.data)
//   //       if (res.data === "verified") {
//   //         this.setState({ verified: true, currentUser: user, rerender: true });
//   //       }
//   //     })
//   //     .catch(err => console.error);
//   // }
//
//   // function invokes when the show Favs button is clicked in Sidebar
//   toggleSidebar() { // open and close sidebar
//     console.log("sideBar")
//     this.setState({
//       isSidebarOpen: !this.state.isSidebarOpen
//     });
//   }
//
//   // // function invokes when the heart button is clicked in MainContainer
//   // addFav() { // add favorite
//   //   let favs = this.state.favs.slice();
//   //   let visited = Object.assign(this.state.visited);
//   //   console.log("visited=>", visited)
//   //
//   //   favs.push(this.state.businessList[this.state.currentIndex]);
//   //   console.log(favs);
//   //   console.log("business ->", this.state.businessList)
//   //   visited[this.state.currentIndex] = true;
//   //
//   //   let currentIndex = getRandomNum(MAX_SIZE);
//   //
//   //   // if currentIndex is already stored in visited, get another one
//   //   while (visited[currentIndex]) {
//   //     currentIndex = getRandomNum(MAX_SIZE);
//   //   }
//   //   console.log("addFav ==> ", favs, visited)
//   //
//   //   this.setState({
//   //     currentIndex,
//   //     visited,
//   //     favs,
//   //     fetchingDetails: false
//   //   });
//   //
//   //   // post new favorite which is current business to the database
//   //   axios
//   //     .post('/favorites', {
//   //       business: this.state.businessList[this.state.currentIndex],
//   //       user: this.state.currentUser
//   //     })
//   //     .then(res => {
//   //       console.log(res.data);
//   //     })
//   //     .catch(err => console.error);
//   // }
//
//   // // function invokes when '??' button is clicked in Sidebar
//   // deleteFav(yelpid) { // delete favorite
//   //   axios
//   //     .delete('/favorites', {
//   //       data: { currentUser: this.state.currentUser, yelpid }
//   //     })
//   //     .then(res => {
//   //       const updateFavs = this.state.favs.filter(fav => fav.yelpid !== yelpid);
//   //       this.setState({ favs: updateFavs });
//   //       console.log(res.data);
//   //     })
//   //     .catch(err => console.error);
//   // }
//
//   // function invokes when the next button is clicked in MainContainer
//   moveNext() { // this brings new card
//     let visited = Object.assign(this.state.visited);
//     visited[this.state.currentIndex] = true;
//
//     let currentIndex = getRandomNum(MAX_SIZE);
//     // if currentIndex is already visited get another one
//     while (visited[currentIndex]) {
//       currentIndex = getRandomNum(MAX_SIZE);
//     }
//
//     this.setState({
//       currentIndex,
//       visited,
//       fetchingDetails: false
//     });
//   }
//
//   secret() { // card dancing effect
//     this.setState({ dance: !this.state.dance });
//   }
//
//   pressPlay() { // plays music
//     this.setState({ play: true });
//     this.audio.play();
//   }
//
//   //
//   componentDidUpdate() {
//     if (this.state.rerender === true) {
//       // get data from yelp business endpoint
//       axios
//         .get(
//           `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${LOCATION_SEARCHED}`,
//           {
//             headers: {
//               Authorization: `Bearer ${key.API_KEY}`
//             },
//             params: {
//               categories: 'restaurants, All',
//               limit: 50
//             }
//           }
//         )
//         .then(res => {
//           // create state businessList with necessary infos
//           let businessList = [];
//           for (let restaurant of res.data.businesses) { // res.data.businesses is an array with objects
//             const businessObj = {
//               yelpid: restaurant.id,
//               name: restaurant.name,
//               address:
//                 restaurant.location.display_address[0] +
//                 ', ' +
//                 restaurant.location.display_address[1],
//               imgurl: restaurant.image_url,
//               yelpurl: restaurant.url
//             };
//             businessList.push(businessObj);
//           }
//
//           // get favorites from back end database
//           axios
//             .post('/favorites/fav', { user: this.state.currentUser })
//             .then(({ data }) => {
//               const favs = data;
//
//               // filtering favs from business list
//               const yelpIdArr = [];
//
//               for (const fav of favs) {
//                 yelpIdArr.push(fav.yelpid);
//               }
//
//               const filteredBusinessList = businessList.filter(businessObj => {
//                 return yelpIdArr.indexOf(businessObj.yelpid) === -1;
//               });
//
//               MAX_SIZE = filteredBusinessList.length;
//               const currentIndex = getRandomNum(MAX_SIZE);
//
//               this.setState({
//                 businessList: filteredBusinessList,
//                 currentIndex,
//                 favs,
//                 rerender: false
//               });
//               // console.log("this.state.businessList: ", this.state.businessList);
//               // console.log("this.state.favs: ", this.state.favs);
//             })
//             .catch(err =>
//               console.log(`App.componentDidMount: get favorites: Error: ${err}`)
//             );
//         })
//         .catch(err =>
//           console.log(
//             `App.componentDidMount: get businesses from yelp: Error: ${err}`
//           )
//         );
//     }
//   }
//
//   render() {
//     // if verified is false in this.state, return to the Login page
//     // this.verify assigns to verification, and verification passing down to Loginpage.
//     if (this.state.verified === false) {
//       // return < Redirect to="/homepage" />
//       return (
//         <main>
//           <Login verification={this.verify} />
//         </main>
//       );
//     }
//
//     // if createUser is false, then open the signup page
//     if (this.state.createUser === false) {
//
//       return (
//         <main>
//           <Signup newUserInfo={this.signup} />
//         </main>
//       );
//     }
//
//     if (this.state.businessList.length === 0) {
//       return (
//         <main>
//           <div className='modal'>
//             <h1>Loading...</h1>
//           </div>
//         </main>
//       );
//     }
//
//     let dance = this.state.dance ? 'dance' : '';
//
//     return (
//       <div className={`container ${dance}`}>
//         <Sidebar
//           favs={this.state.favs}
//           isSidebarOpen={this.state.isSidebarOpen}
//           toggleSidebar={this.toggleSidebar}
//           deleteFav={this.deleteFav}
//           dance={this.state.dance}
//           secret={this.secret}
//           pressPlay={this.pressPlay}
//         />
//         <MainContainer
//           currentBusiness={this.state.businessList[this.state.currentIndex]}
//           addFav={this.addFav}
//           moveNext={this.moveNext}
//         />
//       </div>
//     );
//   }
// }


function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

export default App;
