import styled from 'styled-components';

const SuperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1025px) {
    width: 29%;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;

  p {
    color: #33353d;
    margin: 15px;
  }
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  margin: 5px;

  a {
    text-decoration: none;
    color: #33353d;

    &:hover {
      color: blue;
    }
  }
`;

const ProfileButton = styled.button`
  width: 7rem;
  height: 7rem;
  background-color: #fff;
  border-radius: 100%;
  cursor: pointer;
  border-style: solid;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 100%;
  }

  @media screen and (min-width: 1025px) {
    width: 10vw;
    height: 10vw;
    max-width: 10rem;
    max-height: 10rem;
  }
`;

const PhotoContainer = styled.div`
  display: ${(props) => props.display || 'none'}; /* Hidden by default */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  form {
    margin: 25vh auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 40rem;
    border-radius: 10px;
  }

  h4 {
    margin-top: 1rem;
  }

  @media screen and (min-width: 769px) {
    form {
      margin: 30vh auto;
    }
  }
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  width: 60rem;
  padding: 2rem;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 2px 2px 50px 2px rgba(0, 0, 0, 0.2);
  position: relative;

  h4 {
    margin: 40px 5px 0 5px;
    font-size: 1rem;
  }
`;

const CloseButton = styled.button`
  font-size: 2rem;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 2rem;
  cursor: pointer;
`;

const InputGroup = styled.div`
  margin: 15px 0 0 0;
  position: relative;

  p {
    margin-bottom: 0.5rem;
    color: #929292;
    font-size: 1rem;
  }

  input {
    border: 0;
    border-bottom: 1px solid gray;
    padding: 0 10px 5px 0;
    width: 100%;

    @media screen and (min-width: 769px) {
      font-size: 1.3rem;
    }
  }

  svg {
    color: black;
    background-color: transparent;
    margin-left: -20px;
    position: absolute;
    animation: grow-animation 2s linear infinite;

    @media screen and (min-width: 1025px) {
      margin-left: -20px;
    }
  }
`;

const UpdateButton = styled.button`
  margin: auto;
  margin-top: 30px;
  width: 120px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  border-radius: 10px;
  border-style: solid;

  &:hover {
    font-size: 2rem;
    cursor: pointer;
  }

  @media screen and (min-width: 1025px) {
    font-size: 1.6em;
    width: 210px;
    height: 80px;
  }
`;

export {
  SuperContainer,
  DataContainer,
  ProfileImg,
  TabContainer,
  ProfileButton,
  PhotoContainer,
  Form,
  CloseButton,
  InputGroup,
  UpdateButton,
};
