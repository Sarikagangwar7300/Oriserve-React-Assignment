import { SET_LIST_DATA } from "./constant";

export const imageListData = (data = [], action) => {
    switch (action.type) {
      case SET_LIST_DATA:
        return action.data;
  
      default:
        return data;
    }
  };
  