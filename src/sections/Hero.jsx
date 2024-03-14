import { HeroImage } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="text-center">
        <h1 className="text-8xl md:text-6xl text-off-white font-okine font-bold mb-8">
          Joseph Reyes
        </h1>
        <div className="inline-block">
          <p className="text-lg md:text-xl font-okine text-off-white animation-typewriter">
            Ideas to reality, one line at a time
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
