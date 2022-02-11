import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  width: 100%;
  height: 60px;
  border-bottom: thin solid gray;
`;

const Logo = styled.h1`
  font-family: lato;
  margin-left: 10px;
  color: #33353d;

  @media (min-width: 769px) {
    margin-left: 20px;
  }
`;

// eslint-disable-next-line prettier/prettier
export {
  HeaderContainer,
  Logo
};
