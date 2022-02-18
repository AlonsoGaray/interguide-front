import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  width: 100%;
  height: 65px;
  border-bottom: thin solid gray;

  svg {
    width: 30px;
    height: 30px;
  }
`;

const Logo = styled.h1`
  font-family: lato;
  margin-left: 10px;
  color: rgb(10, 149, 255);

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 769px) {
    margin-left: 20px;
  }
`;

// eslint-disable-next-line prettier/prettier
export {
  HeaderContainer,
  Logo
};
