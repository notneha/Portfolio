"use client";

import { useMemo } from "react";

// A quiet, orchestrated signature element: nodes and edges that evoke an
// embedding / vector-search graph — the subject at the center of this resume.
export function VectorField() {
  const nodes = useMemo(() => {
    const seeded = [
      [8, 18], [22, 8], [38, 22], [55, 10], [70, 20], [86, 12],
      [14, 42], [30, 50], [48, 40], [64, 48], [80, 44], [93, 55],
      [10, 70], [26, 80], [42, 68], [58, 78], [74, 66], [90, 76],
    ];
    return seeded.map(([x, y], i) => ({ x, y, id: i }));
  }, []);

  const edges = useMemo<[number, number][]>(
    () => [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
      [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
      [12, 13], [13, 14], [14, 15], [15, 16], [16, 17],
      [1, 7], [7, 13], [3, 9], [9, 15], [4, 10], [10, 16],
    ],
    []
  );

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => {
        const na = nodes[a];
        const nb = nodes[b];
        if (!na || !nb) return null;
        return (
          <line
            key={i}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke="currentColor"
            className="text-accent/40"
            strokeWidth="0.15"
          />
        );
      })}
      {nodes.map((n) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.id % 3 === 0 ? 0.9 : 0.55}
          className={n.id % 3 === 0 ? "fill-accent" : "fill-secondary"}
          style={{
            animation: `drift ${7 + (n.id % 5)}s ease-in-out infinite`,
            animationDelay: `${(n.id % 6) * 0.4}s`,
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        />
      ))}
    </svg>
  );
}
