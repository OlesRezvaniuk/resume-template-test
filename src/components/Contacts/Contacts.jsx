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

export const Contacts = () => {
  return (
    <div>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList>
        {fakeData.map(({ id, value, kind }) => {
          if (kind === "tel" || kind === "email") {
            return (
              <ContactListItem key={id}>
                <ContactLinks
                  $kind={kind}
                  href={
                    (kind === "tel" && `tel:${value}`) ||
                    (kind === "email" && `mailto:${value}`)
                  }
                >
                  {value}
                </ContactLinks>
              </ContactListItem>
            );
          } else if (kind === "location" || kind === "country") {
            return (
              <ContactListItem key={id}>
                <span style={{ pointerEvents: "none" }}>
                  {value.location}, {value.country}
                </span>
              </ContactListItem>
            );
          }
        })}
      </ContactList>
    </div>
  );
};
