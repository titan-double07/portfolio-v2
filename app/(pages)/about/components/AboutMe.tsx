import { About } from '@/app/types/types';
import React from 'react'
import { PiCertificateFill } from "react-icons/pi";
export default function AboutMe({ description, education: { degree, date, institution } }: About) {

  return (
    <section id="about" className="flex flex-col gap-4 lg:px-10  ">
      {
        description.map((desc, index) => {
          return <p key={index} className="sm:text-xl sm:leading-relaxed pb-1.5 ">{desc}</p>
        })
      }

      <p className='sm:text-xl sm:leading-relaxed '><span className="font-bold">I Graduated</span> from <span className="font-bold underline">{institution}</span> in <span className="font-bold">{date}</span> with a <span className="font-bold underline">{degree}</span></p>

    </section>
  );
}
