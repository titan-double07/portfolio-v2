"use client";
import { usePathname } from "next/navigation";
import { links } from "../data";
import Link from "next/link";

export default function LgNavBar() {
  const pathname = usePathname();

  return (
    <div className="lg-nav-bar    ">
      <div className="links-container flex flex-col items-center justify-center gap-5 lg:bg-dark lg:rounded-4xl lg:pt-7 lg:pb-3 lg:px-2 lg:rounded-t-full lg:rounded-b-full glow ">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            //layoutId?
            <Link
              href={url}
              key={id}
              className={` flex flex-col items-center justify-center gap-2 lg:gap-0 `}>
              <i
                className={`text-3xl  rounded-full  peer ${
                  pathname === url
                    ? "text-dark bg-tetiary p-3 hover:bg-light hover:text-dark "
                    : "text-light  hover:text-tetiary "
                }  `}>
                {icon}
              </i>
              <p
                className={` ${
                  pathname === url
                    ? "opacity-100 translate-y-0 text-tetiary peer-hover:text-white "
                    : "opacity-0 peer-hover:text-tetiary "
                } opacity-0 pointer-events-none peer-hover:opacity-100 -translate-y-6 peer-hover:translate-y-0 transition-all duration-300 ease-in-out lg:text-base`}>
                {text}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
