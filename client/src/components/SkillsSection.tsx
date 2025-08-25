import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaReact, FaBootstrap, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiShadcnui, SiExpress, SiPostman, SiMongodb, SiMysql, SiFirebase, SiC, SiCplusplus, SiSharp, SiPython, SiGithub } from "react-icons/si";


const SkillsSection = () => {
  const skillCategories = [
    {
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "ShadCN UI", icon: <SiShadcnui className="text-white" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
        { name: "C#", icon: <SiSharp className="text-purple-500" /> },
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/95">
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="1">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
                Technical <span className="bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proficient in modern web technologies with expertise in the MERN stack
            </p>
            </div>

            <div>
                {skillCategories.map((category, index) => (
                    <Card key={index} className="bg-gray-700/60 border-border/50 hover:shadow-card transition-all duration-300 p-10">
                        <CardContent className="grid grid-cols-2 md:grid-cols-7 items-center justify-center gap-y-10">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex flex-col items-center justify-center gap-2 hover:scale-130 transition-all duration-300 will-change-transform">
                                    {/* Skill item grid */}
                                    {/* Icon */}
                                    <span className="justify-center text-7xl">
                                        {skill.icon}
                                    </span>

                                    {/* Skill Name */}
                                    <span className="text-md text-white">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* MERN Stack Highlight */}
            <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gray-700/40 border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-8 flex flex-col gap-2">
                <h3 className="text-2xl font-bold mb-4 text-blue-500">MERN Stack Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, desc: "NoSQL Database" },
                    { name: "Express.js", icon: <SiExpress className="text-gray-400" />, desc: "Backend Framework" },
                    { name: "React", icon: <FaReact className="text-cyan-400" />, desc: "Frontend Library" },
                    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "Runtime Environment" }
                    ].map((tech, index) => (
                    <div key={index} className="flex flex-col text-center items-center">
                        <span className="justify-center text-6xl">{tech.icon}</span>
                        <div className="text-lg font-semibold text-white">{tech.name}</div>
                        <div className="text-sm text-gray-400">{tech.desc}</div>
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