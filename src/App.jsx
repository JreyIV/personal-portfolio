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
      <section className="">
        {/* <Hero /> */}
        <Hero2 />
      </section>
      <section className="">
        <About />
      </section>
      <section className="">
        <Skills />
      </section>
      <section className="">
        <Projects />
      </section>
      <section className="">
        <Contact />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
