export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start px-10 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
      }}
    >
      <h1 className="text-5xl font-bold ">Prakhar Upman</h1>
      <p className="text-2xl mt-3">
        I am <span className="text-blue-400 font-semibold">Developer</span>
      </p>

      <a
        href="#about"
        className="mt-8 bg-blue-600 px-6 py-3 rounded text-lg hover:bg-blue-700"
      >
        About Me
      </a>
    </section>
  );
}