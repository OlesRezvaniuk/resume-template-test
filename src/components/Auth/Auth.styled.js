import styled from "styled-components";
import { ReactComponent as GoogleIconPrimal } from "./icon/google-icon.svg";
import { ReactComponent as GoogleIconBlackPrimal } from "./icon/google-icon-black.svg";

export const AuthButton = styled.button`
  width: 28px;
  height: 28px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 6px;
  left: 50px;
  opacity: 0.5;
  &:focus,
  &:hover {
    opacity: 1;
  }
  transition: 250ms;
`;

export const GoogleIcon = styled(GoogleIconPrimal)`
  width: 28px;
  height: 28px;
`;
export const GoogleIconBlack = styled(GoogleIconBlackPrimal)`
  width: 28px;
  height: 28px;
`;
