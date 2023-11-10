import { OptionsEditBtn, OptionsEditIcon } from "./OptionsButton.styled";

export const OptionButton = ({ setOptionsBtnVisible, optionsBtnVisible }) => {
  return (
    <OptionsEditBtn
      onClick={() => {
        setOptionsBtnVisible({
          ...optionsBtnVisible,
          state: !optionsBtnVisible.state,
        });
      }}
    >
      <OptionsEditIcon />
    </OptionsEditBtn>
  );
};
