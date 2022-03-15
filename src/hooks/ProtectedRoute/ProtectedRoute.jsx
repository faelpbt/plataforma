import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../../context/context';

export default function ProtectedRote({ children }) {
  const { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}