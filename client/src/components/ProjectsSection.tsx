import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        technologies: ["JavaScript", "HTML", "CSS", "React"],
        githubUrl: "https://github.com/jekenmaharjan/minesweeper",
        liveUrl: "/maintenance",
        featured: false
    },
    {
        title: "Calculator App",
        description: "Functional calculator application with clean UI and support for basic arithmetic operations.",
        technologies: ["JavaScript", "React", "CSS", "HTML"],
        githubUrl: "https://github.com/JekenMaharjan/Advance-Calculator",
        liveUrl: "https://jekode-advance-calculator.vercel.app/",
        featured: false
    },
    {
        title: "Lottery Game",
        description: "Interactive lottery number generator game with random number generation and winning logic.",
        technologies: ["JavaScript", "React", "CSS", "HTML"],
        githubUrl: "https://github.com/jekenmaharjan/lottery-game",
        liveUrl: "/maintenance",
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
    <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="1">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
                Featured <span className="bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Showcasing my expertise in MERN stack development and modern web technologies
            </p>
            </div>

            {/* Featured Projects */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-gradient-card">
                <CardHeader>
                    <div className="flex items-start justify-between">
                    <div>
                        <CardTitle className="text-xl font-semibold text-white group-hover:text-blue-500 transition-colors">
                        {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">Featured</Badge>
                    </div>
                    <div className="flex gap-2">
                        <Button className="rounded-full hover:bg-gray-900 hover:shadow-blue-500 hover:shadow-md" variant="ghost" size="icon" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500" >
                            <Github className="w-4 h-4" />
                        </a>
                        </Button>
                        <Button className="rounded-full hover:bg-gray-900 hover:shadow-blue-500 hover:shadow-md" variant="ghost" size="icon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                            <ExternalLink className="w-4 h-4" />
                        </a>
                        </Button>
                    </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs text-white">
                        {tech}
                        </Badge>
                    ))}
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>

            {/* Other Projects Grid */}
            <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-gradient-card">
                    <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                        <CardTitle className="text-lg font-semibold text-white group-hover:text-blue-500 transition-colors">
                        {project.title}
                        </CardTitle>
                        <div className="flex gap-1">
                        <Button className="rounded-full hover:bg-gray-900 hover:shadow-blue-500 hover:shadow-md" variant="ghost" size="icon" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                            <Github className="w-3 h-3" />
                            </a>
                        </Button>
                        <Button className="rounded-full hover:bg-gray-900 hover:shadow-blue-500 hover:shadow-md" variant="ghost" size="icon" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                            <ExternalLink className="w-3 h-3" />
                            </a>
                        </Button>
                        </div>
                    </div>
                    </CardHeader>
                    <CardContent>
                    <CardDescription className="text-sm text-gray-400 mb-3">
                        {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs text-white">
                            {tech}
                        </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs text-white">
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
            <div className="text-center">
            <Button variant="default" size="lg" className="bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] text-black hover:scale-105" asChild>
                <a href="https://github.com/jekenmaharjan" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-black" />
                View All Projects on GitHub
                </a>
            </Button>
            </div>
        </div>
    </section>
  );
};

export default ProjectsSection;