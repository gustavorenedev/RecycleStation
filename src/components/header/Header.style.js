import { sizes } from "../../styles/sizes";
import styled from "styled-components";

export const ElementHeader = styled.header `
  padding-top: ${sizes.small};
  padding-bottom: ${sizes.small};
`

export const HeaderContainer = styled.div `
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`