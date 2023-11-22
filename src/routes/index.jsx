import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import ApprovalPage from "../pages/approval";
import FailPage from "../pages/fail";
import CancelPage from "../pages/cancel";

const EntryRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/approval" element={<ApprovalPage />}></Route>
        <Route path="/fail" element={<FailPage />}></Route>
        <Route path="/cancel" element={<CancelPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default EntryRoute;
