import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import emoji from "react-easy-emoji";
import "./TabbedSkills.scss";

const TabbedSkills = ({ skillsSection }) => {
  const { isDark } = useContext(StyleContext);
  const [activeTab, setActiveTab] = useState('core');

  return (
    <div className={isDark ? "dark-mode skills-tabs-container" : "skills-tabs-container"}>
      {/* Header Section */}
      <div className={isDark ? "dark-mode skills-header" : "skills-header"}>
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>{skillsSection.title}</h1>
        <p className={isDark ? "dark-mode skills-subheading" : "skills-subheading"}>{skillsSection.subTitle}</p>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs-navigation">
        {skillsSection.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active-tab' : ''} ${isDark ? 'dark-mode' : ''}`}
          >
            <i className={tab.fontAwesomeClassname}></i>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="tab-divider"></div>

      {/* Tab Content */}
      <div className={`tab-content ${isDark ? 'dark-mode' : ''}`}>
        {skillsSection.skillsByCategory[activeTab].map((skillGroup, groupIndex) => (
          <div key={groupIndex} className="skill-group">
            <h3 className="skill-group-title">{skillGroup.category}</h3>
            <div className="skills-grid">
              {skillGroup.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className={`skill-tag ${isDark ? 'dark-mode' : ''}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key Expertise Bullets */}
      <div className="expertise-bullets">
        {skillsSection.skills.map((skill, i) => (
          <p key={i} className={`expertise-bullet ${isDark ? 'dark-mode' : ''}`}>
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TabbedSkills; 