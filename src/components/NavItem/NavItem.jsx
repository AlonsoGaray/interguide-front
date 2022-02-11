/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { List, TagA } from './styled';

const NavItem = ({ icon, children, handleClick }) => {
  return (
    <List>
      <TagA href="#" onClick={handleClick}>
        {icon}
      </TagA>

      {children}
    </List>
  );
};

export default NavItem;
