/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const SuperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;

  p {
    color: #33353d;
    margin: 15px;
  }
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  margin: 5px;

  a {
    text-decoration: none;
    color: #33353d;

    &:hover {
      color: blue;
    }
  }
`;

export {
  SuperContainer, DataContainer, ProfileImg, TabContainer
};
