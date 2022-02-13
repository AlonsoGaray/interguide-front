import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  min-height: 200px;

  a {
    text-decoration: none;
  }

  @media (min-width: 769px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 200px;
    width: 80vw;
  }
`;
export { Container, RightContainer };
