'use client';
import { useState } from 'react';
import NextImage from 'next/image';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '../icons/iconly';
import { Image } from '@/graphql/__generated__/graphql';
import { SliderIndicator } from '@/components/utils/indicator/indicator';

export interface ISliderProps {
  images: Image[];
}

export function Slider({ images }: ISliderProps) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleNextBtn = () => {
    if (sliderIndex < images.length - 1) {
      setSliderIndex(sliderIndex + 1);
    } else {
      setSliderIndex(0);
    }
  };

  const handlePrevBtn = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    } else {
      setSliderIndex(images.length - 1);
    }
  };

  return (
    <div id="container" className="group relative w-full overflow-hidden">
      <button onClick={handlePrevBtn} className="absolute left-0 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity ease-in-out group-hover:opacity-80 ">
        <ArrowLeftCircleIcon className="h-12 w-12 " />
      </button>
      <button onClick={handleNextBtn} className="absolute right-0 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity ease-in-out group-hover:opacity-80">
        <ArrowRightCircleIcon className="h-12 w-12 " />
      </button>
      <div id="slider" className="flex w-full transition-transform duration-200 ease-in-out " style={{ transform: `translateX(${-100 * sliderIndex}%)` }}>
        {images.map((image) => (
          <NextImage src={image.url} alt={image.alt} width={image.width} height={image.height} className="aspect-square w-full max-w-[100%] flex-[0_0_100%]" key={image.id} />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2">
        {images.map((image, index) => (
          <SliderIndicator active={index === sliderIndex} key={image.id + 'indicator'} />
        ))}
      </div>
    </div>
  );
}
