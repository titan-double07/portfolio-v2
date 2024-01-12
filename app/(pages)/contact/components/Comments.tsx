import React from "react";
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
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      {comments.map(({ id, name, email, comment,created_at }, index) => {
        return (
          <div
            key={id}
            className="border border-light/70 rounded-lg w-[min(100%,38rem)]  flex flex-col gap-1  text-start  px-5 py-2 ">
            <div
              className="
            ">
              <div className="flex items-center justify-between">
                <p className="name font-semibold ">{name}</p>
                <p className="time-difference">{created_at }</p>

              </div>
              <p className="email opacity-50 text-sm -mt-1">{email}</p>
            </div>
<hr className="border w-4/5 my-2 border-light/10 rounded-2xl" />
            <p className="comment opacity-70">{comment}</p>
          </div>
        );
      })}
    </div>
  );
}
