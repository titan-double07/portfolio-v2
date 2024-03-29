import { MotionSection,m ,MotionA} from '@/app/lib/framer-motion/motionComponents';
import type { Certification } from '@/app/types/types';
import React from 'react'
import { PiCertificate } from 'react-icons/pi';
import {
  containerVariant,
  itemVariant,
} from "@/app/lib/framer-motion/motionComponents";

export default function Certification({ certifications }: { certifications: Certification[] }) {

  return (
    <MotionSection
      variants={containerVariant}
      initial="hidden"
      animate="show"
      id="certifications"
      className="flex flex-col gap-6 pb-10 ">
      {certifications.map((certification, index) => {
        const { name, issuer, date, url } = certification;

        return (
          <MotionA
            variants={itemVariant}
            href={url}
            target="_blank"
            key={index}
            className="flex items-center gap-2 p-2 divide-x divide-light/50 border border-light rounded-lg hover:scale-105 active:scale-95   hover:shadow-md hover:shadow-light/50 ">
            <PiCertificate className="text-3xl sm:text-5xl " />
            <div className=" text-start w-full pl-3">
              <p className="font-bold ">{name}</p>
              <p className=" text-light">
                {issuer} - {date}
              </p>
              <p className=" text-light"></p>
            </div>
          </MotionA>
        );
      })}
    </MotionSection>
  );
}
