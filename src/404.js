import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./404.scss";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <Header />
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}