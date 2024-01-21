import styled from "styled-components";
import { sizes } from "../../styles/sizes";

export const ElementHeader = styled.header`
  padding-top: ${sizes.small};
  padding-bottom: ${sizes.small};
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
