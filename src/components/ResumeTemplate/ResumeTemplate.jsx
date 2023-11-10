import { ResumeTemplateContainer, Box } from "./ResumeTemplate.styled";
import { Aside } from "../Aside/Aside";
import { Main } from "../Main/Main";
import { Auth } from "../Auth/Auth";
import { InputModal } from "../InputModal/InputModal";
import { useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { userSelector } from "../../redux/user/userSelector";
import { OptionButton } from "../OptionsButton/OptionsButton";

export const ResumeTemplate = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const [optionsBtnVisible, setOptionsBtnVisible] = useState({
    visible: false,
    state: false,
  });
  const { modalData } = useSelector(userSelector);
  const { userData } = useSelector(userSelector);

  return (
    <ResumeTemplateContainer
      onMouseOver={() => {
        setAuthVisible(true);
        setOptionsBtnVisible({ ...optionsBtnVisible, visible: true });
      }}
      onMouseLeave={() => {
        setAuthVisible(false);
        setOptionsBtnVisible({ ...optionsBtnVisible, visible: false });
      }}
    >
      {authVisible && <Auth />}
      {optionsBtnVisible.visible && (
        <OptionButton
          setOptionsBtnVisible={setOptionsBtnVisible}
          optionsBtnVisible={optionsBtnVisible}
        />
      )}
      <Box>
        <Aside optionsBtnVisible={optionsBtnVisible}></Aside>
        <Main></Main>
        {modalData.visible && <InputModal />}
      </Box>
    </ResumeTemplateContainer>
  );
};
