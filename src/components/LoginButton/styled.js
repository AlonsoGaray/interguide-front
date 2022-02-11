import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.5rem;
  text-decoration: none;
  background-color: #33353d;
  color: white;
  padding: 5px;
  border-radius: 15px;
  margin-right: 10px;
  width: 110px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 769px) {
    margin-right: 20px;
  }

  &:hover {
      filter: brightness(1.4);
    }
  }
`;

export default Button;
