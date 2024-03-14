import Nav from "./components/Nav";
import { Hero, About, Projects, Contact, Footer } from "./sections/index";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="padding-b">
        <Hero />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding">
        <Projects />
      </section>
      <section className="padding">
        <Contact />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
