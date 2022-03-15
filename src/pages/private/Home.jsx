import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/context';
import { storage } from '../../servers/firebase/firebase';

export default function Home() {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Bem Vindo</h1>
      {user && user.email}
      <button
        type="submit"
        onClick={handleLogOut}
      >
        Deslogar
      </button>
    </div>
  );
}
