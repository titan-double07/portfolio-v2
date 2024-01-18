"use client";
import { aboutPageData } from "@/app/data";
import { setCurrentTab } from "@/app/redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Link from "next/link";
import { m, slideInVariant } from "@lib/framer-motion/motionComponents";
import React, { useEffect, useState,useLayoutEffect } from "react";

export default function Tabs() {
  const tabs = Object.keys(aboutPageData);
  const dispatch = useAppDispatch();
  const { currentTab } = useAppSelector((state) => state.appReducer);
  const [isMounted, setIsMounted] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useLayoutEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      setIsMounted(true);
    }

  }, [isInitialLoad]);
  useLayoutEffect(() => {
  console.log(`isMounted: ${isMounted} and isInitialLoad: ${isInitialLoad}`);
  }, [isInitialLoad,isMounted]);
  const onComplete=()=>{
    console.log("animation complete")
    setIsMounted(true)
  }
  return (
    <nav className=" ">
      <m.ul
        variants={ slideInVariant(0.5) }
        initial={"hidden"}
        animate={"visible"}
        onAnimationComplete={onComplete}
        className="flex items-center justify-center capitalize divide-x divide-light/50  ">
        {tabs.map((tab, index) => (
          <li key={index}>
            <Link
              onClick={() => dispatch(setCurrentTab(tab))}
              href={`/about#${tab}`}
              className={`text-lg sm:text-2xl hover:text-tetiary px-2 link ${
                currentTab === tab &&
                "underline underline-offset-4 decoration-2 decoration-tetiary text-tetiary "
              }`}
              scroll={false}>
              {tab}
            </Link>
          </li>
        ))}
      </m.ul>
    </nav>
  );
}
