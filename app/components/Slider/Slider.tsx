'use client'

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import classNames from "classnames";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import './slider.css';
import { NavigationLeftButton, NavigationRightButton } from "../NavigationBtn/NavigationBtn";

SwiperCore.use([Navigation]);

const Slider = () => {
  const [slideChanged, setSlideChanged] = useState(false);
  const [firstChange, setFirstChange] = useState(false);
  const [slideCount, setSlideCount] = useState(0);
  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
  const navigationNextRef = useRef<HTMLButtonElement | null>(null);

  const imageClasses = classNames(
    'w-full',
    'h-full',
    'object-cover',
    firstChange ? (slideChanged ? 'zoomed-out' : 'zoomed-in') : ''
  );

  return (
    <>
      <Swiper
        onBeforeInit={(swiper: any) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }
        }}
        onSlideChange={() => {
          setSlideCount(prevCount => prevCount + 1);
          if (slideCount >= 2) {
            if (firstChange) {
              setSlideChanged(true);
              setTimeout(() => {
                setSlideChanged(false);
              }, 1000);
            } else {
              setFirstChange(true);
            }
          }
        }}
        slidesPerView={1}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        loop={true}
        speed={1500}
        className="h-screen relative"
      >
        <SwiperSlide className="w-full h-full w-[fit-content]">
          <div className="overflow-hidden w-full h-full relative">
            <div className="absolute flex justify-center items-center left-8 top-11 z-20">
              <Image
                src="/img/halvar.svg"
                alt="Halvar Logo"
                width={32}
                height={32}
              />
              <p className="block font-montserrat ml-6 text-2xl">Халвар</p>
            </div>
            <a href="https://www.ultra-s.ru/house-projects/s88/" className="project-link absolute flex top-12 right-[500px] z-20">
              <p className="font-havlar-bold text-specialCustomColor text-xl mr-4">О проекте</p>
              <Image
                src="/img/linkIcon.svg"
                alt="About the project"
                width={15}
                height={15}
                className="project-link__svg"
              />
            </a>
            <Image
              priority
              src="/img/techHouse-1x.jpg"
              alt="Tech House in the forest"
              width={1440}
              height={800}
              className={imageClasses}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full w-[fit-content]">
          <div className="border-box overflow-hidden w-full h-full">
            <div className="absolute flex justify-center items-center left-8 top-11 z-20">
              <Image
                src="/img/beron.svg"
                alt="Beron Logo"
                width={32}
                height={32}
              />
              <p className="block font-montserrat ml-6 text-2xl">Берон</p>
            </div>
            <a href="https://www.ultra-s.ru/house-projects/s30/" className="project-link absolute flex top-12 right-[500px] z-20 hover:group">
              <p className="font-havlar-bold text-specialCustomColor text-xl mr-4">О проекте</p>
              <Image
                src="/img/linkIcon.svg"
                alt="About the project"
                width={15}
                height={15}
                className="project-link__svg"
              />
            </a>
            <Image
              src="/img/house-1x.jpg"
              alt="Tech House in the forest"
              width={1440}
              height={800}
              className={imageClasses}
            />
          </div>
        </SwiperSlide>
      </Swiper >
      <button ref={navigationPrevRef} className="absolute top-12 right-24 z-20 block">
        <NavigationLeftButton />
      </button>
      <button ref={navigationNextRef} className="absolute top-12 right-11 z-20 block">
        <NavigationRightButton />
      </button>
    </>
  );
};

export default Slider;
