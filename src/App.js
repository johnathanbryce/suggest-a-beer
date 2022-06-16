import "./App.css";
import axios from "axios";
import BeerCard from "./components/BeerCard";

import { useEffect, useState } from "react";

/*TODO 



*/

function App() {
  const [beer, setBeer] = useState([]);

  const getData = async () => {
    try {
      const dataFetchBeer = await axios.get(
        `https://api.punkapi.com/v2/beers/random`
      );

      // transform dataFetchBeer to display pertinent information:

      const transformedBeerFetch = dataFetchBeer.data
        .map((beer) => {
          return {
            name: beer.name,
            description: beer.description,
            image: beer.image_url,
            abv: beer.abv,
            ibu: beer.ibu,
            value: beer.value,
            litres: beer.litres,
            id: Math.random().toString(),
          };
        })
        // shift( ) to remove it from the array to become just an object
        .shift();

      setBeer(transformedBeerFetch);
    } catch (error) {
      console.error(error);
    }
  };

  const newBeerButtonHandler = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <button onClick={newBeerButtonHandler}> Suggest Another Beer! </button>

      <BeerCard beer={beer} />
    </div>
  );
}

export default App;
