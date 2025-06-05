// import "./App.css";
import "./index.css";

import {
  Campaigns,
  Dashboard,
  Forgot,
  LogIn,
  Report,
  SingleReport,
  SingleUser,
  Subscription,
  System,
  Users,
} from "./pages";
import { PrivateRoute, PublicRoute } from "./routes";
import { Route, Routes } from "react-router-dom";

// import React from "react";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:uid" element={<SingleUser />} />
        <Route path="/report" element={<Report />} />
        <Route path="/report/:id" element={<SingleReport />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/system" element={<System />} />
      </Route>
    </Routes>
  );
};

export default App;
