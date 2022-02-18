import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 20px;
  margin: 20px 0;

  a {
    font-size: 20px;
    text-decoration: none;

    &:link {
      color: rgb(10, 149, 255);
    }

    &:visited {
      color: rgb(10, 149, 255);
    }

    &:hover {
      color: rgb(0, 116, 204);
    }
  }

  @media (min-width: 769px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 200px;
    max-height: 200px;
    width: 20vw;
  }
`;

export default Container;
