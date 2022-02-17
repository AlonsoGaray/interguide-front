import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  outline: 1px solid #737373;

  .title {
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    outline: 0;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #737373;

  button {
    margin-right: 10px;
  }
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const SingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  border-bottom: 1px solid #737373;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const RightSingleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  p {
    margin: 8px;
    font-size: 13px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    width: 20%;
  }
`;

const LeftSingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 10px;

  a {
    font-size: 20px;
    margin: 0 10px;

    &:link {
      color: blue;
    }

    &:visited {
      color: blue;
    }

    &:hover {
      color: lightblue;
    }
  }

  .tags {
    display: flex;
  }

  .tag {
    font-size: 12px;
    margin: 5px 10px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const MidSingleContainer = styled.div`
  display: flex;
  align-items: center;
`;
// eslint-disable-next-line prettier/prettier
export {
  Container,
  TopContainer,
  QuestionsContainer,
  SingleContainer,
  RightSingleContainer,
  LeftSingleContainer,
  MidSingleContainer,
};
