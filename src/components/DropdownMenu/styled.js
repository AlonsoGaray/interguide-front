import styled from 'styled-components';

const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 250px;
  transform: translateX(-75%);
  background-color: #33353d;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 0.2rem;
  overflow: hidden;

  .icon-button {
    display: flex;
    align-items: center;
  }

  .menu-item {
    color: #eceeef;
    text-decoration: none;
    height: 62px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: background 500ms;
    padding: 0.3rem;

    &:hover {
      background-color: #525357;
    }
  }
`;

const ProfileImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export { Dropdown, ProfileImg };