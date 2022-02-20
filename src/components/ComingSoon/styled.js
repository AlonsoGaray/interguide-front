import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 155, 188, 1) 0%,
    rgba(2, 58, 78, 1) 100%
  );
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75%;
  width: 82%;
  background: white;
  border-radius: 35px;

  button {
    margin-top: 30px;
    width: 120px;
    height: 50px;
    color: white;
    font-size: 24px;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: rgb(10, 149, 255);

    &:hover {
      background-color: #0074cc;
      cursor: pointer;
    }
  }

  h2 {
    margin-top: 30px;
    font-size: 40px;
    color: #011c25;
  }

  h3 {
    margin-top: 30px;
    font-size: 40px;
    color: #414042;
  }
`;

const Logo = styled.h1`
  font-family: lato;
  font-size: 45px;
  color: rgb(10, 149, 255);

  &:hover {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 300px;
  margin-top: 50px;
`;

const UlIcons = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
  }

  svg {
    font-size: 50px;
  }

  .facebook path {
    color: #1877f2;
  }

  .twitter path {
    color: #00aced;
  }

  .instagram path {
    color: #ea4c89;
  }

  .telegram path {
    color: #2aabee;
  }
`;

// eslint-disable-next-line prettier/prettier
export {
 Container, SubContainer, Logo, IconContainer, UlIcons
};
