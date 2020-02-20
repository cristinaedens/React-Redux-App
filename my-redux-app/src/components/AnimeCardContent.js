import React from "react";

const AnimeContent = ({title, intro, image}) => {
  return(
    <div>
      {/* <hr/> */}
      <br/>
      <br/>
      <h3 className="article">{title}</h3>
      <img src={image} alt=""/>
      <p className="article">{intro}</p>
      <br/>
      {/* <hr/> */}
      <br/>
    </div>
  ) //this closes return
} //this closes AnimeContent

export default AnimeContent;