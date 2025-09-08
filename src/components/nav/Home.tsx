const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden group group-hover:text-white"
    >
      {/* Bottom half white */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

      {/* Top half rose with wave border */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-rose-500 transition-all duration-700 ease-in-out group-hover:h-full">
        {/* Wavy top border */}
        <svg
          className="absolute top-0 left-0 w-full h-50"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 
               C150,20 250,100 360,60 
               C480,20 600,100 720,50 
               C840,0 960,80 1080,40 
               C1200,0 1320,60 1440,20 
               L1440,0 L0,0 Z"
            fill="#FFFFFF" /* rose color */
          />
        </svg>
      </div>

      <div className="flex flex-col gap-3 items-center text-black group-hover:text-white transition-colors duration-700">
        <span className="z-10 font-lato font-bold text-xl text-rose-500">
          Hey! I am
        </span>
        <span className="z-10 font-roboto-slab font-bold text-5xl">
          Jayoung Byeun
        </span>
        <span className="z-10 font-lato font-bold text-2xl">
          I am full-stack engineer!
        </span>
      </div>
    </section>
  );
};

export default Home;
