import { ResumeTemplateContainer, Box } from "./ResumeTemplate.styled";
import { Aside } from "../Aside/Aside";
import { Main } from "../Main/Main";
import { Auth } from "../Auth/Auth";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/userSelector";
import { useState } from "react";

export const ResumeTemplate = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const { user } = useSelector(userSelector);

  console.log(authVisible);

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
        <Aside></Aside>
        <Main></Main>
      </Box>
    </ResumeTemplateContainer>
  );
};
