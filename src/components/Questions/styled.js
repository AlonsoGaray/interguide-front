import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 20px;
  margin: 20px 0;

  a {
    text-decoration: none;
  }

  @media (min-width: 769px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 200px;
    width: 80vw;
  }
`;

export default Container;
