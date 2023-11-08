import { GoogleIcon, AuthButton, GoogleIconBlack } from "./Auth.styled";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../redux/user/userOperations";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { tokenSelector } from "../../redux/user/userSelector";

export const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  return (
    <div>
      <AuthButton
        onClick={() => {
          dispatch(googleAuth());
        }}
      >
        {token ? <GoogleIcon /> : <GoogleIconBlack />}
      </AuthButton>
    </div>
  );
};
