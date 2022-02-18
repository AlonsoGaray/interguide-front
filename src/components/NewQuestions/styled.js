import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  outline: 1px solid #737373;

  .title {
    margin-left: 10px;
    font-size: 27px;
    color: #33353d;
  }

  @media (min-width: 768px) {
    outline: 0;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #737373;

  button {
    margin-right: 10px;
    width: 120px;
    font-size: 16px;
    color: white;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: rgb(10, 149, 255);

    &:hover {
      background-color: #0074cc;
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    margin-top: 15px;
  }
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const SingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px 0;
  outline: 1px solid #737373;
  border-radius: 15px;
  background-color: #44a1a0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const RightSingleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  p {
    margin: 8px;
    font-size: 15px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    width: 20%;
  }
`;

const LeftSingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    font-size: 24px;
    margin: 0 10px;
    padding: 0 10px;

    &:link {
      color: black;
    }

    &:visited {
      color: white;
    }

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }

  .tags {
    display: flex;
    margin: 5px 30px;
  }

  .tag {
    font-size: 12px;
    margin: 5px 10px;
    padding: 8px;
    border-radius: 20px;
    background-color: rgb(10, 149, 255);
  }

  @media (min-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  margin: 0 10px;

  p {
    font-size: 12px;
  }
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: 5px;
  }
`;
// eslint-disable-next-line prettier/prettier
export {
  Container,
  TopContainer,
  QuestionsContainer,
  SingleContainer,
  RightSingleContainer,
  LeftSingleContainer,
  UserInfoContainer,
};
