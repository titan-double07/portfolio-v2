import React from 'react';
import { Ysabeau } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./redux/provider";
import NavBar from "./components/NavBar";
import SocialBar from "./components/SocialBar";
import LgNavBar from "./components/LgNavBar";
import Image from "next/image";
import Profile from "./components/Profile";
const ysabeau = Ysabeau({ subsets: ["latin"] });

export const metadata = {
  title: "Developer Portfolio",
  description: "Get a glimpse of my skills as a web developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${ysabeau.className}  bg-dark h-screen text-light relative  `}>
        <div className=" layout-bg-img absolute inset-0 -z-10">
          <Image
            src="/images/background.webp"
            alt="background image"
            fill
            priority
            className=" object-cover object-center hidden lg:block"
          />
        </div>

        <ReduxProvider>
          <div className="lg:flex  lg:flex-row-reverse lg:justify-center lg:items-center lg:h-screen lg:gap-12  ">
            <div className="hidden lg:block  ">
              <LgNavBar />
            </div>

            <div className="parent-layout-container lg:w-4/5 xl:w-5/6  xl:bg-secondary xl:rounded-[40px] lg:flex lg:justify-center lg:items-center lg:h-full max-w-screen-xl xl:h-[90%] lg:max-h-[700px] xl:glow">
              <div className="hidden xl:block xl:w-2/6 xl:h-full  ">
                <Profile />
              </div>

              <div className="layout-container xl:w-full lg:bg-dark lg:rounded-3xl xl:rounded-none xl:rounded-r-[40px]  xl:h-full  lg:h-[90%] overflow-auto lg:glow xl:no-glow lg:max-h-[700px]  ">
                <div className="xl:hidden">
                  <SocialBar />
                </div>
                <main className="overflow-auto mb-20 lg:mb-10 xl:mb-0 xl:h-full ">
                  {children}
                </main>
              </div>
            </div>

            <div className="lg:hidden">
              <NavBar />
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
