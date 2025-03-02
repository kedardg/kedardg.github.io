import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  // Helper function to determine appropriate icon for a link
  function getLinkIcon(url, name) {
    if (!url) return null;
    
    const lowerCaseName = name.toLowerCase();
    const lowerCaseUrl = url.toLowerCase();
    
    if (lowerCaseName.includes("github") || lowerCaseUrl.includes("github.com")) {
      return <i className="fab fa-github"></i>;
    } else if (lowerCaseName.includes("youtube") || lowerCaseUrl.includes("youtube.com") || lowerCaseUrl.includes("youtu.be")) {
      return <i className="fab fa-youtube"></i>;
    } else if (lowerCaseName.includes("demo") || lowerCaseName.includes("live")) {
      return <i className="fas fa-external-link-alt"></i>;
    } else if (lowerCaseName.includes("documentation") || lowerCaseName.includes("docs")) {
      return <i className="fas fa-book"></i>;
    } else {
      return <span>{name}</span>;
    }
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    ></img>
                  </div>
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink && project.footerLink.length > 0 ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          if (!link.url) return null;
                          return (
                            <a
                              key={i}
                              className={isDark ? "dark-mode project-icon-link" : "project-icon-link"}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={link.name}
                            >
                              {getLinkIcon(link.url, link.name)}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}