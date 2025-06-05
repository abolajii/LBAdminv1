import { create } from "zustand";
import { getDashboardDetails } from "../api/auth.requests";

const userStore = create((set, get) => {
  return {
    user: {
      name: "Abolaji",
    },
    setUser: (user) => {
      set({ user });
    },
    usersData: {},
    loading: true,
    setLoading: (loading) => set({ loading }),
    setUsersData: (usersData) => set({ usersData }),
    getDetails: async () => {
      const { setUsersData, setLoading } = get();
      try {
        const response = await getDashboardDetails();
        setUsersData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error getting users", error);
      }
    },
  };
});

export default userStore;
