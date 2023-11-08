import { FC } from 'react';
import classNames from "classnames";
import './navigation.css';

interface NavigationProps {
  navVisibility: boolean;
  isFirstLoad: boolean;
}

const Navigation: FC<NavigationProps> = ({ navVisibility, isFirstLoad }) => {

  const navClasses = classNames(
    'flex',
    'flex-wrap',
    'order-2',
    'absolute',
    'right-8',
    'left-8',
    'bottom-[100px]',
    'font-havlar-bold',
    'text-gray-800',
    'text-6xl',
    'border-box',
    navVisibility ? 'slide-in' : 'slide-out',
    isFirstLoad ? 'initial-hidden' : null)

  return (
    <menu className={navClasses}>
      <li className="p-10 flex-auto bg-grayCustomColor border border-blueCustomColor min-w-[300px] hover:text-white hover:bg-beigeCustomColor">
        <a className="block text-center" href="https://www.ultra-s.ru/services/">Услуги</a>
      </li >
      <li className="p-10 flex-auto bg-grayCustomColor border border-blueCustomColor min-w-[300px] hover:bg-white">
        <a className="block text-center" href="https://www.ultra-s.ru/house-projects/">Проекты</a>
      </li>
      <li className="p-10 flex-auto bg-grayCustomColor border border-blueCustomColor min-w-[300px] hover:text-grayCustomColor hover:bg-blueCustomColor">
        <a className="block text-center" href="https://www.ultra-s.ru/finished/">Построенное</a>
      </li>
      <li className="p-10 flex-auto bg-grayCustomColor border border-blueCustomColor min-w-[300px] hover:text-grayCustomColor hover:bg-greenCustomColor">
        <a className="block text-center" href="https://www.ultra-s.ru/stati/">Полезное</a>
      </li>
      <li className="p-10 flex-auto bg-grayCustomColor border border-blueCustomColor min-w-[300px] hover:text-grayCustomColor hover:bg-greenCustomColor">
        <a className="block text-center" href="https://www.ultra-s.ru/about/">О нас</a>
      </li>
      <li className="p-10 flex-auto bg-grayCustomColor border border-box border-blueCustomColor min-w-[300px] hover:text-grayCustomColor hover:bg-black">
        <a className="block text-center" href="https://www.ultra-s.ru/contacts/">Контакты</a>
      </li>
    </menu>
  )
};

export default Navigation;
