import React from 'react';
import styled from 'styled-components/macro';
import Profile from '../images/profile.png';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 14px;
  background: #5d7c80;
`;

const NavLinks = styled(Link)`
  padding: 0 8px;
  text-decoration: none;
  color: #000;
  svg {
    height: 24px;
    width: 24px;
  }
`;

const LeftLinks = styled.div`
  padding: 10px;
  margin-left: 10px;
`;

const RightLinks = styled.div`
  padding: 10px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Nav>
      <LeftLinks>
        <NavLinks to='/about'>Konexx PTY LTD</NavLinks>
        <NavLinks to='/store'>James McKillop</NavLinks>
      </LeftLinks>
      <RightLinks>
        <NavLinks to='/gmail'>james.mckillop@konexx.com.au</NavLinks>
        <NavLinks to='/images' css={`
            padding-right: 20px;
          `}>(03) 9118 2708</NavLinks>
        <Link to='/'>
          <img src={Profile} alt='profile' />
        </Link>
      </RightLinks>
    </Nav>
  );
};

export default Navbar;