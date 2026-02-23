const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Core",
      skills: ["Java", "Spring Boot", "Node.js", "Express", "Python", "Hibernate", "Maven"]
    },
    {
      title: "Frontend & Mobile",
      skills: ["React Native", "React", "TypeScript", "JavaScript", "Tailwind CSS", "JavaFX", "Bootstrap"]
    },
    {
      title: "Data & Cloud",
      skills: ["MySQL", "MongoDB", "Firebase", "Stripe API", "Google Gemini AI", "JWT", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
        <span className="text-electric font-mono text-xl">02.</span> TECHNICAL_STACK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-electric font-mono text-sm uppercase tracking-widest border-b border-electric/20 pb-2">
              {category.title}
            </h3>
            <ul className="space-y-4">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 bg-electric rounded-full group-hover:shadow-[0_0_8px_#38BDF8] transition-all"></span>
                  <span className="text-gray-400 group-hover:text-white transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;