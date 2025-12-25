import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled ? "bg-gradient-hero" : "bg-primary-foreground/20"
            }`}>
              <Leaf className={`w-5 h-5 ${isScrolled ? "text-primary-foreground" : "text-primary-foreground"}`} />
            </div>
            <span className={`font-display text-xl transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              AgriHub
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant={isScrolled ? "default" : "hero-outline"}
              size="sm"
              onClick={scrollToDownload}
            >
              Get the App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background rounded-2xl shadow-prominent p-6 mb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground text-left py-2 font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="default" size="default" onClick={scrollToDownload} className="mt-2">
                Get the App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
