import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1025px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 69%;
    box-shadow: 2px 2px 50px 2px rgba(0, 0, 0, 0.2);
  }
`;

export default Container;
