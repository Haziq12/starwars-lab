import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { getAllStarships } from '../../services/sw-api';
import { getDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()
  console.log('location:', location)

  useEffect(() => {
    console.log(location.state.starship.url)
    getDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])

  return (
    <>

    <h1>Starship Details</h1>
    {starshipDetails.length ? 
      <div className='details'>
            <h4 >NAME: {starshipDetails.name}</h4>
            <h4>MODEL: {starshipDetails.model}</h4>
            <Link to='/' ><button>Return</button></Link>
      </div>
      : 'Loading Details'
      }
     

    </>
  );
}
 
export default StarshipPage;