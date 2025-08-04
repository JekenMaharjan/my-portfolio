import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 87 },
        { name: "REST APIs", level: 90 },
        { name: "PHP Laravel", level: 75 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "Figma/Design", level: 78 },
        { name: "Docker", level: 40 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern web technologies with expertise in the MERN stack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center text-primary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">MERN Stack Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "MongoDB", desc: "NoSQL Database" },
                  { name: "Express.js", desc: "Backend Framework" },
                  { name: "React", desc: "Frontend Library" },
                  { name: "Node.js", desc: "Runtime Environment" }
                ].map((tech, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-semibold text-foreground">{tech.name}</div>
                    <div className="text-sm text-muted-foreground">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;