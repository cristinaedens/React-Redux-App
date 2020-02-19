import React, {useEffect} from "react";
import {fetchAnime} from "../actions/index";
import { connect } from "react-redux";
import AnimeContent from "./AnimeCardContent";

const AnimeNews = props => {

  useEffect(() => {
      props.fetchAnime();
  }, [])//this closes useEffect

  if (props.isFetching) {
      return <h2>Loading AnimeNews...</h2>
  }//this closes if statement

  return (
    <div>
    {props.error && <p>{props.error}</p>}
    {props.articles.map(item =>
      <AnimeContent key={item.id} title= {item.title} image = {item.image_url} intro ={item.intro} />
      )}
    </div>

  )//this closes the return
} //this closes AnimeNews
 

const mapStateToProps = state => {
  return {
      articles: state.articles,
      isFetching: state.isFetching,
      error: state.error
  }//this closes mapStateToProps return
}//this closes mapStateToProps

export default connect(mapStateToProps, { fetchAnime })(AnimeNews);