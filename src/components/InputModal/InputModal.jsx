import { InputStyled, ModalBackdrop } from "./InputModal.styled";
import { fakeData2 } from "../Contacts/Contacts";

export const InputModal = ({ inputModal, setInputModal }) => {
  return (
    <ModalBackdrop
      id="backdrop"
      onClick={(e) => {
        console.log(e.target.id);
        if (e.target.id === "backdrop") {
          fakeData2.location[0] = inputModal.value;
          setInputModal({ ...inputModal, state: false });
        }
      }}
    >
      <InputStyled
        type="text"
        value={inputModal.value}
        onChange={(e) => {
          setInputModal({ ...inputModal, value: e.target.value });
        }}
      />
    </ModalBackdrop>
  );
};
