import React from "react";
import HomeAdaptive from "./pages/home";
import NewFeedbackAdaptive from "./pages/newFeedback";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomeAdaptive />} />
          <Route
            path={`${ROUTES.NEW_FEEDBACK}/:formId`}
            element={<NewFeedbackAdaptive />}
          />
          <Route
            path={`${ROUTES.EDIT_FEEDBACK}/:formId`}
            element={<NewFeedbackAdaptive />}
          />
          <Route path={ROUTES.OTHER} element={<Navigate to={ROUTES.HOME} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
