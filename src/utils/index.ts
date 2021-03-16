import { TFunction } from 'react-i18next';

// @Types
import { AgeDropdownItem } from '../types/';

// @Constants
import { tKeys } from '../constants/';

/**
 * Used to generate an array of ages
 * @param {TFunction<string>} t Function to translate a string
 * @returns {AgeDropdownItem[]}
 */
export const ageGenerator = (t: TFunction<string>): AgeDropdownItem[] => {
  const agesItems: AgeDropdownItem[] = [
    {
      label: t(tKeys.agePlaceholder),
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
