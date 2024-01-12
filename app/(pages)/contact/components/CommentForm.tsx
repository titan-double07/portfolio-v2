"use client";
import React, { useEffect, useRef, useState } from "react";
import { createComment } from "../commentActions";
import { useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa";

export default function CommentForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const maxLength = 200;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.currentTarget.value);
  };
//  const remainingCharacters = maxLength - comment.length;
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (toast) {
      timer = setTimeout(() => {
        setToast(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [toast]);
  return (
    <form
      ref={ref}
      action={async (formData: FormData) => {
        try {
          const res = await createComment(formData);
          if (res.success) {
            setToast(res.message);
          }
          ref.current?.reset();
        } catch (error) {}
      }}
      className="max-w-md mx-auto flex flex-col gap-6 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-6 relative">
        <div className="relative z-0 w-full flex flex-col group  ">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-base  bg-transparent border-0 border-b-2 border-light/60 appearance-none focus:outline-none focus:ring-0 focus:border-tetiary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-tetiary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
            Name
          </label>
        </div>
        <div className="relative z-0 w-full flex flex-col group">
          <input
            type="email"
            name="email"
            id="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            className="block py-2.5 px-0 w-full text-base  bg-transparent border-0 border-b-2 border-light/60 appearance-none focus:outline-none focus:ring-0 focus:border-tetiary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-tetiary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full flex flex-col group">
        <textarea
          name="comment"
          id="comment"
          className="block py-2.5 px-0 w-full text-base  bg-transparent border-0 border-b-2 border-light/60 appearance-none focus:outline-none focus:ring-0 focus:border-tetiary peer"
          cols={30}
          rows={3}
          required
          maxLength={maxLength}
          onChange={handleChange}>
          {" "}
          
        </textarea>
        <label
          htmlFor="message"
          className="peer-focus:font-medium absolute text-sm text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-tetiary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
          Comment...
        </label>
        <div className="text-sm text-tetiary/80">
          {maxLength - comment.length} characters left (maximum {maxLength}{" "}
          characters)
        </div>
        {/* <div>
          {remainingCharacters} characters left (maximum {maxLength} characters)
        </div> */}
      </div>
      <SubmitButton />
      {toast && <p className="text-tetiary/80 text-sm -mt-4">{toast}</p>}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    // <button disabled={pending}>
    //   {pending ? "Creating article..." : "Create Article"}
    // </button>
    <button
      disabled={pending}
      type="submit"
      className="text-dark bg-secondary hover:border hover:border-tetiary hover:text-tetiary hover:bg-dark active:scale-90 active:border-tetiary/50  font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center flex items-center justify-center">
      {pending ? "Submiting..." : "Submit"}
      {pending && <FaSpinner className="ml-2 animate-spin" />}
    </button>
  );
}
