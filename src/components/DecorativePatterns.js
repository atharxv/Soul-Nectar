import React from "react";

/**
 * Renders a full-bleed topographic repeating background SVG
 * Satisfies seamless tiling horizontal start/end y-value constraints.
 */
export function TopographicBackground({ variant = "a", instanceId }) {
  if (!instanceId) {
    throw new Error("TopographicBackground requires a unique 'instanceId' prop to prevent pattern ID conflicts.");
  }

  // Configs for the 3 distinct patterns
  const configs = {
    a: { // Sage green sections
      stroke: "var(--text-primary)",
      opacity1: 0.15,
      opacity2: 0.12,
      opacity3: 0.08,
      strokeWidth: 0.7,
      baseId: "topo-pattern-a",
      // Irregular Bezier paths that start and end at matching y-values for seamless tiling (x=0 matching x=200)
      paths: [
        "M 0,40 Q 50,20 100,40 T 200,40",
        "M 0,90 Q 60,60 110,90 T 200,90",
        "M 0,140 Q 50,160 100,140 T 200,140",
        "M 0,180 Q 70,160 120,180 T 200,180"
      ]
    },
    b: { // Beige hero sections
      stroke: "var(--accent-olive-dark)",
      opacity1: 0.08,
      opacity2: 0.06,
      opacity3: 0.05,
      strokeWidth: 0.6,
      baseId: "topo-pattern-b",
      paths: [
        "M 0,50 Q 50,30 100,50 T 200,50",
        "M 0,110 Q 70,80 130,110 T 200,110",
        "M 0,150 Q 80,120 140,150 T 200,150",
        "M 0,30 Q 40,50 90,30 T 200,30"
      ]
    },
    c: { // Dark footer section
      stroke: "var(--white)",
      opacity1: 0.06,
      opacity2: 0.04,
      opacity3: 0.03,
      strokeWidth: 0.5,
      baseId: "topo-pattern-c",
      paths: [
        "M 0,30 Q 30,10 70,30 T 200,30",
        "M 0,80 Q 50,50 100,80 T 200,80",
        "M 0,130 Q 40,150 90,130 T 200,130",
        "M 0,170 Q 80,150 130,170 T 200,170"
      ]
    }
  };

  const c = configs[variant] || configs.a;
  const patternId = `${c.baseId}-${instanceId}`;

  return (
    <svg 
      className="topo-bg-layer" 
      aria-hidden="true" 
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0
      }}
    >
      <defs>
        <pattern id={patternId} width="200" height="200" patternUnits="userSpaceOnUse">
          {c.paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={c.stroke}
              strokeWidth={c.strokeWidth}
              opacity={i === 0 ? c.opacity1 : i === 1 ? c.opacity2 : c.opacity3}
            />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

/**
 * Hand-drawn botanical line art elements
 * Satisfies standard round stroke-linecap and stroke-linejoin requirements.
 */
export function BotanicalIllustration({ variant = "olive", className = "", style = {} }) {
  // Exquisite custom hand-drawn botanical stroke SVGs
  const assets = {
    olive: { // BOTANICAL 1 — Gentle arching olive branch with leaves and small berries
      viewBox: "0 0 120 180",
      width: 120,
      height: 180,
      path: (
        <>
          {/* Main S-curve Stem */}
          <path d="M40,170 Q45,120 70,40" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Alternating Leaves */}
          <path d="M42,145 C28,140 22,125 32,120 C42,120 44,135 43,142 Z" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M48,135 C62,130 68,115 58,110 C48,110 46,125 47,132 Z" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M51,110 C38,105 32,90 42,85 C52,85 54,100 53,107 Z" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M57,95 C71,90 77,75 67,70 C57,70 55,85 56,92 Z" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M61,72 C48,67 42,52 52,47 C62,47 64,62 63,69 Z" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M68,55 C82,50 88,35 78,30 C68,30 66,45 67,52 Z" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          {/* Berries */}
          <circle cx="34" cy="115" r="3.5" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" />
          <circle cx="68" cy="82" r="3.5" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" />
          <circle cx="48" cy="55" r="3.5" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" />
        </>
      )
    },
    fern: { // BOTANICAL 2 — Arching fern frond with pairs of small pinnae
      viewBox: "0 0 100 200",
      width: 100,
      height: 200,
      path: (
        <>
          {/* Central spine */}
          <path d="M40,190 Q50,110 80,20" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Pinnae pairs branching outwards */}
          <path d="M42,165 Q25,165 22,150 Q36,155 43,161" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M44,163 Q61,160 68,145 Q56,152 45,158" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M45,140 Q30,135 25,120 Q40,128 47,135" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M48,138 Q65,130 72,115 Q58,125 49,132" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M49,115 Q34,108 30,93 Q44,101 51,109" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M52,112 Q68,102 75,87 Q60,98 53,105" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M54,90 Q40,80 37,65 Q50,75 56,83" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M57,87 Q72,75 78,60 Q64,72 58,80" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60,65 Q48,55 46,40 Q56,50 62,58" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M63,62 Q76,50 80,35 Q68,46 64,54" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )
    },
    leaf: { // BOTANICAL 3 — Single stem with large simple leaves (eucalyptus-like)
      viewBox: "0 0 80 160",
      width: 80,
      height: 160,
      path: (
        <>
          <path d="M35,150 Q40,90 55,20" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M37,120 Q15,115 18,95 Q33,98 39,112" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M40,105 Q65,100 62,80 Q47,85 42,98" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42,75 Q22,65 25,48 Q38,55 44,68" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M45,55 Q68,45 64,28 Q49,35 47,48" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )
    },
    pods: { // BOTANICAL 4 — Minimalistic seed pods on thin branching stems
      viewBox: "0 0 90 140",
      width: 90,
      height: 140,
      path: (
        <>
          {/* Stems */}
          <path d="M35,130 Q35,80 20,40" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35,130 Q45,70 50,30" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35,130 Q55,90 70,55" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          {/* Pod Heads */}
          <circle cx="20" cy="40" r="8" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" />
          <circle cx="50" cy="30" r="9" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" />
          <circle cx="70" cy="55" r="7" fill="none" stroke="var(--accent-olive-dark)" strokeWidth="1" />
          {/* Radial Lines in heads */}
          <line x1="20" y1="40" x2="20" y2="34" stroke="var(--accent-olive-dark)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="20" y1="40" x2="25" y2="43" stroke="var(--accent-olive-dark)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="20" y1="40" x2="15" y2="43" stroke="var(--accent-olive-dark)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="50" y1="30" x2="50" y2="23" stroke="var(--accent-olive-dark)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="50" y1="30" x2="56" y2="34" stroke="var(--accent-olive-dark)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="50" y1="30" x2="44" y2="34" stroke="var(--accent-olive-dark)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )
    }
  };

  const a = assets[variant] || assets.olive;

  return (
    <svg
      viewBox={a.viewBox}
      width={a.width}
      height={a.height}
      className={`botanical-illust ${className}`}
      aria-hidden="true"
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: 0,
        ...style
      }}
    >
      {a.path}
    </svg>
  );
}
