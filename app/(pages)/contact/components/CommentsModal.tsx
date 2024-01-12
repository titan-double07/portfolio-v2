import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { deleteComment } from "../commentActions";

export default function CommentsModal({
  closeModal,
  id,
}: {
  closeModal: () => void;
  id: string;
}) {
//   const handleClick = () => {
//     deleteComment(id);
//     closeModal();
//     };
    //after passing in the password
    //check is password matches
    //if password matches,delete comment
    //close modal
  return (
    <div className="w-full h-fit bg-dark z-10 border-2 px-4 py-2 pb-4 border-primary rounded-lg absolute inset-0  mx-auto flex flex-col justify-start items-center  ">
      <div className="flex items-start gap-5 justify-between ">
        <p className="text-base">provide the password before you can delete</p>
        <button
          onClick={closeModal}
          className=" text-red-500/70 text-xl hover:text-2xl h-6 w-fit hover:text-red-500 active:scale-90">
          <FaDeleteLeft />
        </button>
      </div>
      <form
        action={async (formData: FormData) => {
                  deleteComment(id, formData);
                  closeModal();
        }}
        className="w-full mt-3 flex flex-col gap-3">
        <div className="relative z-0 w-full flex flex-col group  ">
          <input
            type="text"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b-2 border-light/60 appearance-none focus:outline-none focus:ring-0 focus:border-tetiary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-tetiary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
            password
          </label>
        </div>
        <button
          type="submit"
          className="text-dark bg-secondary hover:border hover:border-tetiary hover:text-tetiary hover:bg-dark active:scale-90 active:border-tetiary/50  font-medium rounded-lg text-lg w-full  px-2 py-1 text-center flex items-center justify-center">
          Delete
        </button>
      </form>
    </div>
  );
}
