const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-row bg-white">
      {/* Left half */}
      <div className="w-1/2 flex items-center justify-center border-r border-gray-300">
        <img
          src="./src/assets/IMG_central.JPG"
          alt="Jay B"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right half */}
      <div className="w-1/2 flex flex-col items-center justify-center gap-4">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="max-w-xl text-center text-gray-700">
          I am a Full-Stack Developer with over two years of experience
          enhancing web application performance, frontend architecture, and
          CI/CD pipelines.
        </p>
      </div>
    </section>
  );
};

export default About;
