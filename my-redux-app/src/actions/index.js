export const ANIME_LOADING = "ANIME_LOADING";
export const ANIME_SUCCESS = "ANIME_SUCCESS";
export const ANIME_FAIL = "ANIME_FAIL";

export const animeLoading = () =>({
  type: ANIME_LOADING
}); //this closes animeLoading

export const animeLoadSuccess = data => ({
  type: ANIME_SUCCESS,
  payload: data
}); //this closes anieLoadSuccess

export const animeLoadFailure = error => ({
  type: ANIME_FAIL,
  payload: error
}); //this closes animeLoadFailure

export function fetchAnime(){
  return function (dispatch){
    dispatch(animeLoading());

    return fetch(`https://api.jikan.moe/v3/anime/1/news`)
    .then(response => response.json())
    .then(json =>
      dispatch(animeLoadFailure(json.articles))
      ) //this closes 2nd.then
      .catch(error => dispatch(animeLoadFailure(error)));
  } //this closes dispatch return
} //this closes fetchAnime