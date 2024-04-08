import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="gg:flex gg:justify-between gg:items-center     ">
      <div className="gg:text-left text-center max-gg:w-full  xl:mb-[7rem] ">
        <h2 className="lg:bg-white font-poppins text-[24px] md:text-[42px] md:mb-3   font-bold mb-1  ">
          Leading Enterprise <br className="max-gg:hidden gg:visible" />
          Ecommerce <br className="max-md:hidden gg:visible xl:hidden" />
          Platform in India
        </h2>
        <h3 className="text-[22px] font-bold mt-[15px] flex max-lg:justify-center gap-2  ">
          Build whitelabelled{" "}
          <span className="text-limegreen max-md:hidden">
            {" "}
            <Typewriter
              className="text-limegreen"
              options={{
                strings: [
                  "B2C Marketplaces",
                  "B2B2C Marketplaces",
                  "Hyperlocal Marketplaces",
                  "Multi Country Marketplaces",
                  "Multi brand Marketplaces",
                  "Vertical Marketplaces",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <p className="text-lg  md:[20px] mt-6 mb-6 max-sm:text-base  ">
          Designed for diverse B2B and B2C business business models
        </p>
        <button className="bg-limegreen rounded-full hover:bg-white hover:text-limegreen text-white font-bold py-[9px] mt-2 px-11 text-[16px]">
          SCHEDULE A DEMO
        </button>
      </div>

      <div className="w-full md:w-[382px] max-gg:hidden">
        <img src="ecommerce-banner.png" className="w-full h-auto" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
