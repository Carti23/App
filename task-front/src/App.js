import Navbar from './components/navBr';
import './App.css';
import UserListPage from './pages/UserListPage'
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import { Switch } from 'react-router-dom';
import PostUserForm from './pages/PostUserForm';
import GroupsList from './pages/GroupsList';
import PostGroupForm from './pages/PostGroupForm';
import NotePage from './pages/UpdateUser';
import GroupPage from './pages/UpdateGroup';
import UpdateUser from './pages/UpdateUser';


function App() {
  return (
      <div className="container dark">
        <div className="app">
          <Router>
            <Navbar />
            <Switch>
              <Route path="/users-list" component={UserListPage} />
              <Route path="/create-user" component={PostUserForm} />
              <Route path="/groups" component={GroupsList} />
              <Route path="/create-group" component={PostGroupForm} />
              <Route path="/customer/:id"  component={NotePage} />
              <Route path="/group/:id"  component={GroupPage} />
              <Redirect exact from='/' to="/users-list" />
            </Switch>
          </Router>
        </div>
      </div>
  );
}



export default App;
