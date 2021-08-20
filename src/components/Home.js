import React from "react";
import image from "../backgroundimg.jpeg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Alaska"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:64 px-8">
        <h1 className="text-6xl text-blue-500 font-bold styleMe leading-none lg:leading-snug home-name">
          Hello, I'm Razi سلام انا رازي
        </h1>
      </section>
    </main>
  );
}
