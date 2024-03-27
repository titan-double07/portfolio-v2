import React from 'react'
import type { Tools } from '@/app/types/types'

export default function Tools({ tools }: { tools: Tools[] }) {
  // console.log(tools)
  return (
    <ul className='flex  divide-x h-2 divide-light/80 mb-2 '>{
      tools.map((tool, index) => {
        const { text,icon } = tool
        return (
          <li
            key={index}
            className="capitalize flex flex-col justify-center items-center  p-2 group relative">
            <i className="text-lg">{icon}</i>
            <small className="hidden -bottom-7 right-0 border z-20 bg-dark p-px whitespace-nowrap absolute group-hover:inline-block w-fit text-xs">
              {text}
            </small>
          </li>
        );
      })
    }</ul>
  )
}
