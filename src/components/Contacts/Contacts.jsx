import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { userSelector } from "../../redux/user/userSelector";
import { useParams } from "react-router-dom";
import {
  ContactsTitle,
  ContactList,
  ContactListItem,
  ContactLinks,
  ContactEditBtn,
  EditIcon,
} from "./Contacts.styled";
import {
  changeVisibleContactsModal,
  changedData,
} from "../../redux/user/userSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Contacts = ({ optionsBtnVisible }) => {
  const { userContacts } = useSelector(userSelector);
  const dispatch = useDispatch();

  function arr() {
    let userInfoArray = Object.keys(userContacts).map((key) => ({
      [key]: userContacts[key],
    }));
    return userInfoArray;
  }

  return (
    <div>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList>
        {arr().map((item) => {
          if (item.tel) {
            return (
              <ContactListItem>
                {optionsBtnVisible.state && (
                  <ContactEditBtn>
                    <EditIcon />
                  </ContactEditBtn>
                )}
                <ContactLinks $link={true} href={`tel:${item.tel}`}>
                  {item.tel}
                </ContactLinks>
              </ContactListItem>
            );
          } else if (item.email) {
            return (
              <ContactListItem>
                {optionsBtnVisible.state && (
                  <ContactEditBtn>
                    <EditIcon />
                  </ContactEditBtn>
                )}
                <ContactLinks
                  $link={true}
                  $kind={true}
                  href={`mailto:${item.email}`}
                >
                  {item.email}
                </ContactLinks>
              </ContactListItem>
            );
          } else {
            return (
              <ContactListItem key={nanoid()}>
                <span>
                  {item.city}
                  {item.country}
                </span>
              </ContactListItem>
            );
          }
        })}
      </ContactList>
    </div>
  );
};
