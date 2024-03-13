import Nav from "./components/Nav";
import { Hero, About, Projects, Contact, Footer } from "./sections/index";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <About />
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
