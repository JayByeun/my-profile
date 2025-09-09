import { Button } from "@/components/ui/button";
import jayImage from "@/assets/IMG_central.JPG";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-row bg-white">
      {/* Left half */}
      <div className="w-1/2 flex items-start justify-start">
        <img
          src={jayImage}
          alt="Jay B"
          className="h-screen w-full object-cover"
        />
      </div>

      {/* Right half */}
      <div className="w-1/2 flex flex-col justify-center gap-6 p-10">
        <h2 className="text-5xl font-bold">About Me</h2>
        <p className="w-full font-lato text-left text-m font-light text-gray-500">
          I am a Full-Stack Developer with over two years of experience
          enhancing web application performance, frontend architecture, and
          CI/CD pipelines.
        </p>
        <p className="w-full font-lato text-left text-m font-light text-gray-500">
          I’m passionate about basketball and football and used to play as a
          member of a women’s sports club. I’m also a bit of a space enthusiast—
          in my free time, I enjoy watching space documentaries and dreaming of
          one day being part of a spacecraft team. Beyond that, I love working
          on and watching car repairs. One of my bucket-list goals is to restore
          a classic car entirely on my own. I’m a big fan of The Goonies and
          Back to the Future, and I never get tired of rewatching my favorite
          movies and series.
        </p>
        <div className="flex flex-col gap-3 flex-start w-full">
          <div className="flex gap-3">
            <span className="font-bold w-20">Name: </span>
            <span className="text-m font-light font-lato">Jayoung Byeun</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold w-20">Address: </span>
            <span className="text-m font-light font-lato">Houston | Texas</span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold w-20">Email: </span>
            <span className="text-m font-light font-lato">
              jayoung.byeun@gmail.com
            </span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold w-20">Phone: </span>
            <span className="text-m font-light font-lato">+1 346 562 2551</span>
          </div>
        </div>
        <a href="./src/files/Jay_CV.pdf" download>
          <Button className="rounded-xl w-35 bg-rose-300 hover:bg-rose-600 cursor-pointer">
            DOWNLOAD CV
          </Button>
        </a>
      </div>
    </section>
  );
};

export default About;
