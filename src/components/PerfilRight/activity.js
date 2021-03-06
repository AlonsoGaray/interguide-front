import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  width: 100%;


  .buttons {
    display: flex;
    width 260px;
    justify-content: space-around;

    button {
    width: 120px;
    height: 60px;
    margin: 15px 0;
    font-size: 18px;
    color: white;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: #0074cc;

      &:hover {
        background-color: rgb(10, 149, 255);
        cursor: pointer;
      }
    }
  }

  @media (min-width: 1025px) {
    align-items: center;
    justify-content: center;
    width: 69%;
    box-shadow: 2px 2px 50px 2px rgba(0, 0, 0, 0.2);
  padding-top: 0;
  }
`;

export default Container;
