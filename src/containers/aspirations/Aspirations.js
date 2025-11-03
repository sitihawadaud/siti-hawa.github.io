import React, { useContext } from "react";
import "./Aspirations.scss";
import { aspirationsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Aspirations() {
  const { isDark } = useContext(StyleContext);
  
  if (!aspirationsSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="aspirations">
        <div className="aspirations-main-div">
          <div className="aspirations-header">
            <h1 className={isDark ? "dark-mode aspirations-title" : "aspirations-title"}>
              {aspirationsSection.title}
            </h1>
            <p className={isDark ? "dark-mode aspirations-subtitle" : "subTitle aspirations-subtitle"}>
              {aspirationsSection.subtitle}
            </p>
          </div>
          <div className="aspirations-cards-div">
            {aspirationsSection.aspirations.map((aspiration, i) => {
              return (
                <Fade bottom duration={1000} distance="20px" key={i}>
                  <div className={isDark ? "dark-mode aspiration-card aspiration-card-dark" : "aspiration-card aspiration-card-light"}>
                    <div className="aspiration-content">
                      <h3 className={isDark ? "dark-mode aspiration-card-title" : "aspiration-card-title"}>
                        {aspiration.title}
                      </h3>
                      <p className={isDark ? "dark-mode aspiration-card-desc" : "aspiration-card-desc"}>
                        {aspiration.description}
                      </p>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
          {aspirationsSection.motto && (
            <div className="motto-section">
              <Fade bottom duration={1000} distance="20px">
                <blockquote className={isDark ? "dark-mode motto-quote" : "motto-quote"}>
                  {aspirationsSection.motto}
                </blockquote>
              </Fade>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}