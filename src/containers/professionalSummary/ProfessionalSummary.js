import React from "react";
import "./ProfessionalSummary.scss";
import { professionalSummary } from "../../portfolio";
import { Fade } from "react-reveal";

export default function ProfessionalSummary() {
  if (!professionalSummary.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="professional-summary">
        <div className="professional-summary-main-div">
          <div className="professional-summary-header">
            <h1 className="professional-summary-title">{professionalSummary.title}</h1>
            <p className="professional-summary-subtitle">{professionalSummary.subtitle}</p>
          </div>
          <div className="professional-summary-content">
            {professionalSummary.summary.map((point, i) => {
              return (
                <Fade bottom duration={1000} distance="20px" key={i}>
                  <div className="professional-summary-point">
                    <div className="professional-summary-text" dangerouslySetInnerHTML={{__html: point}} />
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}