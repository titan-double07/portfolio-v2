"use client";
import { usePathname } from "next/navigation";
import { links } from "../data";
import Link from "next/link";
import {
  MotionDiv,
  m,
  useAnimate,
  stagger,
} from "../lib/framer-motion/motionComponents";
import { Variants } from "framer-motion";
import { useEffect } from "react";

export default function LgNavBar() {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (scope.current) {
      animate(
        ".link",
        { opacity: [0, 1], scale: [0, 1] },
        {
          delay: stagger(0.2, { startDelay: 3.5,  }),
          ease: "easeInOut",
        }
      );
    }
  }, [scope, animate]);

  const linksContainerVariants: Variants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: 3,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
  };

  const MotionLink = m(Link);
  return (
    <div ref={scope} className="lg-nav-bar">
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={linksContainerVariants}
        className="links-container flex flex-col bg-dark items-center justify-center gap-5  lg:rounded-4xl lg:pt-7 lg:pb-3 lg:px-2 lg:rounded-t-full lg:rounded-b-full glow h-fit">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <MotionLink
              layout
              href={url}
              key={id}
              className={`link group flex flex-col items-center justify-center gap-2 lg:gap-0 relative `}>
              <m.i
                layout
                className={`text-3xl rounded-full active:scale-90 relative z-10 
                 ${
                   pathname === url
                     ? "text-dark p-3 "
                     : "text-light  group-hover:text-tetiary  "
                 }
                `}>
                {icon}
                {pathname === url && (
                  <m.span
                  layoutId="pathname"
                    className="bg-secondary group-hover:bg-tetiary rounded-full absolute inset-0 -z-10 "
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}></m.span>
                )}
              </m.i>
              <p
                className={` ${
                  pathname === url
                    ? "opacity-100 translate-y-0 text-secondary group-hover:text-tetiary "
                    : "opacity-0 group-hover:text-tetiary "
                } opacity-0 pointer-events-none group-hover:opacity-100 -translate-y-6 group-hover:translate-y-0 transition-all duration-300 ease-in-out lg:text-base`}>
                {text}
              </p>
            </MotionLink>
          );
        })}
      </MotionDiv>
    </div>
  );
}
