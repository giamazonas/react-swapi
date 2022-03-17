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
        {starshipDetails.url ?
        <>
          <h4>Name: </h4>
          {starshipDetails.name} 
          <h4>Manufacturer: </h4>
          {starshipDetails.manufacturer} 
          <h4>Max Speed </h4>
          {starshipDetails.max_atmosphering_speed} 
          <h4>Crew: </h4>
          {starshipDetails.crew} 
          <h4>Passengers: </h4>
          {starshipDetails.passengers} 
          <h4>Starship Class: </h4>
          {starshipDetails.starship_class}

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

