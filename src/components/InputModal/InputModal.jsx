import { InputStyled, ModalBackdrop } from "./InputModal.styled";
import { changeVisibleContactsModal } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

export const InputModal = () => {
  const dispatch = useDispatch();
  return (
    <ModalBackdrop
      id="backdrop"
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          dispatch(changeVisibleContactsModal(false));
        }
      }}
    >
      <InputStyled type="text" />
    </ModalBackdrop>
  );
};
