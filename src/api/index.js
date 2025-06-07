import axios from "axios";

const prod = true;

const API_URL = prod
  ? "https://lm-admin-be.vercel.app/api/admin"
  : "http://localhost:8002/api/admin";

const LBAdminNoAuth = axios.create({
  baseURL: API_URL,
});

const LBAdminAuth = axios.create({
  baseURL: API_URL,
  //   headers: authHeader(),
});

export { LBAdminAuth, LBAdminNoAuth };
