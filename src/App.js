import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import UserComponent from './Components/UserComponent';
import GuideForm from './Components/GuideForm';
import PlaceComponent from './Components/PlaceComponent';
import CustNavbar from './Components/CustNavbar';
import HomeNavbar from './Components/HomeNavbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeDisplay from './Components/HomeDisplay';
import Login from './Components/Login';
import { useState } from 'react';
import BookNow from './Components/BookNow';
import SignUp from './Components/SignUp';
import TANavbar from './Components/TANavbar';
import TAViewCustBooking from './Components/TAViewCustBooking'
import TAProfile from './Components/TAProfile'
import TARequestChange from './Components/TARequestChange'
import AdminNavbar from './Components/AdminNavbar';
import AdminHome from './Components/AdminHome';
import ViewGuides from './Components/ViewGuides';
import AddGuides from './Components/AddGuides';
import ViewTreks from './Components/ViewTreks';
import AddTreks from './Components/AddTreks';
import ViewCustomers from './Components/ViewCustomers';
import ViewCustomerBookings from './Components/ViewCustomerBookings';
import CustomerProfile from './Components/CustomerProfile';
function App() {
  let value;
  return (
    <>
    <Router>
          <Route path="/adminHome">
          <AdminNavbar/>
          <AdminHome/>
          </Route>
          <Route path="/viewGuides">
          <AdminNavbar/>
          <ViewGuides/>
          </Route>
          <Route path="/addGuides">
          <AdminNavbar/>
          <AddGuides/>
          </Route>
          <Route path="/viewTreks">
          <AdminNavbar/>
          <ViewTreks/>
          </Route>
          <Route path="/addTreks">
          <AdminNavbar/>
          <AddTreks/>
          </Route>
          <Route path="/viewCust">
          <AdminNavbar/>
          <ViewCustomers/>
          </Route>
          
          
          <Route path="/guideHome">
          <TANavbar/>
          <TAViewCustBooking/>
          </Route>
          <Route path="/guideProfile">
          <TANavbar/>
          <TAProfile/>
          </Route>
          <Route path="/guideReqChange">
          <TANavbar/>
          <TARequestChange/>
          </Route>
          
          
          <Route path="/bookNow">
          <CustNavbar/>
          <BookNow/>
          </Route>
          <Route path="/customerHome">
          <CustNavbar/>
          <PlaceComponent/>
          </Route>
          <Route path="/viewCustomerBookings">
          <CustNavbar/>
          <ViewCustomerBookings/>
          </Route>
          <Route path="/editCustomerProfile">
          <CustNavbar/>
          <CustomerProfile/>
          </Route>
          
          <Route path="/signup">
          <HomeNavbar/>
          <HomeDisplay/>
          <SignUp/>
          </Route>
          <Route path="/login" component={HomeDisplay}>
          <Login/>
          </Route>
          <Route exact path="/" component={HomeNavbar}>
          </Route>
        </Router>
        </>  
  );
}

export default App;
