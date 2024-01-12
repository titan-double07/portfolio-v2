"use client";
import React, { useState } from "react";
import { FaDeleteLeft, FaXmark } from "react-icons/fa6";
import { deleteComment } from "../commentActions";
import CommentsModal from "./CommentsModal";
type Comment = {
  id: string;
  name: string;
  email: string;
  comment: string;
  created_at: string;
};
type CommentsProp = {
  comments: Comment[];
};
export default function Comments({ comments }: CommentsProp) {

    const [selectedCommentId, setSelectedCommentId] = useState<string|null>(null);

    const openModal = (commentId: string) => {
      setSelectedCommentId(commentId);
  };
   const closeModal = () => {
     setSelectedCommentId(null);
   };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      {comments.map(({ id, name, email, comment, created_at }, index) => {
        return (
          <div
            key={id}
            id={id}
            className="border border-light/70 rounded-lg w-[min(100%,38rem)]  flex flex-col gap-1  text-start  px-5 py-2 relative  ">
            {selectedCommentId === id && (
              <CommentsModal closeModal={closeModal} id={id} />
            )}
            <div className=" flex flex-col w-full justify-center items-stretch">
              <div className="flex items-center justify-between w-full">
                <p className="name font-semibold opacity-80 ">{name}</p>
                <button
                  className=" text-red-500/70 text-xl hover:text-2xl h-6 w-fit hover:text-red-500 active:scale-90"
                  onClick={() => openModal(id)}>
                  <FaDeleteLeft />
                </button>
              </div>
              <div className="flex items-center justify-between w-full ">
                <p className="email opacity-75 text-sm ">{email}</p>
                <p className="time-difference text-sm opacity-75">
                  {created_at}
                </p>
              </div>
            </div>
            <hr className="border w-4/5 my-2 border-light/10 rounded-2xl" />
            <p className="comment opacity-80 w-full max-h-60 overflow-auto break-words whitespace-pre-line text-base">
              {comment}
            </p>
          </div>
        );
      })}
    </div>
  );
}
