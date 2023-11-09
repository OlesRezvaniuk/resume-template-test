import { AsideContainer, AsideInfoContainer } from "./Aside.styled";
import { Photo } from "../Photo/Photo";
import { Contacts } from "../Contacts/Contacts";

export const Aside = ({ InputModal, setInputModal }) => {
  return (
    <AsideContainer>
      <Photo />
      <AsideInfoContainer>
        <Contacts InputModal={InputModal} setInputModal={setInputModal} />
      </AsideInfoContainer>
    </AsideContainer>
  );
};
