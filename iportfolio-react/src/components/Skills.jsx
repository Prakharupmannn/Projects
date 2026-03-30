export default function Skills() {
  const skills = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React", percent: 80 },
    { name: "Node.js", percent: 70 },
    { name: "Tailwind", percent: 90 },
    { name: "C++", percent: 80 },
    { name: "Java", percent: 85 },
  ];

  return (
    <section id="skills" className="py-16 px-10 bg-gray-">
      <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
      <div className="w-20 h-1 bg-blue-600 mt-2 mb-6"></div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-gray-700">{skill.name}</span>
              <span className="text-gray-600">{skill.percent}%</span>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}