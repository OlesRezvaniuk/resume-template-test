import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { userSelector } from "../../redux/user/userSelector";
import {
  ContactsTitle,
  ContactList,
  ContactListItem,
  ContactLinks,
} from "./Contacts.styled";
import { nanoid } from "nanoid";

const fakeData = [
  { id: nanoid(), kind: "tel", value: "+38 068 119 36 63" },
  { id: nanoid(), kind: "email", value: "orezvaniuk@gmail.com" },
  {
    id: nanoid(),
    kind: "location",
    value: { location: "Kyiv", country: "Ukraine" },
  },
];

export let fakeData2 = {
  tel: "+38 068 119 36 63",
  email: "orezvaniuk@gmail.com",
  location: ["Kyiv", "Ukraine"],
};

export const Contacts = ({ inputModal, setInputModal }) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const [data, setData] = useState(fakeData2);

  useEffect(() => {
    setData(fakeData2);
  }, inputModal);

  console.log(user);

  return (
    <div>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList>
        <ContactListItem $link={true}>
          <ContactLinks href={`tel:${data.tel}`}>{data.tel}</ContactLinks>
        </ContactListItem>
        <ContactListItem $link={true}>
          <ContactLinks $kind={true} href={`mailto:${data.email}`}>
            {data.email}
          </ContactLinks>
        </ContactListItem>
        <ContactListItem>
          <span
            style={{ cursor: "default" }}
            onClick={(e) => {
              setInputModal({ state: true, value: data.location[0] });
            }}
          >
            {data.location[0]}
          </span>
          {`, `}
          <span
            style={{ cursor: "default" }}
            onClick={(e) => {
              setInputModal({ state: true, value: data.location[1] });
            }}
          >
            {data.location[1]}
          </span>
        </ContactListItem>
      </ContactList>
    </div>
  );
};
