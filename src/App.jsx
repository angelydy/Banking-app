import './css/index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import WelcomeScreen from './containers/WelcomeScreen';
import AdminScreen from './containers/AdminScreen';
import UserScreen from './containers/UserScreen';

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <WelcomeScreen /> },
    { path: '/admin', element: <AdminScreen /> },
    { path: '/user', element: <UserScreen /> }
  ]);

  return routes;
}

function App() {
  return (
      <div className="App">
        <Router>
          <AppRoutes />
        </Router>
      </div>
  );
}

export default App;
