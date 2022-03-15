import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../components/Singin.components';
import { useUserAuth } from '../../context/context';

export default function Singin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signIn(email, password);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <S.Container>
      <S.H1>Faça Login</S.H1>
      <S.Form onSubmit={handleSubmit}>
        {error && <p>E-mail ou Senha incorretos</p>}
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
          <S.Button type="submit">Entrar</S.Button>
        </S.Campo>
        <S.Campo>
          <S.StyledLink to="/cadastro">Cadastre-se aqui</S.StyledLink>
        </S.Campo>
      </S.Form>
    </S.Container>
  );
}
