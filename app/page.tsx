import About from "@/components/About";
import DemoCarousel from "@/components/Carousel";
import Explore from "@/components/Explore";
import GoldRate from "@/components/GoldRate";
import ShopByCategory from "@/components/ShopByCategory";
import VisitShowroom from "@/components/VisitShowroom";


export default function Home() {
  return (
    <>
      <div className=" mx-auto ">
       
       <div className="px-[1%]">
         <DemoCarousel  />
       </div>

        {/* <div className=""> */}
          <GoldRate  id="Rate" />
        {/* </div>    */}
        <Explore/>
        <ShopByCategory id="Catalog" />
        <About id="About" /> 
        <VisitShowroom id="Contact" />
      </div>
    </>
  );
}
