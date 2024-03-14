import { HeroImage } from "../assets/images";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="text-center">
        <h1 className="text-8xl md:text-6xl text-off-white font-okine font-bold mb-8">
          Joseph Reyes
        </h1>
        <p className="text-xl md:text-xl font-okine text-off-white">
          Turning ideas to reality, one line at a time
        </p>
      </div>
    </section>
  );
};

export default Hero;
