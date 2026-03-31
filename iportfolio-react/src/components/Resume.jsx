export default function Resume() {
  return (
    <section id="resume" className="py-16 px-10 bg-white">
      <h2 className="text-4xl font-bold text-gray-800">Resume</h2>
      <div className="w-20 h-1 bg-blue-600 mt-2 mb-6"></div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-700">Summary</h3>
          <div className="mt-4 border-l-4 border-blue-600 pl-4">
            <h4 className="font-bold text-lg">Prakhar Upman</h4>
            <p className="text-gray-600">
              Enthusiastic Web Developer with strong knowledge of React.js and Tailwind CSS, seeking an opportunity to contribute to real-world projects and enhance my development skills.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-700 mt-10">Education</h3>
          <div className="mt-4 border-l-4 border-blue-600 pl-4">
            <h4 className="font-bold text-lg">B.Tech Computer Science</h4>
            <p className="text-gray-500">2023 - 2027</p>
            <p className="text-gray-600">Baderia Global Institute Of Engineering And Management</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-700">Experience</h3>
          <div className="mt-4 border-l-4 border-blue-600 pl-4">
            <h4 className="font-bold text-lg">Frontend Developer</h4>
            <p className="text-gray-500">2023 - Present</p>
            <ul className="list-disc pl-5 text-gray-600 mt-2">
              <li>Built responsive UI using Tailwind CSS</li>
              <li>Created reusable React components</li>
              <li>Worked with APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}