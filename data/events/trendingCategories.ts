import { ICategoryCard } from '@/components/Cards/CategoryCard';
import { ITrendingContent } from '@/features/TrendingCategories';

import iconMusic from '@/public/images/icons/icon-music.png';
import iconSports from '@/public/images/icons/icon-sports.png';
import iconFoodDrink from '@/public/images/icons/icon-fooddrink.png';

export const content: ITrendingContent = {
  title: 'Trending Categories',
  text: [
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  ],
};

export const categories: ICategoryCard[] = [
  {
    icon: iconMusic.src,
    title: 'Music',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
  },
  {
    icon: iconSports.src,
    title: 'Sports',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
  },
  {
    icon: iconFoodDrink.src,
    title: 'Food & Drink',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.',
  },
];
