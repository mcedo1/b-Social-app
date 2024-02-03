import React, { useState, useEffect } from "react";
import "./MainPage.css";
import SideBar from "./sideBar";
import Submain from "../submain.component/Submain";
import { Button } from "react-bootstrap";

function MainPage() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTopButton(scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    // Scrollajte na vrh stranice
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="MainPage">
      <SideBar />
      <Submain />
      {showScrollTopButton && (
        <Button
          onClick={handleScrollTop}
          style={{ position: "fixed", bottom: "20px", right: "5px" }}
          className="btn btn-dark"
        >
          On top
        </Button>
      )}
    </div>
  );
}

export default MainPage;
