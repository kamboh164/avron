import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the window to the top on every route change, and smoothly
// scrolls to the matching section whenever the URL includes a hash
// (e.g. clicking a nav link with to="#features").
//
// React Router's <Link> does client-side navigation only — unlike a plain
// <a href="#features">, it does NOT trigger the browser's native
// "jump to element with this id" behavior, so without this effect, hash
// links in the navbar/footer silently do nothing.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace("#", "");

    // The target section may not be mounted yet on first paint (e.g. it's
    // behind the lazy-loaded sections on mobile), so retry for a short
    // window instead of giving up after a single missed frame.
    let attempts = 0;
    const maxAttempts = 20; // ~1s at 50ms intervals
    let timeoutId;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        timeoutId = setTimeout(tryScroll, 50);
      }
    };
    tryScroll();

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
}