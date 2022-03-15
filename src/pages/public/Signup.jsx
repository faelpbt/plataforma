import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../components/Signup.components';
import { useUserAuth } from '../../context/context';

export default function Singup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signUp(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <S.Container>
      <S.H1>Cadastre-se</S.H1>
      <S.Form onSubmit={handleSubmit}>
        {error && <p>Erro ao Cadastrar</p>}
        <S.Campo>
          <S.Label>E-mail</S.Label>
          <S.Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.Campo>
        <S.Campo>
          <S.Label>Senha</S.Label>
          <S.Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.Campo>
        <S.Campo>
          <S.Button type="submit">Cadastrar</S.Button>
        </S.Campo>
      </S.Form>
    </S.Container>
  );
}
