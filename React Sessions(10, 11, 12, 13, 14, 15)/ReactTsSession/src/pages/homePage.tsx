import AboutHome from "../components/home/about";
import HeroHome from "../components/home/hero";
import ProductsHome from "../components/home/products";

export default function HomePage () {
    return (
    <section className=" mx-10">
      <HeroHome className="bg-purple-700 text-white" pClassName="text-red-500" />
      <AboutHome ></AboutHome>
      <ProductsHome />
      

      {/* <CounterHome text={"Counter Counter"} />    */}
    </section>
    )
}