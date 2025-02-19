import {
  LISTEMEEKLE,
  SIRADAKI,
  LISTEDENCIKAR,
  ONCEKI,
  BASADON,
} from "./action";
import { movies } from "./movies";

const initialState = {
  filmler: movies[0],
  listem: [],
  sira: 0,
};

export function alfred(state = initialState, action) {
  switch (action.type) {
    case LISTEMEEKLE:
      return {
        ...state,
        listem: [...state.listem, action.payload],
      };
    case LISTEDENCIKAR:
      return {
        ...state,
        listem: state.listem.filter((fav) => action.payload !== fav.id),
      };
    case SIRADAKI:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case ONCEKI:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case BASADON:
      return {
        ...state,
        sira: initialState.sira,
      };
    default:
      return state;
  }
}
