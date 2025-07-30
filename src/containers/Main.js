import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "../components/topButton/TopButton";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import Contact from "./contact/Contact";
import SplashScreen from "./splashScreen/SplashScreen";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <ErrorBoundary>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <ErrorBoundary>
                <Header />
              </ErrorBoundary>
              <main id="main-content" role="main">
                <ErrorBoundary>
                  <Greeting />
                </ErrorBoundary>
              <ErrorBoundary>
                <Skills />
              </ErrorBoundary>
              <ErrorBoundary>
                <StackProgress />
              </ErrorBoundary>
              <ErrorBoundary>
                <Education />
              </ErrorBoundary>
              <ErrorBoundary>
                <WorkExperience />
              </ErrorBoundary>
              <ErrorBoundary>
                <Projects />
              </ErrorBoundary>
              <ErrorBoundary>
                <Achievement />
              </ErrorBoundary>
              <ErrorBoundary>
                <Blogs />
              </ErrorBoundary>
              <ErrorBoundary>
                <Talks />
              </ErrorBoundary>
              <ErrorBoundary>
                <Twitter />
              </ErrorBoundary>
              <ErrorBoundary>
                <Podcast />
              </ErrorBoundary>
              <ErrorBoundary>
                <Contact />
              </ErrorBoundary>
              <ErrorBoundary>
                <Profile />
              </ErrorBoundary>
                <ErrorBoundary>
                  <Footer />
                </ErrorBoundary>
              </main>
              <ScrollToTopButton />
            </>
          )}
        </ErrorBoundary>
      </StyleProvider>
    </div>
  );
};

export default Main;
