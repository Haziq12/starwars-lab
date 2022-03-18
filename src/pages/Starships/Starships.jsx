import { getAllStarships } from "../../services/sw-api"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const Starships = (props) => {
  const [starships, setStarships] = useState([

  ])
  
  useEffect(()=> {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])
  
  
  return (
    <>
      {starships.length ?
        <div className='container'>
          {starships?.map((starship) =>
            <div key={starship.name} className="starship">
              <Link
                to='/StarshipPage'
                state = {{starship}}
              >
                <h3>{starship.name}</h3>
              </Link>
            </div>
          )}
        </div>
        : <h2>Loading</h2>
      }
    </>
    )}
    



 
export default Starships;

