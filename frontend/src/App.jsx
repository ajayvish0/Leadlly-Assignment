import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Product from "./components/Product";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className=" py-3 max-gg:py-5 mb-[4rem] lg:px-[12rem] w-full relative lg:bg-hero-pattern   bg-cover bg-no-repeat   h-[77.4vh] max-md:h-[200px] max-gg:h-[300px]  ">
        <Hero />
      </section>
      <section className=" ">
        <Product />
      </section>
    </main>
  );
}

export default App;
