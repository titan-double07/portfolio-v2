"use client";

import {
  m,
  AnimatePresence,
  useAnimate,
  stagger,
  Variants,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

// Elements
export const MotionDiv = m.div;
export const MotionH1 = m.h1;
export const MotionA = m.a;
export const MotionP = m.p;
export const MotionUl = m.ul;
export const MotionLi = m.li;
export const MotionSection = m.section;
export const MotionImage = m(Image);
export const MotionLink = m(Link);

// Variants
  export const containerVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  };

  export const itemVariant: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
const slideInVariant = (
  duration: number = 0.8,
  delay: number = 0
): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };
};



// Functions
export { AnimatePresence, m, useAnimate, stagger, slideInVariant };
