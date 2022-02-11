import styled from 'styled-components';

const SearchInputs = styled.div`
  display: flex;
  margin-left: 1rem;

  @media (min-width: 481px) {
    align-items: center;
    justify-content: space-between;
    width: 160px;
  }

  @media (min-width: 630px) {
    width: 270px;
  }

  @media (min-width: 769px) {
    width: 310px;
  }
`;

const Input = styled.input`
  display: none;

  @media (min-width: 481px) {
    display: flex;
    border-radius: 15px;
    font-size: 18px;
    padding: 15px;
    height: 15px;
    width: 100px;

    &:focus {
      outline: none;
    }
  }

  @media (min-width: 630px) {
    width: 200px;
  }

  @media (min-width: 769px) {
    width: 240px;
  }
`;

export { SearchInputs, Input };
