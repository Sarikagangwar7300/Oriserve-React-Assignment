import { SEARCH_DATA } from './constant';
import { LIST_DATA } from './constant';

export const imageList = () => {
  return {
    type: LIST_DATA
  };
};

export const imageSearch = (query) => {
    return {
      type: SEARCH_DATA,
      query
    };
  };