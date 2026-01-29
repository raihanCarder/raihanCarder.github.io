export const go = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const nav = document.querySelector(".navbar");
  const navOffset = nav ? nav.getBoundingClientRect().height : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - navOffset;

  window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
};
