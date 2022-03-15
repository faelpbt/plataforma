import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #27282f;
`;

export const Form = styled.form`
  height: 300px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #c2c2c2;
`;

export const Campo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 6px;
  border-style: none;
  padding: 3px;
  margin-bottom: 4px;
`;

export const H1 = styled.h1`
  color: #fff;
`;

export const Label = styled.label`
  color: #000;
  font-size: 17px;
`;

export const Button = styled.button`
  font-size: 17px;
  border-radius: 6px;
  border-style: none;
`;
