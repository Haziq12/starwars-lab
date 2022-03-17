import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { getAllStarships } from '../../services/sw-api';
import { getDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])

  return (
    <>

    <h1>Starship Details</h1>
      <>
            <h4 >{starshipDetails.name}</h4>
            <h5>{starshipDetails.model}</h5>
            <Link to='/' >Return</Link>
      </>
     

    </>
  );
}
 
export default StarshipPage;