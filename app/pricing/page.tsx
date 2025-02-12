import Hero from "@/components/HeroP";
import Pricing from "@/components/pricing";
import PricingCompare from "@/components/pricing-compare";

const pricingPage = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5"> 
      <div className="max-w-7xl w-full">
        <Hero />
        <Pricing />
        <PricingCompare />
      </div>
    </div>
  )
};

export default pricingPage;