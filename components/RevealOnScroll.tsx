"use client";

import { useEffect, useState } from "react";

export function RevealOnScroll() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Verificar preferência de motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Se prefere motion reduzido, não observer
    if (mediaQuery.matches) {
      // Adicionar classe "in" a todos os elementos para mostrar imediatamente
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-up, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return null;
}
