"use client";
import { usePathname } from "next/navigation";
import { links } from "../data";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="nav-bar fixed  inset-x-0 bottom-0 w-full bg-dark border-t-2 border-secondary glow sm:no-glow sm:w-4/5 sm:mx-auto sm:rounded-full sm:mb-10 sm:shadow-lg sm:shadow-tetiary/50 z-50 ">
      <div className="links-container flex  items-center ">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <Link
              href={url}
              key={id}
              className={`${
                pathname === url
                  ? "text-dark bg-secondary hover:bg-tetiary hover:text-dark "
                  : "text-light  hover:text-tetiary"
              } py-2  flex flex-col items-center justify-center w-full sm:first:rounded-l-full sm:last:rounded-r-full`}>
              <i className="text-2xl sm:text-3xl ">{icon}</i>
              <p className="text-sm sm:text-lg">{text}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
