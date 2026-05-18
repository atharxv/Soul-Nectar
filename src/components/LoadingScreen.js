"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const hasLoaded = sessionStorage.getItem("soulnectar_loaded");
    if (!hasLoaded) {
      setIsVisible(true);
      // Start exit fade out at 2.7s
      setTimeout(() => {
        setIsFadingOut(true);
      }, 2700);
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem("soulnectar_loaded", "true");
    setIsVisible(false);
  };

  if (!isClient || !isVisible) return null;

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {!isFadingOut && (
        <motion.div
          key="loading-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: "var(--bg-color)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            willChange: "opacity"
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} // --ease-lux matching cubic-bezier(0.25, 1, 0.5, 1)
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem"
          }}>
            <img 
              src="/soul-nectar-logo.png" 
              alt="Soul Nectar Logo"
              style={{
                width: "150px",
                height: "auto",
              }}
            />
            
            <svg
              viewBox="0 0 400 120"
              style={{
                width: "100%",
                maxWidth: "260px",
              }}
              className="loading-svg"
            >
              <style jsx>{`
                .loading-svg {
                  max-width: 260px;
                }
                @media (max-width: 767px) {
                  .loading-svg {
                    max-width: 200px;
                  }
                  img {
                    width: 120px !important;
                  }
                }
              `}</style>
              
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="logo-path"
                style={{
                  fontFamily: "var(--font-caudex)",
                  fontSize: "36px",
                  fontWeight: "400",
                  letterSpacing: "0.15em",
                  "--path-length": "400",
                  "--fill-target": "var(--text-primary)"
                }}
              >
                SOUL NECTAR
              </text>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
