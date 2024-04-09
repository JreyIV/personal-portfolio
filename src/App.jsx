import Nav from "./components/Nav";
import {
  //   Hero,
  Hero2,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from "./sections/index";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="overflow-hidden max-container">
        {/* <Hero /> */}
        <Hero2 />
      </section>
      <section className="overflow-hidden max-container">
        <About />
      </section>
      <section className="overflow-hidden max-container">
        <Skills />
      </section>
      <section className="overflow-hidden max-container">
        <Projects />
      </section>
      <section className="overflow-hidden max-container">
        <Contact />
      </section>
      <section className="overflow-hidden max-container">
        <Footer />
      </section>
    </main>
  );
}
