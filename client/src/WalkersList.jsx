import { useEffect, useState } from "react";
import { getWalkers } from "./Walkers.js";
import { getCities } from "./City";
import { useNavigate } from "react-router-dom"

export const WalkerList = () => {
    const [walkers, setWalkers] = useState([])
    const [cities, setCities] = useState([])
    const [chosenCity, setChosenCity] = useState({})
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const navigate = useNavigate()

   
      useEffect(() => {
          getWalkers().then((walkerArray)=> {
           setWalkers(walkerArray)
           setFilteredWalkers(walkerArray)
          })
            },[]);

    useEffect(() => {
        getCities()
        .then(setCities)
    },[])

   
   

    useEffect(() => {
        const filterByCity = walkers.filter(walker => walker.cityId === chosenCity?.cityId)
        setFilteredWalkers(filterByCity)
        if(!chosenCity?.cityId) {
            setFilteredWalkers(walkers)
        }
    }, [chosenCity])

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
                <div>
                <div>{w.name}</div>
                <button onClick={() => {navigate(`/assignabledogs/${w.id}`)}}>Add Dog</button>
                </div>
            ))}
            
           

        </div>
    )
}