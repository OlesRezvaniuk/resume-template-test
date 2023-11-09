import { ResumeTemplateContainer, Box } from "./ResumeTemplate.styled";
import { Aside } from "../Aside/Aside";
import { Main } from "../Main/Main";
import { Auth } from "../Auth/Auth";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/userSelector";
import { useState } from "react";
import { InputModal } from "../InputModal/InputModal";

export const ResumeTemplate = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const [inputModal, setInputModal] = useState({ state: false, value: null });
  const { user } = useSelector(userSelector);
  return (
    <ResumeTemplateContainer
      onMouseOver={() => {
        setAuthVisible(true);
      }}
      onMouseLeave={() => {
        setAuthVisible(false);
      }}
    >
      {authVisible && <Auth />}
      <Box>
        <Aside inputModal={inputModal} setInputModal={setInputModal}></Aside>
        <Main></Main>
        {inputModal.state && (
          <InputModal inputModal={inputModal} setInputModal={setInputModal} />
        )}
      </Box>
    </ResumeTemplateContainer>
  );
};
