import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from '../context/context';

import Signin from '../pages/public/Signin';
import Signup from '../pages/public/Signup';
import Home from '../pages/private/Home';
import ProtectedRoute from '../hooks/ProtectedRoute/ProtectedRoute';

export default function AppRoutes() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route
          path="/home"
          element={(
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
)}
        />
      </Routes>
    </UserAuthContextProvider>
  );
}
