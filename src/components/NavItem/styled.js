import styled from 'styled-components';

const List = styled.li`
  list-style: none;
  margin-right: 10px;
`;

const TagA = styled.a`
  background-color: #33353d;
  color: #eceeef;
  width: 44px;
  height: 44px;
  margin: 2px;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;

  &:hover {
    filter: brightness(1.6);
  }
`;

export { List, TagA };
