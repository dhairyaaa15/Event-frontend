import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";
import orgphoto from "../image/org3.jpeg";

export function BackgroundBeams() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col md:flex-row justify-start items-center">
        {/* Text and Button Section */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-black dark:text-white font-sans tracking-tight">
            Host<br />
            Connect<br />
            Meetup<br />
            <div className="mx-auto md:mx-0 inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Make your move to join or host an<br /> event with the World.</span>
              </div>
              <div className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>Make your move to join or host an<br /> event with the World.</span>
              </div>
            </div>
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-4 py-2 text-sm rounded-full tracking-wide uppercase font-semibold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                Get Started
              </button>
            </div>
          </h2>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src={orgphoto}
            alt="Organizational Event"
            className="w-full h-auto max-w-md mx-auto md:mx-0"
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
