
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Palette } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Stack",
      description: "React, TypeScript, Next.js, Tailwind CSS, ShadCN UI, Hero UI, Lucide React (icon set)"
    },
    {
      icon: Server,
      title: "Backend Stack",
      description: "Node.js, Express, MongoDB, REST APIs, JWT Auth, Mongoose, API Integration (with frontend)"

    },
    {
      icon: Database,
      title: "Database Stack",
      description: "MongoDB, MySQL, Mongoose, Oracle"

    },
    {
      icon: Palette,
      title: "UI/UX Principles",
      description: "Responsive Design, Accessibility, User Experience, Clean UI"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate MERN stack developer with a love for creating innovative web solutions 
            that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Building the Future of Web
            </h3>
            <p className="text-gray-400 leading-relaxed">
              With expertise in the MERN stack (MongoDB, Express.js, React, Node.js), 
              I create full-stack applications that are not only functional but also 
              beautiful and user-friendly. My journey in web development has been 
              driven by curiosity and a desire to solve complex problems through code.
            </p>
            <p className="text-gray-400  leading-relaxed">
              I believe in writing clean, maintainable code and staying updated with 
              the latest technologies and best practices. From responsive design to 
              scalable backend architectures, I enjoy every aspect of the development process.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {["JavaScript", "TypeScript", "React", "Node.js", "MongoDB", "Express", "Next.js", "Tailwind CSS"].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1 text-white bg-gray-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group bg-gray-800 hover:shadow-card transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-blue-400/10 group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400 ">{item.description}</p>
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