import React from "react";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Container,
} from "@mui/material";
import axios from "axios";
import { setCookie } from "../util/cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../util/atom";
import { useRecoilState } from "recoil";
const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    id: "",
    pw: "",
  });
  const [token, setToken] = useRecoilState(Token);

  const onSuccess = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setToken(token);
    setCookie("loginToken", token, {
      path: "/",
      domain: ".richfactory.click",
      secure: true,
      sameSite: "strict",
    });
    alert("로그인에 성공했습니다");
    navigate("/home");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", login.id);
    formData.append("pw", login.pw);

    try {
      const response = await axios({
        method: "post",
        url: "https://www.richfactory.click/login",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const { result, token } = response.data;

      if (result === "success" && token) {
        onSuccess(token);
      }

      if (result !== "success" || !token) {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          관리자 모드 로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="ID"
            label="ID"
            name="id"
            autoComplete="email"
            autoFocus
            value={login.id}
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="pw"
            label="Password"
            type="password"
            id="pw"
            autoComplete="current-password"
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // onClick={() => navigate("/home")}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
