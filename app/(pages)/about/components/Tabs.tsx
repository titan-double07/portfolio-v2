'use client'
import { aboutPageData } from "@/app/data";
import { setCurrentTab } from "@/app/redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Link from "next/link";

export default function Tabs() {
    const tabs = Object.keys(aboutPageData);
    const dispatch = useAppDispatch()
    const {currentTab} = useAppSelector(state => state.appReducer)
    return (
      <nav className="sticky top-0 left-0 ">
        <ul className="flex gap-4 items-center justify-center capitalize ">
          {tabs.map((tab, index) => (
            <li key={index}>
              <Link
                onClick={() => dispatch(setCurrentTab(tab))}
                href={`/about#${tab}`}
                className={` hover:text-tetiary ${
                  currentTab === tab && "border-b-2 border-tetiary"
                }`}
                scroll={false}>
                {tab}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
}