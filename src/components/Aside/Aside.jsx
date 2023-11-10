import { AsideContainer, AsideInfoContainer } from "./Aside.styled";
import { Photo } from "../Photo/Photo";
import { Contacts } from "../Contacts/Contacts";

export const Aside = ({ optionsBtnVisible }) => {
  return (
    <AsideContainer>
      <Photo />
      <AsideInfoContainer>
        <Contacts optionsBtnVisible={optionsBtnVisible} />
      </AsideInfoContainer>
    </AsideContainer>
  );
};
