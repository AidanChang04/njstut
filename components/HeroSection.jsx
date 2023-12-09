import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroSection = () => {
  return (
    <main className="py-16 mt-16 md-flex md:shrink-0 ">
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-8 place-self-center justify-self-start"
        >
          <h1 className="font-extrabold" style={{ lineHeight: "1.5" }}>
            {/* span text separator -- for design*/}
            <span className="text-white text-8xl">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                Aidan!
              </span>
            </span>
            <div className="text-white text-6xl">I am...</div>
            <span className="text-5xl">
              <TypeWritter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString`<span style="color:#c493ff">Hardworking 💪</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#fefedf">Enthusiastic 🙋</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#00c9a7">Creative 🧠</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              ></TypeWritter>
            </span>
          </h1>
          <p className="text-gray-300 pt-8 text-base sm:text-lg mb-6 lg:text-xl">
            Let&apos;s scroll down to see more about me!
          </p>
          <Link
            href="#projects"
            className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-indigo-600 hover:bg-violet-600"
          >
            <span className="text-xl text-white">My Projects</span>
          </Link>

          <Link
            href=""
            className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2  border-pink-500 hover:bg-pink-400"
          >
            <span className="text-xl text-white">My Resume</span>
          </Link>
        </motion.div>
        <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[400px] h-[400px] relative z-0">
              <img
                src="/ProfilePicture.png"
                alt="hero section"
                className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={450}
                height={450}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
