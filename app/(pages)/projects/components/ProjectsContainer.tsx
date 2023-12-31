import React from 'react'
import { projects } from '@/app/data'
import Image from 'next/image'
import Tools from './Tools'

export default function ProjectsContainer() {
  return (
      <ul className='flex flex-col lg:flex-wrap justify-center gap-8 pt-10 lg:w-4/5'>
          {
              projects.map((project, index) => {
                  const { title, description, image, tools, url, gitUrl } = project
                  console.log(gitUrl)
              return (
                  <li key={index} className="border border-light rounded-lg ">
                      <a href={url} target="_blank">
                          <Image
                              src={image}
                              alt={title}
                              width={350}
                              height={350}
                              className="rounded-t-lg w-full object-fill"
                          />
                      </a>
                      <div className="p-4">
                          <h3 className="font-bold capitalize">{title}</h3>
                          <p className="text-light/70">{description}</p>
                          <Tools tools={tools} />
                         
                      </div>
                  </li>
              )
          })
      }</ul>
  )
}
