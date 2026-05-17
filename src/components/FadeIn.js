"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, className = "", style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay: delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
