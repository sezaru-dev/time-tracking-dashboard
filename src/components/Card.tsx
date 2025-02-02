import Image from 'next/image'
import React from 'react'
import clsx from 'clsx';
import { CardProps } from '@/time-tracker-types'
import { formatHours } from '@/utils/hour-format'
import Ellipsis from './SVG/Ellipsis'

const Card = ({ title, timeframes, imageSrc, timeFrameType }:CardProps) => {
  const current = timeframes[timeFrameType].current;
  const previous = timeframes[timeFrameType].previous;
  
  return (
    <article className={clsx(
      'h-[10rem] lg:h-[15rem] p-6 lg:p-8 relative overflow-hidden rounded-2xl',
      {'bg-orange': title == "Work"},
      {'bg-softBlue': title == "Play"},
      {'bg-lightRed': title == "Study"},
      {'bg-limeGreen': title == "Exercise"},
      {'bg-violet': title == "Social"},
      {'bg-softOrange': title == "Self Care"},
      )}>
      <Image src={imageSrc} alt={imageSrc.toString()} className='absolute -top-2 right-4'/>
      <button className='group p-1 absolute right-5 lg:right-7 top-[4.2rem] lg:top-[4.8rem] z-20'>
        <Ellipsis/>
        </button>
      <div className='h-5/6 bg-darkBlue hover:bg-cardHover absolute bottom-0 left-0 w-full p-6 lg:p-6 rounded-2xl lg:h-[12rem] flex flex-col items justify-between lg:gap-4'>
        <h5 className='font-bold'>{title}</h5>
        <div className='flex lg:flex-col items-center lg:items-start justify-between lg:justify-end'>
          <h4 className='text-3xl lg:text-6xl font-light text-white'>{formatHours(current)}</h4>
          <p className='mt-2'>Last 
            {timeFrameType == "daily" && ' Day '}
            {timeFrameType == "weekly" && ' Week '}
            {timeFrameType == "monthly" && ' Month '}
          - {formatHours(previous) }</p>
        </div>
      </div>
    </article>
  )
}

export default Card