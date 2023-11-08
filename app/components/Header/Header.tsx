'use client'

import React, { useEffect, useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import classNames from 'classnames';
import Burger from '../Burger/Burger';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { observeIntersection } from '../../utils/observeIntersection';

const Header = () => {
  const [isNavVisible, setNavVisible] = useState<boolean>(false);
  const [isFirstLoad, setFirstLoad] = useState<boolean>(true)
  const [isOnFiller, setIsOnFiller] = useState<boolean>(false);
  const [isOnFooter, setIsOnFooter] = useState<boolean>(false);

  const headerRef = useDetectClickOutside({ onTriggered: () => setNavVisible(false) });

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  useEffect(() => {
    const unobserveFiller = observeIntersection('#contentFiller', setIsOnFiller);
    const unobserveFooter = observeIntersection('#footer', setIsOnFooter);

    return () => {
      unobserveFiller();
      unobserveFooter();
    }
  }, []);

  const headerClasses = classNames(
    'fixed',
    'flex',
    'flex-wrap',
    'px-8',
    'bottom-8',
    'left-0',
    'right-0',
    'h-[100px]',
    'z-50',
    (isOnFiller && !isOnFooter) ? 'text-blueCustomColor' : '',
    isOnFooter && !isNavVisible ? 'text-grayCustomColor' : '',
    isNavVisible ? 'text-blueCustomColor' : '',

  );


  const containerClasses = classNames(
    'relative',
    'flex',
    'items-stretch',
    'justify-between',
    'w-full',
    'h-full',
    'order-1',
    isNavVisible ? 'bg-grayCustomColor' : '',
  )

  const contactsClasses = classNames(
    'flex',
    'items-center',
    'border-2',
    'flex-grow',
    'border-r-0',
    (!isOnFiller && !isOnFooter && !isNavVisible) ? 'border-white' : '',
    (isOnFiller && !isOnFooter) ? 'border-blueCustomColor' : '',
    isOnFooter && !isNavVisible ? 'border-grayCustomColor' : '',
    isNavVisible ? 'border-blueCustomColor' : '',
  );

  const btnClasses = classNames(
    'text-center',
    'px-11',
    'border-2',
    'font-havlar-bold',
    'z-10',
    'border-box',
    (!isOnFiller && !isOnFooter && !isNavVisible) ? 'border-white hover:text-blueCustomColor hover:bg-white' : '',
    (isOnFiller && !isOnFooter) ? 'border-blueCustomColor hover:text-white hover:bg-blueCustomColor' : '',
    isOnFooter && !isNavVisible ? 'border-grayCustomColor hover:text-goldenCustomColor hover:border-goldenCustomColor' : '',
    isNavVisible ? 'border-blueCustomColor' : '',
  )

  return (
    <>
      <header className={headerClasses} ref={headerRef}>
        <div className={containerClasses}>
          <div className={contactsClasses}>
            <div className='flex-grow flex items-center justify-start pl-7'>
              <Burger setNavVisible={setNavVisible} isNavVisible={isNavVisible} />
              <div className='pl-11'>
                <a className='block min-w-[290px]' href='https://www.ultra-s.ru/'>
                  <Logo isClicked={isNavVisible} isOnFiller={isOnFiller} isOnFooter={isOnFooter} />
                </a>
              </div>
            </div>
            <div className='flex-grow flex items-center justify-end pr-24'>
              <a href="tel:+73432195195" className='font-havlar-bold block'>+7 3432-195-195</a>
            </div>
          </div>
          <button className={btnClasses}> Оставить заявку </button>
        </div>
        <Navigation navVisibility={isNavVisible} isFirstLoad={isFirstLoad} />
      </header>
    </>
  );
};

export default Header;
