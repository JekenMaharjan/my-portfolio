import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Palette } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Expert",
      description: "React, TypeScript, Next.js, Tailwind CSS"
    },
    {
      icon: Server,
      title: "Backend Specialist",
      description: "Node.js, Express, RESTful APIs, GraphQL"
    },
    {
      icon: Database,
      title: "Database Pro",
      description: "MongoDB, PostgreSQL, MySQL, Redis"
    },
    {
      icon: Palette,
      title: "UI/UX Focused",
      description: "Responsive Design, User Experience, Accessibility"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate MERN stack developer with a love for creating innovative web solutions 
            that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Building the Future of Web
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in the MERN stack (MongoDB, Express.js, React, Node.js), 
              I create full-stack applications that are not only functional but also 
              beautiful and user-friendly. My journey in web development has been 
              driven by curiosity and a desire to solve complex problems through code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying updated with 
              the latest technologies and best practices. From responsive design to 
              scalable backend architectures, I enjoy every aspect of the development process.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {["JavaScript", "TypeScript", "React", "Node.js", "MongoDB", "Express", "Next.js", "Tailwind CSS"].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;