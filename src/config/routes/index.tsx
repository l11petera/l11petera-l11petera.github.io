import React from "react";
import MainRoutes from "./main";
import { BrowserRouter } from "react-router-dom";

function RoutesConfig() {
  return (
    <div>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default RoutesConfig;
