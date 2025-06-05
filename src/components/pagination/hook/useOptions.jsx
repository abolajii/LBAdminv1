import { getAllUsers, getReports } from "../../../api/auth.requests";

import { create } from "zustand";

const usePaginationOptions = create((set, get) => ({
  totalItems: 0,
  totalPages: 0,
  currentReportPage: 1,
  currentUserPage: 1,
  hasNext: false,
  hasPrev: false,
  itemsInPage: 0,
  setPaginationOptions: (options) => set(options),
  onPageClick: async (page, tag) => {
    const { data } =
      tag === "reports" ? await getReports(page) : await getAllUsers(page);
    const { setPaginationOptions } = get();

    setPaginationOptions({
      itemsInPage: data.itemsInPage,
      totalItems: data.totalItems, // Total number of items
      totalPages: data.totalPages, // Total number of pages
      hasNext: data.hasNext, // Boolean for whether there is a next page
      hasPrev: data.hasPrev, // Boolean for whether there is a previous page
      currentReportPage: data.currentPage, // Current page
      currentUserPage: data.currentPage, // Current page
    });
    return { data: data.users || data.formattedReports };
  },
}));

export default usePaginationOptions;
