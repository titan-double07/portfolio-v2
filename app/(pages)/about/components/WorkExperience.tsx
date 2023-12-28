import { Experience } from '@/app/types/types';
import React from 'react'

export default function WorkExperience({ experience }: { experience: Experience[] }) {
  
  return (
    <section id="experience" className="flex flex-col justify-center items-center gap-6 pb-10  ">
      {
        experience.map((experience, index) => {
          const { company, position, date, description } = experience
          return (<div key={index} className="  p-2 border border-light rounded-lg hover:scale-105  transition  hover:shadow-md hover:shadow-light/50 max-w-sm ">
            <p className="font-bold capitalize">{position}</p>
            <p className='pb-2'>{company} - {date}</p>
            <ul className='mx-auto w-10/12 text-left flex flex-col justify-center items-center gap-1'>
              {
                description.map((desc, index) => {
                  return <li key={index} className="text-light/70 text-sm sm:text-base list-disc  leading-relaxed">{desc}</li>
                })

              }
            </ul>
          </div>)
        })
      }
    </section>
  );
}
