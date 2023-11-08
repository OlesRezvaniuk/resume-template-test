import { AsideContainer, AsideInfoContainer } from "./Aside.styled";
import { Photo } from "../Photo/Photo";
import { Contacts } from "../Contacts/Contacts";

export const Aside = () => {
  return (
    <AsideContainer>
      <Photo />
      <AsideInfoContainer>
        <Contacts />
      </AsideInfoContainer>
    </AsideContainer>
  );
};
