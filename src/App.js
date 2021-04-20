
import './App.css';
import Home from './Components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Home/Login/Login';
import Navbar from './Components/Home/Navbar/Navbar';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import AddServices from './Components/Dashboard/Dashboard/AddServices/AddServices';
import ManageService from './Components/Dashboard/Dashboard/ManageService/ManageService';
import Book from './Components/Book/Book';
import BookingList from './Components/BookingList/BookingList';
import Review from './Components/Review/Review';
import OrderList from './Components/Dashboard/Dashboard/OrderLlist/OrderList';
import MakeAdmin from './Components/Dashboard/Dashboard/MakeAdmin/MakeAdmin';
import Nomatch from './Components/Nomatch/Nomatch';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
   <Router>
     <Navbar></Navbar>
     <Switch>
       <Route path="/home">
       <Home></Home>
       </Route>
       <Route exact path="/">
       <Home></Home>
       </Route>
       <Route  path="/login">
       <Login></Login>
       </Route>
       <Route path="/admin">
      <Admin></Admin>
       </Route>
       <PrivateRoute path="/orderList">
      <OrderList></OrderList>
       </PrivateRoute>
       <PrivateRoute path="/makeAdmin">
      <MakeAdmin></MakeAdmin>
       </PrivateRoute>
       <PrivateRoute path="/addServices">
      <AddServices></AddServices>
       </PrivateRoute>
       <PrivateRoute path="/manageService">
      <ManageService></ManageService>
       </PrivateRoute>
       <PrivateRoute path="/book/:serviceId">
      <Book></Book>
       </PrivateRoute>
       <PrivateRoute path="/bookingList">
      <BookingList></BookingList>
       </PrivateRoute>
       <PrivateRoute path="/reviews">
      <Review></Review>
       </PrivateRoute>
       <Route path="*">
            <Nomatch/>
          </Route>
       
     </Switch>
   </Router>
   </UserContext.Provider>
    
  );
}

export default App;
