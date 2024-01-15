"use client";
import { usePathname } from "next/navigation";
import { links } from "../data";
import Link from "next/link";
import { MotionDiv, m } from "../lib/framer-motion/motionComponents";
import { Variants } from "framer-motion";
export default function LgNavBar() {
  const pathname = usePathname();
  const linksContainerVariants: Variants = {
    hidden: {
      opacity: 0,
      height: "0px",
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const linksVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  const MotionLink = m(Link);
  return (
    <div className="lg-nav-bar    ">
      <MotionDiv
        layout
        initial="hidden"
        animate="visible"
        variants={linksContainerVariants}
        className="links-container flex flex-col items-center justify-center gap-5 lg:bg-dark lg:rounded-4xl lg:pt-7 lg:pb-3 lg:px-2 lg:rounded-t-full lg:rounded-b-full glow ">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <MotionLink
              layout
              layoutId="link"
              variants={linksVariants}
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
            </MotionLink>
          );
        })}
      </MotionDiv>
    </div>
  );
}
