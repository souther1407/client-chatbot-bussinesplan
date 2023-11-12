import React from "react";
import styles from "./login.module.css";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { CHATBOT } from "../../utils/constants/routes";
const Login = () => {
  const { loginGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginGoogle();
      navigate(CHATBOT);
    } catch (error) {}
  };
  return (
    <div className={styles.login}>
      <IconTextButton
        variant="bordered"
        onClick={handleLogin}
        iconProps={{ type: "google", size: "2rem" }}
      >
        Login with Google
      </IconTextButton>
    </div>
  );
};

export default Login;
