import React from "react";
import Skills from "./components/Skills";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full flex flex-col items-center xl:justify-center text-center container h-full pt-8 pb-5 sm:pt-10  ">
      <div className="flex flex-col   ">
        <h1 className="font-semibold capitalize">chisom okereke</h1>
        <h4 className="text-tetiary pb-3 font-semibold capitalize">
          web developer
        </h4>
        <p>
          I aim to create visually appealing and responsive websites, I also
          make sure to implement best practices and SEO to make sure your
          website is easily discoverable on search engines.
        </p>
      </div>
      <Skills />
      <Link
        href="https://drive.google.com/file/d/1cXMznTFdK8RXDO1FPuRWD67zv0EhPOUf/view?usp=sharing"
        className=" text-lg px-10 py-4 font-bold rounded-lg  mt-16   uppercase  bg-secondary  text-dark hover:border-4 hover:border-tetiary hover:text-tetiary hover:bg-dark active:scale-90 active:border-tetiary/50 xl:hidden ">
        Download CV
      </Link>
    </div>
  );
}
//https://drive.google.com/file/d/1cXMznTFdK8RXDO1FPuRWD67zv0EhPOUf/view?usp=sharing