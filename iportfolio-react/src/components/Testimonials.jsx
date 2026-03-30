export default function Testimonials() {
  const testimonials = [
    {
      name: "Client 1",
      msg: "Amazing work! Very professional developer.",
    },
    {
      name: "Client 2",
      msg: "Delivered the project on time and with high quality.",
    },
    {
      name: "Client 3",
      msg: "Great communication and clean code.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800">Testimonials</h2>
      <div className="w-20 h-1 bg-blue-600 mt-2 mb-6"></div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          >
            <p className="text-gray-600 italic">"{item.msg}"</p>
            <h3 className="mt-4 font-bold text-gray-800">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}