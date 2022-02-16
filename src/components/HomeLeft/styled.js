import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  min-height: 20px;
  margin: 20px 0;

  a {
    text-decoration: none;
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
