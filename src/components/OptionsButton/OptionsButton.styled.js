import styled from "styled-components";
import { ReactComponent as optionsIconPrimal } from "./icon/cog.svg";

export const OptionsEditBtn = styled.button`
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
  left: 90px;
  opacity: 0.5;
  &:focus,
  &:hover {
    opacity: 1;
  }
  transition: 250ms;
`;

export const OptionsEditIcon = styled(optionsIconPrimal)`
  width: 28px;
  height: 28px;
  fill: inherit;
`;
