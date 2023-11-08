import styled from "styled-components";
import { ReactComponent as userIconPrimal } from "./icon/user.svg";

export const PhotoContainer = styled.div`
  max-width: 370px;
  height: 354px;
  display: flex;
  background: #808080a1;
  fill: #ffffff26;
  color: #ffffff26;
  position: relative;
  margin-bottom: 51px;
  &:focus,
  &:hover {
    fill: #ffffff75;
    color: #ffffff75;
  }
  transition: 250ms;
`;

export const UserIcon = styled(userIconPrimal)`
  fill: inherit;
  color: inherit;
  * {
    fill: inherit;
    color: inherit;
  }
`;

export const SelectPhotoInput = styled.input`
  width: 100%;
  position: absolute;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
