import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50 sm:brightness-20"
                style={{
                    backgroundImage: `url('/heroPic.jpg')`,
                }}
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-90" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <div className="animate-fade-in">
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-foreground text-white">Hi, I&apos;m </span>
                        <span className="bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] bg-clip-text text-transparent">
                            Jeken Maharjan
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 font-medium">
                        Computer Engineer | Full-Stack Developer
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Passionate about creating exceptional web experiences with React, Node.js,
                        MongoDB, and Express. I build scalable applications that solve real-world problems.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full sm:w-auto cursor-pointer text-black group bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] hover:scale-105 transition-all duration-300 will-change-transform"
                            onClick={() => {
                                const section = document.getElementById("projects");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            View My Work
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="lg"
                            className="w-full sm:w-auto cursor-pointer border border-blue-400 text-blue-400 shadow-sm shadow-blue-400 hover:scale-105 transition-all duration-300 hover:bg-blue-400 hover:text-white"
                            onClick={() => {
                                const section = document.getElementById("contact");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            <Mail className="w-4 h-4 mr-2" />
                            Get In Touch
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                        <a
                            href="https://github.com/jekenmaharjan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-full shadow-sm shadow-blue-400 hover:shadow-xl backdrop-blur-sm border border-border/0 hover:border-blue-400/50 transition-all duration-300 hover:shadow-glow"
                        >
                            <Github className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </a>
                        <a
                            href="https://linkedin.com/in/jekenmaharjan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-full shadow-sm shadow-blue-400 hover:shadow-xl backdrop-blur-sm border border-border/5 hover:border-blue-400/50 transition-all duration-300 hover:shadow-glow"
                        >
                            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </a>
                        <a
                            href="https://twitter.com/jekenmaharjan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-full shadow-sm shadow-blue-400 hover:shadow-xl backdrop-blur-sm border border-border/0 hover:border-blue-400/50 transition-all duration-300 hover:shadow-glow"
                        >
                            <Twitter className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </a>
                        <a
                            href="mailto:jeken.maharjan@email.com"
                            className="group p-3 rounded-full shadow-sm shadow-blue-400 hover:shadow-xl backdrop-blur-sm border border-border/0 hover:border-blue-400/50 transition-all duration-300 hover:shadow-glow"
                        >
                            <Mail className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
                <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
