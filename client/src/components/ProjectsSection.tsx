import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "Modern, responsive portfolio website showcasing my projects and skills with smooth animations and optimized performance.",
            technologies: ["React", "Next.js", "Tailwind CSS", "ShadCN", "TypeScript"],
            githubUrl: "https://github.com/jekenmaharjan/my-portfolio",
            liveUrl: "/",
            featured: true
        },
        {
            title: "OfficeCare E-Commerce",
            description: "Full-stack e-commerce platform for office supplies with user authentication, cart functionality, and admin dashboard.",
            technologies: ["React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
            githubUrl: "https://github.com/jekenmaharjan/officecare",
            liveUrl: "/maintenance",
            featured: true
        },
        {
            title: "Minesweeper Game",
            description: "Classic Minesweeper game built with JavaScript featuring different difficulty levels and responsive design.",
            technologies: ["JavaScript", "React", "Tailwind CSS", "Next.js"],
            githubUrl: "https://github.com/jekenmaharjan/minesweeper",
            liveUrl: "/maintenance",
            featured: false
        },
        {
            title: "Calculator App",
            description: "Functional calculator application with clean UI and support for basic arithmetic operations.",
            technologies: ["JavaScript", "React", "Tailwind CSS", "Next.js"],
            githubUrl: "https://github.com/JekenMaharjan/Advance-Calculator",
            liveUrl: "https://advance-calculator-jekode.vercel.app/",
            featured: false
        },
        {
            title: "Lottery Game",
            description: "Interactive lottery number generator game with random number generation and winning logic.",
            technologies: ["JavaScript", "React", "Tailwind CSS", "Next.js"],
            githubUrl: "https://github.com/JekenMaharjan/Lottery-Game",
            liveUrl: "https://lottery-game-jekode.vercel.app/",
            featured: false
        },
        {
            title: "Text Summarization Tool",
            description: "Automatic text summarization application using AI/ML algorithms to extract key information from long texts.",
            technologies: ["Python", "React", "Node.js", "Express", "NLP"],
            githubUrl: "https://github.com/jekenmaharjan/text-summarizer",
            liveUrl: "/maintenance",
            featured: false
        }
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section id="projects" className="py-16 sm:py-20 px-6 bg-gray-900">
            <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
                        Featured <span className="bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Showcasing my expertise in MERN stack development and modern web technologies
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 border border-border/50 bg-gray-800/80 rounded-xl">
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
                                    <div>
                                        <CardTitle className="text-xl sm:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </CardTitle>
                                        <Badge variant="secondary" className="mt-2 text-xs sm:text-sm">Featured</Badge>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-900 hover:shadow-blue-500 hover:shadow-md" asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </a>
                                        </Button>
                                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-900 hover:shadow-blue-500 hover:shadow-md" asChild>
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                                                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                                    {project.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="outline" className="text-xs sm:text-sm text-white">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Other Projects */}
                <div className="mb-12">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-white">Other Notable Projects</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 border border-border/50 bg-gray-800/70 rounded-lg">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </CardTitle>
                                        <div className="flex gap-1">
                                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-900 hover:shadow-blue-500 hover:shadow-md" asChild>
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                                                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </a>
                                            </Button>
                                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-900 hover:shadow-blue-500 hover:shadow-md" asChild>
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-400 text-sm sm:text-base mb-3">
                                        {project.description}
                                    </CardDescription>
                                    <div className="flex flex-wrap gap-1 sm:gap-2">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <Badge key={idx} variant="outline" className="text-xs sm:text-sm text-white">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <Badge variant="outline" className="text-xs sm:text-sm text-white">
                                                +{project.technologies.length - 3}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* GitHub CTA */}
                <div className="text-center mt-12">
                    <Button variant="default" size="lg" className="bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] text-black hover:scale-105 transition-all duration-300 will-change-transform" asChild>
                        <a href="https://github.com/jekenmaharjan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                            View All Projects on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
