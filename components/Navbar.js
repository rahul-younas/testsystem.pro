"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Features", id: "features" },
  { name: "Pricing", id: "pricing" },
  { name: "Contact Us", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  // Close the menu when clicking outside the navbar
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleScroll = (id) => {
    setIsOpen(false);

    // Wait for the mobile menu to close before measuring the navbar
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const section = document.getElementById(id);
        const navbar = navbarRef.current;

        if (!section || !navbar) return;

        const navbarHeight = navbar.getBoundingClientRect().height;
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: sectionTop - navbarHeight,
          behavior: "smooth",
        });
      });
    });
  };

  return (
    <header
      ref={navbarRef}
      className="site-navbar-header sticky top-0 z-50 w-full border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
          className="shrink-0 text-xl font-bold tracking-tight text-foreground"
        >
          MyApp
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.id);
              }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile/tablet hamburger */}
        <div className="flex items-center">
          {!isOpen && <ThemeToggle />}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {isOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

      </nav>

      {/* Mobile/tablet dropdown */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full z-50 w-full border-t border-border bg-background px-4 py-3 shadow-md lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
                className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}