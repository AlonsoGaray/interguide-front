/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { List, TagA } from './styled';

const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <List>
      <TagA href="#" onClick={() => setOpen(!open)}>
        {icon}
      </TagA>

      {open && children}
    </List>
  );
};

export default NavItem;
