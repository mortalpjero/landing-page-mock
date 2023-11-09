import { FC } from 'react';
import classNames from "classnames";
import './navigation.css';

interface NavigationProps {
  navVisibility: boolean;
  isFirstLoad: boolean;
}

interface NavItem {
  text: string;
  href: string;
  hoverTextColor: string;
  hoverBgColor: string;
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
    isFirstLoad ? 'initial-hidden' : null
  )

  const navItemClasses = classNames(
    'p-10',
    'flex-auto',
    'bg-grayCustomColor',
    'border',
    'border-blueCustomColor',
    'min-w-[300px]'
  )

  const navItems: NavItem[] = [
    { text: 'Услуги', href: 'https://www.ultra-s.ru/services/', hoverTextColor: 'white', hoverBgColor: 'beigeCustomColor' },
    { text: 'Проекты', href: 'https://www.ultra-s.ru/house-projects/', hoverTextColor: 'gray-800', hoverBgColor: 'white' },
    { text: 'Построенное', href: 'https://www.ultra-s.ru/finished/', hoverTextColor: 'grayCustomColor', hoverBgColor: 'blueCustomColor' },
    { text: 'Полезное', href: 'https://www.ultra-s.ru/stati/', hoverTextColor: 'grayCustomColor', hoverBgColor: 'greenCustomColor' },
    { text: 'О нас', href: 'https://www.ultra-s.ru/about/', hoverTextColor: 'grayCustomColor', hoverBgColor: 'greenCustomColor' },
    { text: 'Контакты', href: 'https://www.ultra-s.ru/contacts/', hoverTextColor: 'grayCustomColor', hoverBgColor: 'black' },
  ];

  return (
    <menu className={navClasses}>
      {navItems.map((item, index) => (
        <li key={index} className={`${navItemClasses} hover:text-${item.hoverTextColor} hover:bg-${item.hoverBgColor}`}>
          <a className="block text-center" href={item.href}>{item.text}</a>
        </li>
      ))}
    </menu>
  )
};

export default Navigation;
