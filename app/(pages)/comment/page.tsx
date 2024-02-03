import React from "react";
import CommentForm from "./components/CommentForm";
import Comments from "./components/Comments";
import { getComments } from "./commentActions";
import {
  MotionDiv,
  itemVariant,
} from "@/app/lib/framer-motion/motionComponents";

export default async function Contact() {
  const comments = await getComments();
  // console.log(comments);
  return (
    <MotionDiv
      variants={itemVariant}
      initial="hidden"
      animate="show"
      className="container py-6 sm:py-10 flex flex-col gap-8  ">
      <section className="  contact-section  flex flex-col items-center justify-center gap-5 text-center">
     
        <p className="mb-2"> {`You're also free to leave a comment as well`}</p>
        <CommentForm />
        <br />
      </section>
      <section className="comment-section  ">
        {comments?.success ? (
          <Comments comments={comments} />
        ) : (
          <p>No comments yet..........</p>
        )}
      </section>
    </MotionDiv>
  );
}
export const revalidate = 0;