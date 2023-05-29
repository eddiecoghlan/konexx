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

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
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
  margin-left: 16px;
  display: flex;
  align-items: center;
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
        <NavLinks>Konexx PTY LTD</NavLinks>
        <NavLinks>James McKillop</NavLinks>
      </LeftLinks>
      <RightLinks>
        <NavLinks>admin@konexx.com.au</NavLinks>
        <NavLinks to='/images' css={`
            padding-right: 20px;
          `}></NavLinks>
        <Link to='/'>
          <img src={Profile} alt='profile' />
        </Link>
      </RightLinks>
    </Nav>
  );
};

export default Navbar;