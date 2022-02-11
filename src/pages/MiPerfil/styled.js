import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export default Container;
