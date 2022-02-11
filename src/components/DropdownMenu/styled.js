import styled from 'styled-components';

const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 200px;
  transform: translateX(-75%);
  background-color: #33353d;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 0.2rem;
  overflow: hidden;

  .menu-item {
    color: #eceeef;
    text-decoration: none;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: background 500ms;
    padding: 0.3rem;

    &:hover {
      background-color: #525357;
    }
  }

  .icon-right {
    margin-right: auto;
  }
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export { Dropdown, ProfileImg };
