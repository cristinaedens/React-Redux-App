import React from "react";
import {fetchAnime} from "../actions/index";
import { connect } from "react-redux";

function AnimeList(props) {
  console.log("AnimeList", props);
  return(
    <>
    <button onClick={() => props.fetchAnime()}>See List</button>
    {props.isFetching && <div>List is Loading...</div>}
    <ul>
      {props.articles.map(anime => (
        <li key={anime.title}>
        {anime.title}
        {anime.intro}
        </li>
      ))}
    </ul>
    </>
  ); //this closes AnimeList return
} //this closes AnimeList

const mapDispatchToprops = {
  fetchAnime
}; //this closes mapDispatchToProps

export default connect (
  state => state,
  mapDispatchToprops
)(AnimeList);