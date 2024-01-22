import styled from "styled-components";
import { sizes } from "../../styles/sizes";

export const ButtonNav = styled.button `
  color: white;
  padding: ${sizes.xxxsmall} ${sizes.large} ${sizes.xxxsmall} ${sizes.large};
  border-radius: ${sizes.main};
  border-color: white;
  border-style: solid;
  cursor: pointer;
  margin: 0 ${sizes.main} 0 0;
  font-weight: 600;
  transition: 500ms linear;

  &:hover {
    background-color: white;
    color: #006400;
  }
`