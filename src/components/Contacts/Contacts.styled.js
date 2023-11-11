import styled from "styled-components";
import { ReactComponent as editIconPrimal } from "./icon/pencil.svg";

export const ContactsContainer = styled.div``;

export const ContactsTitle = styled.h2`
  color: #fff;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
  cursor: default;
`;

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const ContactListItem = styled.li`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.71;
  color: #fff;
  opacity: 1;
  transition: 250ms;
  cursor: default;
  position: relative;
`;

export const ContactLinks = styled.a`
  text-decoration: ${(props) => (props.$kind ? "revert" : "none")};
  color: inherit;
  transition: 250ms;
  &:hover,
  &:focus {
    color: ${(props) => (props.$link ? "#4b78b8" : "#fff")};
  }
`;

export const ContactEditBtn = styled.button`
  position: absolute;
  width: 27px;
  left: -27px;
  top: -3px;
  border: none;
  padding: none;
  margin: none;
  background: none;
  fill: #fff;
  transition: 250ms;
  cursor: pointer;
  &:focus,
  &:hover {
    fill: #4b78b8;
  }
`;

export const EditIcon = styled(editIconPrimal)`
  width: 15px;
  fill: inherit;
`;

export const ContactsInput = styled.input`
  color: #fff;
  background: none;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;
