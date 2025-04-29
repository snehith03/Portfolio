import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  category: 'soft' | 'technical';
  level: number; // 1-10
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    { name: 'Communication', category: 'soft', level: 9 },
    { name: 'Interpersonal', category: 'soft', level: 8 },
    { name: 'Problem Solving', category: 'soft', level: 9 },
    { name: 'Leadership', category: 'soft', level: 8 },
    { name: 'Team Management', category: 'soft', level: 7 },
    { name: 'Python', category: 'technical', level: 8 },
    { name: 'Java', category: 'technical', level: 7 },
    { name: 'C', category: 'technical', level: 6 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="min-h-screen bg-gray-800 text-white py-20 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-indigo-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Soft Skills</h3>
            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category === 'soft')
                .map((skill, index) => (
                  <div key={index} className="overflow-hidden">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level * 10}%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-indigo-500 rounded-full transition-all duration-1000 ${
                          isVisible
                            ? 'w-full transform-none'
                            : 'w-0 transform translate-x-[-100%]'
                        }`}
                        style={{
                          width: `${skill.level * 10}%`,
                          transitionDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Technical Skills</h3>
            <div className="space-y-6">
              {skills
                .filter((skill) => skill.category === 'technical')
                .map((skill, index) => (
                  <div key={index} className="overflow-hidden">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level * 10}%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-indigo-500 rounded-full transition-all duration-1000 ${
                          isVisible
                            ? 'w-full transform-none'
                            : 'w-0 transform translate-x-[-100%]'
                        }`}
                        style={{
                          width: `${skill.level * 10}%`,
                          transitionDelay: `${index * 0.2 + 0.8}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="overflow-x-hidden">
            <div
              className={`whitespace-nowrap animate-marquee py-4 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDuration: '15s' }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-6 py-3 m-2 bg-indigo-800 bg-opacity-40 rounded-full text-lg"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;