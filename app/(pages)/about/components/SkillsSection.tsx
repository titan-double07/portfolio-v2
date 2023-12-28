import { Skill } from '@/app/types/types';
import React from 'react'

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  console.log(skills)
  return (
    <section id="skills" className="flex flex-col justify-center items-center gap-6 ">
      {
        skills.map((skill, index) => {
          const { name, description } = skill
          return (
            <div key={index}>
              <p className="font-bold capitalize">{name}</p>
              <p className="">{description}</p>
            </div>
          )
        })
      }
    </section>
  );
}
