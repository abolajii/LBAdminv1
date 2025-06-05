import {
  getMessages,
  getReports,
  getSingleReport,
} from "../../../api/auth.requests";

import { create } from "zustand";

const useReportOptions = create((set, get) => {
  return {
    loading: true,
    singleLoading: true,
    messageLoading: true,
    messages: [],
    reports: [],
    singleReport: {},
    count: 0,
    reportTag: "",
    setSingleReport: (singleReport) => set({ singleReport }),
    setSingleLoading: (singleLoading) => set({ singleLoading }),
    setCount: (count) => set({ count }),
    setLoading: (loading) => set({ loading }),
    setMessageLoading: (messageLoading) => set({ messageLoading }),
    setReportTag: (reportTag) => set({ reportTag }),
    setReports: (reports) => set({ reports }),
    setMessages: (messages) => set({ messages }),
    getAllReports: async (currentPage) => {
      const { setReports, setCount, setLoading } = get();
      const { data } = await getReports(currentPage);
      setLoading(true);
      setCount(data.count);
      setReports(data.formattedReports);
      setLoading(false);
      return { data };
    },
    getReport: async (id) => {
      const { setSingleReport, setSingleLoading } = get();
      setSingleLoading(true);
      const response = await getSingleReport(id);
      setSingleReport(response.data);
      setSingleLoading(false);
    },
    getAllMessages: async () => {
      const { singleReport, setMessages, setMessageLoading } = get();

      if (singleReport.reportedBy?._id && singleReport.reportedUser?._id) {
        const participants = [
          singleReport.reportedBy._id,
          singleReport.reportedUser._id,
        ];
        try {
          setMessageLoading(true);
          const response = await getMessages(participants);
          setMessages(response.data.messages);
          setMessageLoading(false);
        } catch (error) {
          setMessageLoading(false);
        }
      }
    },
  };
});

export default useReportOptions;
