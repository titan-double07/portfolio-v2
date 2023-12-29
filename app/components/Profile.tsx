import Image from "next/image";
import SocialBar from "./SocialBar";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="profile flex flex-col gap-5 justify-center items-center h-full text-dark font-semibold ">
      <Image
        src={"/images/profile.jpg"}
        alt="profile-pic"
        width={200}
        height={200}
        className="rounded-full w-3/5 border-2 border-dark"
      />
      <div className="profile-text flex flex-col items-center gap-5 ">
        <div className="text-center capitalize">
          <h3 className="name">Chisom Okereke</h3>
          <h3 className="title">web developer</h3>
        </div>
        <div className=" ">
          <SocialBar />
        </div>
      </div>
      
      <Link
        href="https://drive.google.com/file/d/1cXMznTFdK8RXDO1FPuRWD67zv0EhPOUf/view?usp=sharing"
        className="  px-7 py-3 flex items-center font-bold rounded-lg uppercase  bg-dark  text-secondary hover:border-2 hover-border-light hover:text-light hover:bg-dark active:scale-90 active:border-tetiary/50  ">
        Download CV
      </Link>
    </div>
  );
}
