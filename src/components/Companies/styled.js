import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #737373;

  .title {
    font-size: 27px;
    color: #33353d;
  }

  @media (min-width: 768px) {
    outline: 0;

    .title {
      margin-left: 20px;
      font-size: 27px;
      color: #33353d;
    }
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 10px;
  height: 160px;
  border-bottom: 1px solid #737373;

  .companySelect {
    width: 300px;
    margin-top: 10px;

    span[class$='indicatorSeparator'] {
      background: black;
      margin: 0;
    }

    div[class$='control'] {
      border-color: black;
    }
  }

  button {
    width: 100px;
    height: 50px;
    font-size: 14px;
    margin-top: 10px;
    color: white;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: rgb(10, 149, 255);

    &:hover {
      background-color: #0074cc;
      cursor: pointer;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    height: 90px;

    button {
      margin-right: 10px;
      margin-top: 0;
      width: 150px;
      height: 60px;
      font-size: 16px;
    }

    .companySelect {
      width: 40%;
      margin-top: 0;
    }
  }
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 5px;
`;

const SingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px 0;
  outline: 1px solid #737373;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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
    margin: 8px 0 0 10px;
    padding: 0 10px;

    &:link {
      color: black;
    }

    &:visited {
      color: black;
    }

    &:hover {
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
    background-color: #00d3eb;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .active {
    color: rgb(10, 149, 255);
  }

  svg {
    width: 40px;
    height: 40px;
    pointer-events: none;
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

const UnselectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  svg {
    width: 60px;
    height: 60px;
  }

  p {
    font-size: 26px;
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
  VoteContainer,
  UnselectedContainer,
};
