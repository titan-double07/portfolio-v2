"use client";
import { usePathname } from "next/navigation";
import { links } from "../data";
import Link from "next/link";
import {
  useAnimate,
  stagger,
  m,
  MotionDiv,
} from "@/app/lib/framer-motion/motionComponents";
import { useEffect } from "react";
export default function NavBar() {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      animate(
        scope.current,
        {
          opacity: [0, 1],
          y: [100, 0],
        },
        { duration: 1, ease: "easeOut", delay: 2 }  
      );
      animate(
        ".link",
        { opacity: [0, 1], y: [50, 0] },
        {
          type: "spring",
          ease: "easeOut",
          delay: stagger(0.3, { startDelay: 2.5 }),
        }
      );
    }
  }, [animate, scope]);

  return (
    <MotionDiv
      ref={scope}
      initial={{ opacity: 0, y: 100 }}
      className="nav-bar fixed  inset-x-0 bottom-0 w-full bg-dark border-t-2 border-secondary glow sm:no-glow sm:w-4/5 sm:mx-auto sm:rounded-full sm:mb-10 sm:shadow-lg sm:shadow-tetiary/50  ">
      <div className="links-container flex  items-center ">
        {links?.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <Link
              href={url}
              key={id}
              className={`${
                pathname === url
                  ? "text-dark   hover:text-dark "
                  : "text-light  hover:text-tetiary"
              } link py-2 group flex flex-col items-center justify-center w-full sm:first:rounded-l-full sm:last:rounded-r-full sm:overflow-hidden relative  z-10`}>
              <m.i className="text-2xl sm:text-3xl relative ">
                {icon}
                </m.i>
              {pathname === url && (
                <m.span
                  layoutId="url"
              
                  className="bg-secondary group-hover:bg-tetiary  absolute inset-0 -z-10 "
                  transition={{ type: "string" }}></m.span>
              )}
              <p className="text-sm sm:text-lg">{text}</p>
            </Link>
          );
        })}
      </div>
    </MotionDiv>
  );
}
