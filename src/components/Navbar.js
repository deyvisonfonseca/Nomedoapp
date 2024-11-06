import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff; /* Cor de fundo azul */
  padding: 1rem;
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Meu Logo</Logo>
      <NavLinks>
        <StyledLink href="#">Home</StyledLink>
        <StyledLink href="#">About</StyledLink>
        <StyledLink href="#">Contact</StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;