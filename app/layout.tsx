import React from "react";
import { Ysabeau } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";
import NavBar from "./components/NavBar";
import SocialBar from "./components/SocialBar";
import LgNavBar from "./components/LgNavBar";
import Image from "next/image";
import Profile from "./components/Profile";
import SplashScreen from "./components/SplashScreen";
import LazyMotion from "./lib/framer-motion/LazyMotion";
import { MotionDiv, m } from "./lib/framer-motion/motionComponents";
const ysabeau = Ysabeau({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Chisom OKereke's Developer Portfolio",
    // this way we can interpolate the default title with a specificpage title
    template: "%s | Chisom Okereke",
  },
  description: "Get a glimpse of my skills as a web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="chef.png" sizes="any" />
      </head>
      <body
        suppressHydrationWarning
        className={`${ysabeau.className} bg-dark   h-screen text-light relative leading-relaxed tracking-wide  `}>
        {/* <div className="blob rounded-full   absolute bottom-0 -right-5  w-5 h-5 z-10">
          
        </div> */}
        <LazyMotion>
          <SplashScreen>
            <ReduxProvider>
                {/* <div className=" layout-bg-img absolute inset-0 -z-10">
                  <Image
                    src="/images/background.webp"
                    alt="background image"
                    fill
                    priority
                    className=" object-cover object-center hidden lg:block"
                  />
                </div> */}
              <div className="lg:flex  lg:flex-row-reverse lg:justify-center lg:items-center lg:h-screen lg:gap-12 z-10 ">
                <div className="hidden lg:block  ">
                  <LgNavBar />
                </div>

                <MotionDiv
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="parent-layout-container lg:w-4/5 xl:w-5/6  xl:bg-secondary xl:rounded-[40px] lg:flex lg:justify-center lg:items-center lg:h-full max-w-screen-xl xl:h-[90%] lg:max-h-[700px] xl:glow">
                  <div className="hidden xl:block xl:w-2/6   ">
                    <Profile />
                  </div>

                  <div className="layout-container w-full lg:bg-dark lg:rounded-3xl xl:rounded-none xl:rounded-r-[40px]  xl:h-full  lg:h-[90%] overflow-auto lg:glow xl:no-glow lg:max-h-[700px]  ">
                    <div className="xl:hidden">
                      <SocialBar />
                    </div>
                    <main className="  mb-20 lg:mb-10 xl:mb-0 xl:h-full ">
                      {children}
                    </main>
                  </div>
                </MotionDiv>

                <div className="lg:hidden">
                  <NavBar />
                </div>
              </div>
            </ReduxProvider>
          </SplashScreen>
        </LazyMotion>
      </body>
    </html>
  );
}
