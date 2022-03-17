import { useState, useEffect } from 'react';
import { getStarshipDetails } from '../../services/sw-api';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const StarshipDetails = (starship) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  const {starshipUrl} = useParams()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  })
  return ( 
    <>
      <h2> EACH STARSHIP </h2>
        {starshipData.url ?
        <>
          <h2> {starship.name} </h2>
        </>
        :
        <>
          <h2>Loading Starship Details...</h2>
        </>
        }
    </>
  );
}

export default StarshipDetails;

