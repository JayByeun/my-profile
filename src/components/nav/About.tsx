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
      <div className="w-1/2 flex flex-col justify-center gap-15 p-10">
        <h2 className="text-5xl font-bold">About Me</h2>
        <p className="w-full text-left text-m font-light text-gray-500">
          I am a Full-Stack Developer with over two years of experience
          enhancing web application performance, frontend architecture, and
          CI/CD pipelines.
        </p>
        <p className="w-full text-left text-m font-light text-gray-500">
          I’m passionate about basketball and football and used to play as a
          member of a women’s sports club. I’m also a bit of a space enthusiast—
          in my free time, I enjoy watching space documentaries and dreaming of
          one day being part of a spacecraft team. Beyond that, I love working
          on and watching car repairs. One of my bucket-list goals is to restore
          a classic car entirely on my own. I’m a big fan of The Goonies and
          Back to the Future, and I never get tired of rewatching my favorite
          movies and series.
        </p>
        <div className="flex flex-col gap-5 flex-start w-full">
          <div className="flex gap-3">
            <span className="font-bold w-20">Name: </span>
            <span className="text-m font-light">Jayoung Byeun</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold w-20">Address: </span>
            <span className="text-m font-light">Houston | Texas</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold w-20">Email: </span>
            <span className="text-m font-light">jayoung.byeun@gmail.com</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold w-20">Phone: </span>
            <span className="text-m font-light">+1 346 562 2551</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
