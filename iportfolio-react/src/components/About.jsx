export default function About() {
  return (
    <section id="about" className="py-16 px-10 bg-white">
      <h2 className="text-4xl font-bold text-gray-800">About</h2>
      <div className="w-20 h-1 bg-blue-600 mt-2 mb-6"></div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about"
          className="rounded-lg shadow-lg"
        />

        <div>
          <h3 className="text-2xl font-bold text-gray-700">
            UI/UX Designer & Web Developer
          </h3>
          <p className="mt-4 text-gray-600">
            This is a portfolio .
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700">
            <p>
              <b>Birthday:</b> 29 June 2005
            </p>
            <p>
              <b>Age:</b> 20
            </p>
            <p>
              <b>Website:</b> www.forever.com
            </p>
            <p>
              <b>Email:</b> upmanjiprakhar@gmail.com
            </p>
            <p>
              <b>Phone:</b> +91 8827353112
            </p>
            <p>
              <b>City:</b> Jabalpur, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}