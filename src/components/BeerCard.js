import React from "react";
import classes from "./BeerCard.module.css";

import BarGraph from "./BarGraph";
import beerImageNotFound from "./images/beer-not-found.jpeg";

function BeerCard(beer) {
  // TODO: add a legend explaining ABV and IBU

  let imageURL = beer.beer.image;

  return (
    <div className={classes.beer_content_container}>
      <div className={classes.beer_left_side_graph_content}>
        <BarGraph graphData={beer.beer} />
      </div>
      <div className={classes.beer_right_side_content}>
        <h2> {beer.beer.name}</h2>
        <div className={classes.beer_image_container}>
          {imageURL ? (
            <img
              src={imageURL}
              alt="A tasty beer! "
              className={classes.beer_image}
            />
          ) : (
            <div className={classes.beer_image_not_found}>
              <p> Could not find a picture of this tasty beer :( </p>
              <img
                src={beerImageNotFound}
                alt="Could not fetch our tasty beer!"
                className={classes.beer_image_backup}
              />
            </div>
          )}
        </div>
        <p> {beer.beer.description}</p>
      </div>
    </div>
  );
}

export default BeerCard;
