import React, { useState, useEffect } from "react";
import "../css/home.css";
import Mobile from "./mobile";
import "tailwindcss/tailwind.css";
import Web from "./web";

function Home() {
  const [modal, setModal] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const abrirModal = (e) => {
    e.preventDefault();
    setModal(true);
  };
  return (
    <div className="home">
      {matches ? (
        <Web abrirModal={abrirModal} setModal={setModal} modal={modal} />
      ) : (
        <Mobile abrirModal={abrirModal} setModal={setModal} modal={modal} />
      )}
    </div>
  );
}

export default Home;
