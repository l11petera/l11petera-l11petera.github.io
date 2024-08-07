import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../../pages/main/home";
import CarouselSlider from "../../../pages/main/test";
import Main from "../../../pages/main";
import AboutPage from "../../../pages/main/about";
import SingINPage from "../../../pages/sing-in";
import TeamsPage from "../../../pages/main/teams";
import AboutsPage from "../../../pages/main/abouts";
import ServicePage from "../../../pages/main/service";
import DataSciencePage from "../../../pages/main/services/datascience";
import BlogPages from "../../../pages/main/blogs";
import InfoDevPage from "../../../pages/main/services/info-dev";
import JoindrePage from "../../../pages/main/joindre";
import AccordionApp from "../../../pages/main/test";
import PagesWithTeams from "../../../pages/main/test";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="sing-in" element={<SingINPage />} />
          <Route path="abouts" element={<AboutsPage />} />
          <Route path="blogs" element={<BlogPages />} />
          <Route path="data-science" element={<DataSciencePage />} />
          <Route path="info-dev" element={<InfoDevPage />} />
          <Route path="joindre" element={<JoindrePage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="test" element={<PagesWithTeams />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRoutes;
