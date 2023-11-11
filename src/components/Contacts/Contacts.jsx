import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userSelector } from "../../redux/user/userSelector";
import { useParams } from "react-router-dom";
import { selectModalData } from "../../redux/user/userSlice";

import {
  ContactsTitle,
  ContactList,
  ContactListItem,
  ContactLinks,
  ContactEditBtn,
  EditIcon,
  ContactsInput,
} from "./Contacts.styled";
import {
  changeVisibleContactsModal,
  changedData,
  changeContacts,
} from "../../redux/user/userSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Contacts = ({ optionsBtnVisible }) => {
  const { userContacts } = useSelector(userSelector);
  const { modalData } = useSelector(userSelector);
  const [contactsData, setContactsData] = useState(userContacts);
  const dispatch = useDispatch();

  function arr() {
    let userInfoArray = Object.keys(userContacts).map((key) => ({
      [key]: userContacts[key],
    }));
    return userInfoArray;
  }

  useEffect(() => {
    optionsBtnVisible.state === false && dispatch(changeContacts(contactsData));
  }, [optionsBtnVisible.state]);

  return (
    <div>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList>
        {arr().map((item) => {
          if (item.tel) {
            return (
              <ContactListItem>
                {optionsBtnVisible.state ? (
                  <ContactsInput
                    type="text"
                    value={contactsData.tel}
                    onChange={(e) => {
                      setContactsData({ ...contactsData, tel: e.target.value });
                    }}
                  />
                ) : (
                  <ContactLinks $link={true} href={`tel:${item.tel}`}>
                    {item.tel}
                  </ContactLinks>
                )}
              </ContactListItem>
            );
          } else if (item.email) {
            return (
              <ContactListItem>
                {optionsBtnVisible.state ? (
                  <ContactsInput
                    type="text"
                    value={contactsData.email}
                    onChange={(e) => {
                      setContactsData({
                        ...contactsData,
                        email: e.target.value,
                      });
                    }}
                  />
                ) : (
                  <ContactLinks
                    $link={true}
                    $kind={true}
                    href={`mailto:${item.email}`}
                  >
                    {item.email}
                  </ContactLinks>
                )}
              </ContactListItem>
            );
          } else {
            return (
              <ContactListItem>
                {optionsBtnVisible.state ? (
                  <ContactsInput
                    type="text"
                    value={item.city ? contactsData.city : contactsData.country}
                    onChange={(e) => {
                      item.city
                        ? setContactsData({
                            ...contactsData,
                            city: e.target.value,
                          })
                        : setContactsData({
                            ...contactsData,
                            country: e.target.value,
                          });
                    }}
                  />
                ) : (
                  <span>
                    {item.city}
                    {item.country}
                  </span>
                )}
              </ContactListItem>
            );
          }
        })}
      </ContactList>
    </div>
  );
};
