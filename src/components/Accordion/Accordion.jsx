import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { images } from "../../constants";
import "./Accordion.css";

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className="app_accordion">
      <div className="app_accordion-title" onClick={toggleSection}>
        <div className="app_accordion-question">
          <Slide direction="up" delay={100}>
            <p className="p_montserrat-14">{section.title}</p>
          </Slide>
        </div>
        <div className="app_accordion-btn">
          {isActiveSection ? "-" : <img src={images.plus} alt="" />}
        </div>
      </div>
      {isActiveSection && (
        <p className="p_montserrat-14 accord-anim">{section.content}</p>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="app_accordion">
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
