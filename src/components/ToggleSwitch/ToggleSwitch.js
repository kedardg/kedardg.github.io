import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch" aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
        aria-label={isDark ? "Currently dark theme, switch to light" : "Currently light theme, switch to dark"}
        aria-describedby="theme-toggle-description"
      />
      <span 
        className="slider round"
        role="presentation"
        aria-hidden="true"
      >
        <span className="emoji" aria-hidden="true">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
      <span id="theme-toggle-description" className="sr-only">
        Toggle between light and dark theme
      </span>
    </label>
  );
};
export default ToggleSwitch;
