import { useEffect, useRef, useState } from "react";
import "./Header.css";

export default function Header() {
  const headerRef = useRef();
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      let translateY = 0;

      if (currentScroll > 0 && currentScroll < maxScroll) {
        const diff = currentScroll - lastScroll;
        translateY = Math.max(Math.min(-diff * 0.4, 10), -10);
      }

      if (headerRef.current) {
        headerRef.current.style.transform = `translateY(${translateY}px)`;
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header ref={headerRef}>
      <div className="header-inner">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/create">Create</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
