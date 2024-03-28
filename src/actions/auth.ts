import axios from "axios";
import { loginUser } from "../store/auth-slice";
import { useDispatch } from "react-redux";

type LoginData = {
  username: string;
  password: string;
};
export const login = async (data: LoginData) => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
    },
  };
  const postData = {
    grant_type: "",
    username: data.username,
    password: data.password,
    scope: "",
    client_id: "",
    client_secret: "",
  };
  try {
    const res = await axios.post(
      "http://localhost:8000/api/auth/token",
      new URLSearchParams(postData).toString(),
      config
    );
    localStorage.setItem('token', res.data.access_token);
    console.log(res.data, "DATA");
    return res.data.access_token;
  } catch (err) {
    console.log(err);
  }
};
