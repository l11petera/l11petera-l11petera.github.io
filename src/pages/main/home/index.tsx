import { FunctionComponent } from "react";
import NavbarPage from "../layout/header/navbar";
import IntroPage from "../layout/header/intro";
import InteractionPage from "../interaction";
import ServicesPages from "../services";
import AboutPage from "../about";
import TeamPage from "../team";
import QuestionPage from "../questions";
import BlogPage from "../blog";
import ContactPage from "../contact";
import FooterPage from "../layout/footer";

const Vividmind: FunctionComponent = () => {
  return (
    <div className="">
      <NavbarPage />
      <IntroPage />

      <AboutPage />
      <BlogPage />
      {/* <ServicesPages /> */}
      <QuestionPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
};

export default Vividmind;
