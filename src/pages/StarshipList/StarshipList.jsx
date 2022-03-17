import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";


const StarshipList = (starship) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarshipList(starshipData.results))
  })

  return ( 
    <>
      <h3> Starship List component</h3>
      <div className="starship-container">
        {starshipList.length ?
        <>
          {starshipList.map((starship) => (
            <div key={starship.url}>
              <Link 
                to={`/starship-details`}
                state={{ starship }}
              >
                {starship.name}
              </Link>
            </div>
          ))}
        </>
        :
        <>
        <h2> Loading Starship... </h2>
        </>
      }
      </div>
    </>
  );
}

export default StarshipList;