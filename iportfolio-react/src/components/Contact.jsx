export default function Contact() {
  return (
    <section id="contact" className="py-16 px-10 bg-white">
      <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
      <div className="w-20 h-1 bg-blue-600 mt-2 mb-6"></div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-bold text-gray-700">Get in Touch</h3>
          <p className="text-gray-600 mt-3">
            Feel free to contact me for any project or collaboration.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p>
              <b>Location:</b> Jabalpur, India
            </p>
            <p>
              <b>Email:</b> upmajiprakhar@gmail.com
            </p>
            <p>
              <b>Phone:</b> +91 8827353112            </p>
          </div>
        </div>

        <form className="bg-gray-100 p-6 rounded shadow space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded border"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded border"
            rows="5"
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}