import { aboutPageData } from "@/app/data";
import { setCurrentTab } from "@/app/redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Link from "next/link";

export default function Tabs() {
    const tabs = Object.keys(aboutPageData);
    const dispatch = useAppDispatch()
    const {currentTab} = useAppSelector(state => state.appReducer)
    return (
      <nav className=" ">
        <ul className="flex items-center justify-center capitalize divide-x divide-light/50  ">
          {tabs.map((tab, index) => (
            <li key={index}>
              <Link
                onClick={() => dispatch(setCurrentTab(tab))}
                href={`/about#${tab}`}
                className={`text-lg sm:text-2xl hover:text-tetiary px-2 ${
                  currentTab === tab && "underline underline-offset-4 decoration-2 decoration-tetiary text-tetiary "
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