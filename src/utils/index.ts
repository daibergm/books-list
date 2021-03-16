// @Types
import { AgeDropdownItem } from '../types/';

/**
 * Used to generate an array of ages
 * @returns {AgeDropdownItem[]}
 */
export const ageGenerator = () => {
  const agesItems: AgeDropdownItem[] = [
    {
      label: 'Age',
      value: '0',
    },
  ];

  for (let index = 1; index < 91; index++) {
    const item: AgeDropdownItem = {
      label: index.toString(),
      value: index.toString(),
    };
    agesItems.push(item);
  }

  return agesItems;
};
