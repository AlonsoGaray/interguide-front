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

  @media (min-width: 769px) {
    margin-left: 20px;
  }
`;

const LogoutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw;

  @media (min-width: 630px) {
    width: 20vw;
  }

  @media (min-width: 1025px) {
    width: 15vw;
  }
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Button = styled.button`
  font-size: 1.5rem;
  text-decoration: none;
  padding: 5px;
  border: 1px solid black;
  transition: all 0.3s ease;
  margin-right: 10px;

  @media (min-width: 769px) {
    margin-right: 20px;
  }
`;

const SearchInputs = styled.div`
  display: flex;
  margin-left: 1rem;

  @media (min-width: 481px) {
    align-items: center;
    justify-content: space-between;
    width: 160px;
  }

  @media (min-width: 630px) {
    width: 270px;
  }

  @media (min-width: 769px) {
    width: 310px;
  }
`;

const Input = styled.input`
  display: none;

  @media (min-width: 481px) {
    display: flex;
    border-radius: 15px;
    font-size: 18px;
    padding: 15px;
    height: 15px;
    width: 100px;

    &:focus {
      outline: none;
    }
  }

  @media (min-width: 630px) {
    width: 200px;
  }

  @media (min-width: 769px) {
    width: 240px;
  }
`;

// eslint-disable-next-line prettier/prettier
export {
  HeaderContainer,
  Logo,
  Button,
  SearchInputs,
  Input,
  ProfileImg,
  LogoutContainer,
};
