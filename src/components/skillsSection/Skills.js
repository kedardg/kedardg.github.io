import React, { useContext } from "react";
import "./Skills.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Skills({ skills }) {
  const { isDark } = useContext(StyleContext);
  
  return (
    <div className="skills-category-container">
      {skills.core.map((category, index) => (
        <div 
          key={index} 
          className={`skills-category ${isDark ? 'dark-mode' : ''}`}
        >
          <h3 className="skills-category-title">
            {category.category}
          </h3>
          <ul className="skills-list">
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}