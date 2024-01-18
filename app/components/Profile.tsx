import Image from "next/image";
import SocialBar from "./SocialBar";
import Link from "next/link";
import { MotionDiv, m } from "../lib/framer-motion/motionComponents";
import { Variants } from "framer-motion";

const parentEnterVariant: Variants = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      type: "spring",
      delay: 2,
      duration: 1,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export default function Profile() {
  return (
    <MotionDiv
      initial={"hidden"}
      animate="visible"
      variants={parentEnterVariant}
      className="profile flex flex-col gap-5 justify-center items-center h-full text-dark font-semibold ">
 
      <Image
        src={"/images/20188206_4200_3_03.jpg"}
        alt="profile-pic"
        width={200}
        height={200}
        className="rounded-full w-3/5 border-2 border-dark "
      />

      <div className="profile-text flex flex-col items-center gap-5 ">
        <div className="text-center capitalize">
          <h3 className="name">Chisom Okereke</h3>
          <h3 className="title">web developer</h3>
        </div>
        <div>
          <SocialBar />
        </div>
      </div>

      <Link
        href="https://drive.google.com/file/d/1cXMznTFdK8RXDO1FPuRWD67zv0EhPOUf/view?usp=sharing"
        className="  px-7 py-3 flex items-center font-bold rounded-lg uppercase  bg-dark  text-secondary hover:border-2 hover-border-light hover:text-light hover:bg-dark active:scale-90 active:border-tetiary/50  ">
        Download CV
      </Link>
    </MotionDiv>
  );
}
