import { useState, ChangeEvent, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CardHeader,
  Avatar,
  Stack,
  Box,
} from "@mui/material";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

interface AuthFormProps {
  closeModal?: () => void;
}

const AuthForm = ({ closeModal }: AuthFormProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { accessToken, onLogin, user } = useAuthStore((state) => ({
    onLogin: state.onLogin,
    accessToken: state.accessToken,
    user: state.user,
  }));

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (accessToken) {
      user.role.name === "ADMIN" ? navigate("/admin") : navigate("/profile");
    }
  }, [accessToken]);

  const handleLogin = async () => {
    await onLogin(email, password).then(() => {
      if (closeModal) closeModal();
    });
  };

  return (
    <Card sx={{ width: 320, boxShadow: 0, padding: 2 }}>
      <CardContent>
        <Stack alignItems={"center"} spacing={4}>
          <Typography variant="h5">Авторизация</Typography>
          <TextField
            variant="standard"
            label="Email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
          />
          <TextField
            variant="standard"
            label="Пароль"
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
          />
          <Button fullWidth variant="contained" onClick={handleLogin}>
            Войти
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
