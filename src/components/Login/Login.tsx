import {
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../redux/actions";
import { StandartButton } from "../StandartButton/StandartButton";
import LoginIcon from "@mui/icons-material/Login";

export const Login: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    setLoading(true);
    dispatch(loginRequest({ usuario, password }));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      bgcolor={"#FFFFFF"}
      padding={2}
      borderRadius={"30px"}
      boxShadow={2}
      height={"auto"}
      width={{ xs: 300, sm: 400, md: 500 }}
    >
      <Stack justifyContent={"center"} spacing={5} width={1}>
        <Box
          display={"flex"}
          gap={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <LoginIcon color="primary" />
          <Typography
            fontSize={30}
            fontWeight={400}
            textAlign={"center"}
            color={"primary"}
          >
            Login
          </Typography>
        </Box>
        <TextField
          fullWidth
          label="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StandartButton color="primary" onClick={handleLogin}>
          Entrar
        </StandartButton>
        <Box display="flex" justifyContent="center">
          {loading && <CircularProgress />}
        </Box>
      </Stack>
    </Box>
  );
};
