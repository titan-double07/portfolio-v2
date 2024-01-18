"use client";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  stagger,
  useAnimate,

  m,
} from "framer-motion";
import Image from "next/image";
import chef from "../../public/images/serving-chef.svg";
import { tools } from "../data";
import { usePathname, useRouter } from "next/navigation";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAnimating, setIsAnimating] = useState(true);
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const router = useRouter()

  const includedText = [
    "html",
    "css",
    "javascript",
    "nodejs",
    "react",
    "nextjs",
    "typescript",
    "mongodb",
    "tailwind",
    "framer motion",
  ];
  const icons = tools.filter(({ text }) =>
    includedText.includes(text.toLowerCase())
  );

  useEffect(() => {
    const animation = async () => {
      //animates the scale/size of the svg
      animate(
        ".svg",
        { scale: [1.5, 1] },
        {
          type: "spring",
          delay: 3,
          ease: "easeInOut",
        }
      );
      //animates the svg paths, draws the path
      animate(
        ".path",
        { pathLength: [0, 1], opacity: [0, 1] },

        {
          delay: stagger(0.5, { ease: "easeInOut" }),
          duration: 3,
          ease: "easeInOut",
        }
      );
      //animates the image
      animate(
        ".image",
        { opacity: [0, 1], scale: [0, 1] },
        {
          type: "spring",
          // stiffness: 60,
          // damping: 5,
          // mass: 0.5,
          delay: 3.5,
          ease: "easeInOut",
        }
      );
      //animates the icons, giving them a stagger effect and they fall down
      await animate(
        ".icon",
        { opacity: [0, 1], y: [-20, 0] },
        {
          type: "spring",
          damping: 7,
          delay: stagger(0.2, {
            from: "last",
            startDelay: 4,
          }),
          ease: "easeInOut",
        }
      );
      //due to the 'await' keyword, the function will wait for the animation to complete before continuing, hence you can do something after the anmation is complete
      console.log("animation completed");
      setIsAnimating(false);
    };
    if (scope.current)
      animation();
  
  }, [animate, scope]);

  return (
    <div className=" bg-dark absolute inset-0 h-screen  ">
      <AnimatePresence mode="wait">
        {isAnimating? (
          
            <m.div
              ref={scope}
              key={"loading"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
              }}
              className="flex flex-col gap-5 mx-auto items-center justify-center h-full w-fit   relative">
              <div className="relative">
                <div className="icons-container absolute inset-0 -top-2  left-3  h-fit w-fit gap-1 ">
                  {icons.map(({ icon, text }, index) => {
                    // Calculate the number of rows in the pyramid
                    const numRows = Math.ceil(
                      (Math.sqrt(8 * icons.length + 1) - 1) / 2
                    );

                    // Calculate the current row index for the icon
                    const row = Math.floor((Math.sqrt(8 * index + 1) - 1) / 2);

                    // Calculate the current column index for the icon
                    const col = index - (row * (row + 1)) / 2;

                    // Define the CSS styles for each icon to position it in the grid
                    const pyramidStyle = {
                      gridColumn: `${col + 1} / span ${numRows - row}`, // Set the starting column and the number of columns the icon should span
                      gridRow: `${row + 1} / span 1`, // Set the starting row and that the icon should span only one row
                    };

                    return (
                      <div
                        key={text}
                        className={`${text.toLowerCase()} icon text-2xl sm:text-3xl`}
                        style={pyramidStyle}>
                        {icon}
                      </div>
                    );
                  })}
                </div>

                <Image
                  src={chef}
                  alt="chef holding a tray"
                  priority
                  className="w-[230px] sm:w-[280px] h-auto image  "
                />
              </div>

              <svg
                viewBox="0 0 152 41"
                fill="none"
                className=" w-[230px] sm:w-[280px] svg "
                xmlns="http://www.w3.org/2000/svg">
                <path
                  id="let&#39;s"
                  className="path"
                  d="M1.99998 17C8.49998 6.99997 7.49883 0.500092 4.4997 1.00009C0.527149 1.66238 -0.999792 32.9997 8.50015 20.5C9.70003 18.9 9.16667 18.8333 9 18.5M9.5 22C13.1 19.6 13.5 14.5 10 16.5C6.5 18.5 9 29 14.5 21.5C21.7 9.5 20.5305 -0.50814 18 4.5C15.4695 9.50814 16 23 20 23C24 23 25 18.5 25 18.5M10 7.5C24.4 7.9 28.3333 7.66667 28.5 7.5M33 1.5C34.5 3.49991 32 5.5 31 5.5M35.5 18.5C38 15 37.3463 13.3991 36.3618 13.5828C35.3774 13.7664 40.9981 20.7958 38.8618 22.5C36.7256 24.2042 34.743 22.112 35 21.5C35.257 20.888 38.8618 27 43.5 20C44.3 18.4 44.1667 17.6667 44 17.5"
                  stroke="#EBFFF9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="get"
                  className="path"
                  d="M56.9998 16.9996C49.9996 13.9999 47.4986 22.9995 52.4988 22.9996C55 22.9996 55.286 18.3889 54.9527 18.0555C58.4527 39.5555 52.4988 42.9998 50.9527 38.5555C49.4065 34.1113 61.5 23.0557 59.5 18.0555M59.2103 21.7362C59.2103 21.7362 66.5 16.4995 63 15.9998C59.5 15.5 59.6733 20 59.6733 20C61.5 25.5001 64.6453 24.1905 67.5 19.0001C73 8.99998 71.5 3.50018 69.5 4.50008C67.5 5.49998 65 26.5 71.5 22.9996C73.846 21.7362 73.8332 17.6665 73 16.9996M61 7.5C75.4 7.9 79.3333 7.66667 79.5 7.5"
                  stroke="#EBFFF9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="cooking"
                  className="path"
                  d="M85.4998 18.5005C86.9998 15.0005 84.0004 13.4996 82.0004 17.5C79.5946 26.3211 89.5006 23.5005 90.5 18.5005M92 16.5C87.5 26 96.5 23.5 96.5 19C97.213 15.7915 95 14.5 94 16.5C93 18.5001 97.5 24.5 102 16.5C97.5558 17.6767 101 27.5 106 20.5C107.6 16.5 105.667 15.5 104.5 15.5C103.333 15.5 102.383 22.1397 107.883 20.6397C108.88 20.3677 109.553 19.2127 109.987 17.5M110.5 1.5L109.987 23C111.912 16.3752 115.5 14.5 116.5 16.5C117.5 18.5 115.019 19.4276 113 20.6397C110.981 21.8517 116.5 27 121.5 18.5005M121.5 15.5C120 29.5 127 20.0004 128 18.5005M127 18.5005C133 9.5 127.5 23 130 23C139.667 6.55149 133.5 23.5 136.906 23C138.133 22.8199 139.205 22.2182 140 21.37M146.5 16.5C144.5 13.5 138 20 141.5 22C145 24 145.833 19.5004 145.5 18.5005C145.683 21.3085 145.453 16.7807 145.977 26.0791M150.5 16.5C150.902 16.9584 150.5 21.5 145.977 26.0791M145.977 26.0791C141.5 31 138.97 38.6094 141.5 39.5C145.263 40.8245 146.5 35.3774 145.977 26.0791ZM120.5 10.5C120.5 9.5 122.5 9 122.5 10.5C122.5 12 120.5 11.5 120.5 10.5Z"
                  stroke="#EBFFF9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </m.div>
     
        ) : (
          <React.Fragment key={"children"}>{children}</React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
}
{
  /* <div className={`svg flex items-center gap-2 ${ysabeau_SC.className}`}>
            <p className=" path text-3xl sm:text-5xl tracking-wider">{`Lets's `}</p>
            <p className=" path text-3xl sm:text-5xl tracking-wider">{`Get`}</p>
            <p className=" path text-3xl sm:text-5xl tracking-wider">{`Cooking`}</p>
          </div> */
}
