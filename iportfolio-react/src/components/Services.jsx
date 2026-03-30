export default function Services() {
  const services = [
    { title: "Web Development", desc: "Building modern web applications." },
    { title: "UI/UX Design", desc: "Creating user-friendly interfaces." },
    { title: "Responsive Design", desc: "Mobile-first web layouts." },
    { title: "API Integration", desc: "Connecting frontend with backend APIs." },
  ];

  return (
    <section id="services" className="py-16 px-10 bg-white">
      <h2 className="text-4xl font-bold text-gray-800">Services</h2>
      <div className="w-20 h-1 bg-blue-600 mt-2 mb-6"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl text-gray-700">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-3">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}