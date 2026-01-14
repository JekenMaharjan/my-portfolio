import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
        if (element) element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-black/90 backdrop-blur-md shadow-md border-b border-gray-800"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-3 cursor-pointer text-xl font-bold bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                >
                    <img src="/Logo.png" alt="Logo" className="h-10 w-10" />
                    Jeken Maharjan
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            className="relative group text-gray-300 hover:text-blue-400 transition-colors font-medium"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}

                    <a href="/resume.pdf" download>
                        <Button className="bg-transparent border border-blue-400 text-blue-400 shadow-sm shadow-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300">
                            Resume
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    size="icon"
                    className="md:hidden text-white hover:text-black hover:bg-white transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800 transition-all duration-300">
                    <div className="flex flex-col gap-3 px-6 py-4">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="text-gray-300 hover:text-blue-400 font-medium text-left py-2 transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}

                        <a href="/resume.pdf" download className="mt-2">
                            <Button className="w-full bg-transparent border border-blue-400 text-blue-400 shadow-sm shadow-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300">
                                Resume
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
