import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserDetail from './components/UserDetail';
import './index.css'
import UserList from './components/UserList';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/users/page=2" element={<PrivateRoute><UserList /></PrivateRoute>} /> */}
        <Route path= "/users/:id" element={<PrivateRoute><UserDetail /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
      </Routes>
  );
};

export default App;