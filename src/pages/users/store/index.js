import { getAllUsers, getSingleUser } from "../../../api/auth.requests";

import { create } from "zustand";

const usersStore = create((set, get) => {
  return {
    users: [],
    loading: true,
    singleLoading: true,
    singleUser: null,
    cardDetails: null,
    length: 0,
    like: 0,
    swipes: 0,
    match: 0,
    fav: 0,
    chartData: [],
    filter: new Date().getFullYear(),
    setCardDetails: (cardDetails) => set({ cardDetails }),
    setSingleUser: (singleUser) => set({ singleUser }),
    setUsers: (users) => set({ users }),
    setLoading: (loading) => set({ loading }),
    setSingleLoading: (singleLoading) => set({ singleLoading }),
    setLike: (like) => set({ like }),
    setChartData: (chartData) => set({ chartData }),
    setSwipes: (swipes) => set({ swipes }),
    setMatch: (match) => set({ match }),
    setFav: (fav) => set({ fav }),
    setFilter: (filter) => set({ filter }),
    setLength: (length) => set({ length }),
    getUsers: async (currentPage) => {
      const { setUsers, setLoading, setLength } = get();
      const response = await getAllUsers(currentPage);
      setLoading(false);
      setUsers(response.data.users);
      setLength(response.data.totalItems);
      return { data: response.data };
    },
    getUser: async (id) => {
      const {
        setSingleUser,
        setSingleLoading,
        setCardDetails,
        setLike,
        setSwipes,
        setMatch,
        setFav,
      } = get();
      const response = await getSingleUser(id);
      setSingleLoading(false);
      setCardDetails(response.data.cardDetails);
      setSingleUser(response.data.user);

      // Update likes, swipes, and match
      setLike(response.data.likeCount || 0);
      setSwipes(
        response.data.likeCount +
          response.data.dislikeCount +
          response.data.favCount || 0
      ); // You need to fetch the swipe count from the API
      setMatch(response.data.matchCount || 0);
      setFav(response.data.favCount || 0);
    },
  };
});

export default usersStore;
