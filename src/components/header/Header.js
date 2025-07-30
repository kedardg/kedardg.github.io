import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  bigProjects
} from "../../portfolio";

function Header() {
  const {isDark, changeTheme} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display === false;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewProjects = bigProjects.display;

  return (
    <>
      {/* Skip to content link for screen readers */}
      <a 
        href="#main-content" 
        className="skip-to-content"
        onFocus={(e) => e.target.style.transform = 'translateY(0)'}
        onBlur={(e) => e.target.style.transform = 'translateY(-100%)'}
      >
        Skip to main content
      </a>
      <Headroom>
        <header className={isDark ? "dark-menu header" : "header"} role="banner">
        <a href="/" className="logo" aria-label="Home - Kedar Gaikwad Portfolio">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" aria-label="Toggle navigation menu" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
          aria-label="Menu"
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <nav role="navigation" aria-label="Main navigation">
          <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" aria-label="Navigate to Skills section">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" aria-label="Navigate to Work Experience section">Work</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" aria-label="Navigate to Open Source projects section">Open Source</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects" aria-label="Navigate to Projects section">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" aria-label="Navigate to Achievements section">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" aria-label="Navigate to Blogs section">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" aria-label="Navigate to Talks section">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact" aria-label="Navigate to Contact section">Contact</a>
          </li>
          <li>
            <a href="#resume" aria-label="Navigate to Resume section">Resume</a>
          </li>
          <li>
            <button 
              className="theme-toggle" 
              onClick={changeTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              aria-pressed={isDark}
            >
              {isDark ? (
                <i className="fas fa-sun" aria-hidden="true"></i>
              ) : (
                <i className="fas fa-moon" aria-hidden="true"></i>
              )}
            </button>
          </li>
          </ul>
        </nav>
        </header>
      </Headroom>
    </>
  );
}
export default Header;
