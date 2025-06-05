import { LBAdminAuth } from ".";

const getDashboardDetails = () => {
  return LBAdminAuth.get("/dashboard");
};

const getAllUsers = (page = 1, limit = 10) => {
  return LBAdminAuth.get(`/users?page=${page}&limit=${limit}`);
};

const getSingleUser = (id) => {
  return LBAdminAuth.get(`/user/${id}`);
};

const createUser = (user) => {
  return LBAdminAuth.post("/create-user", { user });
};

const updateUser = (id, data) => {
  return LBAdminAuth.put(`/update/${id}`, { data });
};

const upload = async (details) => {
  return await LBAdminAuth.post("/upload", details);
};

const deleteUser = (id) => {
  return LBAdminAuth.delete(`/delete/${id}`);
};

const updateInterests = (id, data) => {
  return LBAdminAuth.put(`/update/interest/${id}`, { my_interests: data });
};

const userActivities = async (year, id) => {
  return LBAdminAuth.get(`/user-activity/${year}/${id}`);
};

const getReports = async (page = 1, limit = 10) => {
  return await LBAdminAuth.get(`/reports?page=${page}&limit=${limit}`);
};

const getSingleReport = async (id) => {
  return await LBAdminAuth.get(`/report/${id}`);
};

const updateSingleReport = async (id, data) => {
  return await LBAdminAuth.put(`/report/${id}`, { data });
};

const getMessages = async (participants) => {
  return await LBAdminAuth.post(`/convo/user`, {
    participants,
  });
};

const updateUserPreference = async (id) => {
  return await LBAdminAuth.put(`/update/preference/${id}`);
};

export {
  getAllUsers,
  getDashboardDetails,
  getSingleUser,
  createUser,
  updateUser,
  upload,
  deleteUser,
  updateInterests,
  userActivities,
  getReports,
  getSingleReport,
  updateSingleReport,
  getMessages,
  updateUserPreference,
};
