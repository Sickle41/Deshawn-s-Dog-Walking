import { useEffect, useState } from "react";
import { getWalkers, removeWalker } from "./Walkers.js";
import { getCities } from "./City";
import { Link, useNavigate } from "react-router-dom"

export const WalkerList = () => {
    const [walkers, setWalkers] = useState([])
    const [cities, setCities] = useState([])
    const [chosenCity, setChosenCity] = useState({})
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const navigate = useNavigate()

   
      useEffect(() => {
         reFetch()
            },[]);

    useEffect(() => {
        getCities()
        .then(setCities)
    },[])

   const reFetch = () => {
    getWalkers().then((walkerArray)=> {
        setWalkers(walkerArray)
        setFilteredWalkers(walkerArray)
       })
   }
   

  useEffect(() => {
    if (!chosenCity?.cityId || chosenCity.cityId === 0) {
        setFilteredWalkers(walkers)
    } else {
        const matchingCityWalkers = cityWalkers.filter(cw => cw.cityId === chosenCity.cityId)
        const walkerIdsForCity = matchingCityWalkers.map(cw => cw.walkerId)
        const walkersInCity = walkers.filter(walker => walkerIdsForCity.includes(walker.id))
        setFilteredWalkers(walkersInCity)
    }
  }, [chosenCity, cityWalkers, walkers])

    const handleRemove = (walkerId) => {
        removeWalker(walkerId).then(()=>{reFetch()})
    }

    return (
        <div>
            <h2>List of Walkers</h2>
             <select value={filteredWalkers.cityId}
            onChange={(chosenCity)=>{
                const copy = {...chosenCity}
                copy.cityId = parseInt(chosenCity.target.value)
                setChosenCity(copy)
            
            }}>
                <option value="0">Select a City</option>
                {cities.map(
                    cityObj => (
                        <option value={cityObj.id} key={cityObj.id}>{cityObj.name}</option>
                    )
                )}
            </select>

            {filteredWalkers.map( w => (
                <div key ={w.id}>
                <Link key={w.id} to={`/editWalker/${w.id}`}><div>{w.name}</div></Link>
                <button onClick={() => {navigate(`/assignabledogs/${w.id}`)}}>Add Dog</button>
                <button onClick={()=>{handleRemove(w.id)}}>Remove Walker</button>
                </div>
            ))}
            
           

        </div>
    )
}