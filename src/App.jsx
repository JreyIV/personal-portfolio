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
      <section>
        {/* <Hero /> */}
        <Hero2 />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
