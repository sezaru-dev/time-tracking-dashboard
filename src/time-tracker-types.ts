import { StaticImageData } from "next/image";

// types.ts
export type TimeFrameType = 'daily' | 'weekly' | 'monthly';

export type Timeframe = {
  current: number;
  previous: number;
}

export type Timeframes = {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
}

export type CardProps = {
  title: string;
  timeframes: Timeframes;
  imageSrc: StaticImageData;
  timeFrameType: TimeFrameType
}