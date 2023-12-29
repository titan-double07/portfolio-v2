import { Skill } from '@/app/types/types';
import React from 'react'

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  // console.log(skills)

  return (
    <section id="skills" className="flex flex-col justify-center items-center gap-6 w-full lg:flex-wrap lg:flex-row">
      {
       
        skills.map((skill, index) => {
          const toBold = ['html', 'css', 'javascript', 'typescript', 'react.js', 'next.js', 'tailwind', 'bootstrap', 'framer', 'motion', 'git', 'nodejs', 'express', 'mongoDB', 'figma', 'photoshop',]
          const { name, description } = skill
          const words = description.split(' ');
          const boldedWords = words.map((word, innerIndex) => {
            // Remove commas from the word
            const cleanedWord = word.replace(',', '');
            if (toBold.includes(cleanedWord.toLowerCase())) {
              return <span key={innerIndex} className="font-bold capitalize text-light">{word} </span>;
            }
            //returns word with a space
            return word + ' ';
          });

          return (
            <div key={index} className='border rounded-lg p-4 lg:w-[300px] lg:h-[300px] lg:overflow-auto '>
              <h3 className="font-bold capitalize text-xl subpixel-antialiased">{name}</h3>
              <hr className=" border-light/50 my-2" />
              <p className="text-light/90 text-base lg:text-lg  subpixel-antialiased">{boldedWords}</p>
            </div>
          )
        })
      }
    </section>
  );
}
