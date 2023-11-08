'use client';

import React, { useRef, useEffect, FC, useState } from 'react';
import Lottie, { AnimationItem } from "lottie-web";
import classNames from 'classnames';

const OPEN_START_FRAME = 16;
const OPEN_END_FRAME = 35;
const CLOSE_START_FRAME = 35;
const CLOSE_END_FRAME = 54;

interface NavigationProps {
  setNavVisible: (visible: boolean) => void;
  isNavVisible: boolean;
}

const Burger: FC<NavigationProps> = ({ setNavVisible, isNavVisible }) => {
  const burgerRef = useRef(null);
  const burger = useRef<AnimationItem | null>(null);
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);

  useEffect(() => {
    if (!burger.current) {
      const animation = Lottie.loadAnimation({
        container: burgerRef.current!,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'burger.json',
      });

      burger.current = animation;
    }

    if (burgerClicked) {
      if (isNavVisible) {
        burger.current.playSegments([OPEN_START_FRAME, OPEN_END_FRAME], true);
      } else {
        burger.current.playSegments([CLOSE_START_FRAME, CLOSE_END_FRAME], true);
      }
    }
    if (!burgerClicked) {
      burger.current.goToAndStop(0, true)
    }
  }, [isNavVisible]);

  const burgerClasses = classNames(
    'text-white',
    'min-w-[75px]',
    isNavVisible ? 'burgerIcon' : '',
  )

  const toggleBurgerAnimation = () => {
    if (!burger.current) {
      return;
    }

    if (!isNavVisible) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
    setBurgerClicked(true);
  }

  return (
    <button className={burgerClasses} id='burger' ref={burgerRef} onClick={toggleBurgerAnimation} />
  )
};

export default Burger;
