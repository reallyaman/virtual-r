import { features } from "../constants";
export const FeatureSection = () => {
    return (
      <section className="flex flex-col mt-24 min-h-[800px] border-b  border-neutral-800">
        <div className=" text-center">
          <span className=" bg-neutral-800 text-sm text-orange-500 rounded-full  h-6 font-medium px-2 py-1">
            FEATURES
          </span>
          <h1 class="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Easily build
            <span class="bg-gradient-to-r from-orange-500 to-red-800  text-transparent bg-clip-text">
              {" "}
              your code
            </span>
          </h1>
        </div>
        <div className=" flex flex-wrap mt-10 lg:mt-20 ">
          {features.map((features, index) => (
            <div key={index} className=" w-full md:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className=" flex mx-6 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {features.icon}
                </div>
                <div>
                  <h5 class="mt-1 mb-6 text-xl">{features.text}</h5>
                  <p className=" text-md p-2 mb-10 lg:mb-20 text-neutral-500">{features.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}