function Projects() {
  const projects = [
    {
      title: "Weather Forecast Web App",
      description:
        "A simple web application that shows current weather and 5-day forecasts using the OpenWeatherMap API.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      image: "/images/we.png", 
    },
    {
      title: "Virtual Lab Experiments Portal",
      description:
        "Developed a platform to simulate mathematics lab experiments for students, using JavaScript and responsive design.",
      tech: ["JavaScript", "Bootstrap", "HTML", "CSS"],
      image: "/images/de.png", 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 transition-transform transform hover:-translate-y-1"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-600 px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
