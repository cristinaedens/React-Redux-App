import React from "react";

const AnimeContent = ({title, intro, image}) => {
  return(
    <div>
      <p className="article">{title}</p>
      <img src={image} alt=""/>
      <p className="article">{intro}</p>
      <br/>
      <hr/>
      <br/>
    </div>
  ) //this closes return
} //this closes AnimeContent

export default AnimeContent;