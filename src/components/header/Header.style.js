import { sizes } from "../../styles/sizes";
import styled from "styled-components";

export const HeaderContainer = styled.div `
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavBar = styled.nav `
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 8vh;
  align-items: center;
`

export const UlNav = styled.ul `
  color: white;
  display: flex;
  gap: ${sizes.large};
`

export const UlLiNav = styled.li `
  list-style: none;
  cursor: pointer;
  font-weight: 600;
  transition: 500ms linear;

  &:hover {
    color: black;
  }
`
