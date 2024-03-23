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
      <section className="overflow-hidden">
        {/* <Hero /> */}
        <Hero2 />
      </section>
      <section className="overflow-hidden">
        <About />
      </section>
      <section className="overflow-hidden">
        <Skills />
      </section>
      <section className="overflow-hidden">
        <Projects />
      </section>
      <section className="overflow-hidden">
        <Contact />
      </section>
      <section className="overflow-hidden">
        <Footer />
      </section>
    </main>
  );
}
