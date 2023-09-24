import About from "../../containers/About/About";
import Hero from "../../containers/Hero/Hero";
import Rules from "../../containers/Rules/Rules";
import Judge from "../../containers/Judge/Judge";
import Faqs from "../../containers/Faqs/Faqs";
import Privacy from "../../containers/Privacy/Privacy";
import Brand from "../../containers/Brands/Brand";
import Timeline from "../../containers/Timeline/Timeline";
import Medal from "../../containers/Medal/Medal";

import "./Home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Rules />  
      <Judge />
      <Faqs />
      <Timeline /> 
      <Medal /> 
      <Brand />
      <Privacy />
    </div>
  );
};

export default HomePage;
