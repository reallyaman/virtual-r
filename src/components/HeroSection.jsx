import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export const HeroSection = () => {
    return (
      <div className="flex flex-col items-center mt-6 lg:mt-20 px-8 aos-init aos-animate ">
        <h1 data-aos="fade-up" className="text-4xl sm:text-6xl  lg:text-7xl text-center tracking-wide">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800  text-transparent bg-clip-text">
            {" "}
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your craetivity and bring your VR app ideas to life with our
          initiative development tools.Get started today and turn your
          imagination into impressive reality
        </p>
        <div className="flex justify-center my-10 flex-col md:flex-row lg:flex-row items-center gap-4 md:gap-0 lg:gap-0">
          <a
            className=" bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
            href=""
          >
            Start for free
          </a>
          <a className=" py-3 px-4 mx-3 border rounded-md" href="">
            Documentation
          </a>
        </div>
        <div className=" flex mt-10 justify-center flex-col md:flex-row items-center">
          <video
            className=" rounded-md w-full lg:w-1/2 md:w-1/2
             border border-orange-700 shadow-orange-400 mx-2 my-4"
            src={video1}
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
          <video
            className=" rounded-md w-full lg:w-1/2 md:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
            src={video2}
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div></div>
      </div>
    );
}