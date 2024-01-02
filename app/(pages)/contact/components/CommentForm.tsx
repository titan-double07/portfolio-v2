import React from 'react'

export default function CommentForm() {
  return (
    <form className="max-w-md mx-auto flex flex-col gap-6 w-full"> 
      <div className="flex flex-col lg:flex-row items-center gap-6 relative">
      <div className="relative z-0 w-full flex flex-col group  ">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-light/60 appearance-none focus:outline-none focus:ring-0 focus:border-tetiary peer"
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
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-light/60 appearance-none focus:outline-none focus:ring-0 focus:border-tetiary peer"
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
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-light/60 appearance-none focus:outline-none focus:ring-0 focus:border-tetiary peer"
          cols={30}
          rows={2}
          placeholder=""></textarea>
        <label
          htmlFor="message"
          className="peer-focus:font-medium absolute text-sm text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-tetiary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
          Comment...
        </label>
      </div>

      <button
        type="submit"
        className="text-dark bg-secondary hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center">
        Submit
      </button>
    </form>
  );
}
