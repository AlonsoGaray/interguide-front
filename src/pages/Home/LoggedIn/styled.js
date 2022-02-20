import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 700px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 200px;
  border-left: 1px solid #737373;

  a {
    text-decoration: none;
  }

  @media (min-width: 769px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`;
export { Container, RightContainer };
