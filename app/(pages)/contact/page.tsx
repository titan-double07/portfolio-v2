import React, { Suspense } from "react";
import { FaEnvelope, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import CommentForm from "./components/CommentForm";
import Comments from "./components/Comments";
import { getComments } from "./commentActions";
import { MotionDiv, containerVariant, itemVariant } from "@/app/lib/framer-motion/motionComponents";


// export const revalidate = 1;
export default async function Contact() {
  const comments = await getComments();

  return (
    <MotionDiv
      variants={itemVariant}
      initial="hidden" 
      animate="show"
      className="container py-6 sm:py-10 flex flex-col gap-8  ">
   
      <section className="  contact-section  flex flex-col items-center justify-center gap-5 text-center">
        <p className="">
          {" "}
          Hey there!, you can reach me through any of the following...
        </p>
        <div className="contact-links flex  justify-between items-center gap-4 ">
          <a
            href="https://wa.me/2347014385856"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center gap-2 hover:text-tetiary hover:bg-dark active:scale-90 active:border-tetiary/50">
            <FaWhatsapp className="text-2xl" />
            <p className="text-base">Whatsapp</p>
          </a>
          <a
            href="https://www.linkedin.com/in/chisom-okereke-39324323a/"
            target="_blank"
            className="flex flex-col justify-center items-center gap-2 hover:text-tetiary hover:bg-dark active:scale-90 active:border-tetiary/50">
            <FaLinkedin className="text-2xl" />
            <p className=" text-base ">linkedIn</p>
          </a>
          <a
            href="mailto:chisomwebdev@outlook.com"
            target="_blank"
            className="flex flex-col justify-center items-center gap-2 hover:text-tetiary hover:bg-dark active:scale-90 active:border-tetiary/50">
            <FaEnvelope className="text-2xl" />
            <p className=" text-base ">email</p>
          </a>
          <a
            href="https://twitter.com/titandev007"
            target="_blank"
            className="flex flex-col justify-center items-center gap-2 hover:text-tetiary hover:bg-dark active:scale-90 active:border-tetiary/50">
            <FaTwitter className="text-2xl" />
            <p className=" text-base ">twitter</p>
          </a>
        </div>
        <p className="mb-2"> {`You're also free to leave a comment as well`}</p>
        <CommentForm />
        <br />
      </section>
      <section className="comment-section  ">
        <Comments comments={comments} />
      </section>
    </MotionDiv>
  );
}
