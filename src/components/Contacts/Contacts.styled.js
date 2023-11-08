import styled from "styled-components";

export const ContactsContainer = styled.div``;

export const ContactsTitle = styled.h2`
  color: #fff;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
  pointer-events: none;
`;

export const ContactList = styled.ul`
  list-style: none;
`;

export const ContactListItem = styled.li`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.71;
  color: #fff;
  opacity: 1;
`;

export const ContactLinks = styled.a`
  text-decoration: ${(props) => (props.$kind === "email" ? "revert" : "none")};
  color: inherit;
`;
