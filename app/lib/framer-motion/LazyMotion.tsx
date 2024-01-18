"use client";

import { LazyMotion, domMax } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
}
