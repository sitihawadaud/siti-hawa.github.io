import React from "react";
import "./Certifications.scss";
import { taskForceSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function TaskForce() {
  if (!taskForceSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="task-force">
        <div className="certifications-main-div">
          <div className="certifications-header">
            <h1 className="certifications-title">{taskForceSection.title}</h1>
            <p className="certifications-subtitle">{taskForceSection.subtitle}</p>
          </div>
          <div className="certifications-cards-div">
            {taskForceSection.initiatives.map((initiative, i) => {
              return (
                <Fade bottom duration={1000} distance="20px" key={i}>
                  <div className="certification-card">
                    <div className="certification-card-header">
                      <div className="certification-logo">
                        <img 
                          src={initiative.logo} 
                          alt={initiative.title}
                          className="certification-logo-img"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="certification-badge">
                        <span className="certification-status valid">
                          {initiative.role}
                        </span>
                      </div>
                    </div>
                    <div className="certification-content">
                      <h3 className="certification-title">{initiative.title}</h3>
                      <p className="certification-subtitle">{initiative.organization}</p>
                      <p className="certification-duration">{initiative.duration}</p>
                      <p className="certification-description">{initiative.description}</p>
                      <ul className="initiative-highlights">
                        {initiative.highlights.map((highlight, j) => (
                          <li key={j}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
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