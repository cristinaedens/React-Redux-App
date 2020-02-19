import {ANIME_LOADING, ANIME_SUCCESS, ANIME_FAIL} from "../actions";

const initialState = {
articles: [],
error: null,
isFetching: false
};

function reducer (state = initialState, action){
  console.log("reducer", action);
  switch (action.type) {
    case ANIME_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      }; //this closes ANIME_LOADING return
      case ANIME_SUCCESS:
      return{
        ...state,
        articles: action.payload.id,
        isFetching: false,
        error: null
      }; //this closes ANIME_SUCCESS return
      case ANIME_FAIL:
        return{
          ...state,
          articles: [],
          isFetching: false,
          error: action.payload
        }; //this closes ANIME_FAIL return
        default:
          return state;
  }
} //this closes reducer
export default reducer;