import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border/50 bg-black"
          : "bg-transparent"
      }`}
    >
        <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
            {/* Logo */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center justify-center gap-5 cursor-pointer text-xl font-bold bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 will-change-transform"
            >
                <img src="Logo.png" alt="Profile Logo" className="h-10 w-10" />
                Jeken Maharjan
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-blue-500 transition-colors relative group cursor-pointer"
                >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </button>
                ))}
                <a href="/resume.pdf" download>
                    <Button variant="default" size="sm" className="cursor-pointer shadow-sm shadow-blue-400 hover:shadow-md hover:scale-102 border-1 border-blue-400 text-blue-400">
                        Resume  
                    </Button>
                </a>    
            </div>

            {/* Mobile Menu Button */}
            <Button
                size="icon"
                className="md:hidden text-white hover:text-black hover:bg-white cursor-pointer transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
            <div className="md:hidden mt-4 border-t border-border/50">
                <div className="flex mt-4 justify-between items-center">
                    {navItems.map((item) => (
                        <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left text-muted-foreground hover:text-white cursor-pointer transition-colors py-2"
                        >
                        {item.label}
                        </button>
                    ))}
                    <a href="/resume.pdf" download>
                        <Button variant="default" size="sm" className="cursor-pointer shadow-sm shadow-blue-400 hover:shadow-md hover:scale-105 transition-transform transition-shadow duration-300 will-change-transform border-1 border-blue-400 text-blue-400">
                            Resume
                        </Button>
                    </a>
                </div>
            </div>
            )}
        </div>
    </nav>
  );
};

export default Navigation;