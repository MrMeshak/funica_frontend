'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '../icons/iconly';

export function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <div id="container" className="group relative w-full">
      <button className="absolute left-0 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity ease-in-out group-hover:opacity-80 ">
        <ArrowLeftCircleIcon className="h-12 w-12" />
      </button>
      <button className="absolute right-0 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity ease-in-out group-hover:opacity-80">
        <ArrowRightCircleIcon className="h-12 w-12" />
      </button>
      <div id="slider" className="flex w-full " style={{ transform: `translateX(${-100 * sliderIndex}%)` }}>
        <Image
          src="https://www.ikea.com/au/en/images/products/ekenabben-open-shelving-unit-aspen-white__1029351_pe835758_s5.jpg?f=xl"
          alt=""
          width={900}
          height={900}
          className="aspect-square w-full max-w-[100%] flex-[0_0_100%]"
        />
        <Image
          src="https://www.ikea.com/au/en/images/products/ekenabben-open-shelving-unit-aspen-white__1029350_pe835756_s5.jpg?f=xl"
          alt=""
          width={900}
          height={900}
          className="aspect-square w-full max-w-[100%] flex-[0_0_100%]"
        />
        <Image
          src="https://www.ikea.com/au/en/images/products/ekenabben-open-shelving-unit-aspen-white__1029349_pe835757_s5.jpg?f=xl"
          alt=""
          width={900}
          height={900}
          className="aspect-square w-full max-w-[100%] flex-[0_0_100%]"
        />
        <Image
          src="https://www.ikea.com/au/en/images/products/ekenabben-open-shelving-unit-aspen-white__1026867_pe834577_s5.jpg?f=xl"
          alt=""
          width={900}
          height={900}
          className="aspect-square w-full max-w-[100%] flex-[0_0_100%]"
        />
        <Image
          src="https://www.ikea.com/au/en/images/products/ekenabben-open-shelving-unit-aspen-white__0985284_pe816566_s5.jpg?f=xl"
          alt=""
          width={900}
          height={900}
          className="aspect-square w-full max-w-[100%] flex-[0_0_100%]"
        />
        <Image
          src="https://www.ikea.com/au/en/images/products/ekenabben-open-shelving-unit-aspen-white__1040094_pe840584_s5.jpg?f=xl"
          alt=""
          width={900}
          height={900}
          className="aspect-square w-full max-w-[100%] flex-[0_0_100%]"
        />
      </div>
    </div>
  );
}
