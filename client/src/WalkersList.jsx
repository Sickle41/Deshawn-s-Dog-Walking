import { useEffect, useState } from "react";
import { getWalkers, removeWalker } from "./Walkers.js";
import { getCities } from "./City";
import { Link, useNavigate } from "react-router-dom"
import { getCityWalkers } from "./CityWalkers.js";

export const WalkerList = () => {
    const [walkers, setWalkers] = useState([])
    const [cities, setCities] = useState([])
    const [chosenCity, setChosenCity] = useState({})
    const [filteredWalkers, setFilteredWalkers] = useState([])
    const [cityWalkers, setCityWalkers] = useState([])
    const navigate = useNavigate()

   
      useEffect(() => {
         reFetch()
            },[]);

    useEffect(() => {
        getCities()
        .then(setCities)
    },[])

    const reFetch = () => {
        getWalkers().then((walkerArray) => {
            setWalkers(walkerArray);
            setFilteredWalkers(walkerArray);
        });
        
        getCityWalkers().then((cityWalkerArray) => {
            setCityWalkers(cityWalkerArray);
        });
    }

   useEffect(() => {
    getCityWalkers().then((cityWalkerArray) => {
        setCityWalkers(cityWalkerArray)
    })
   }, [])

   


   useEffect(() => {
    // If a city is selected, filter walkers based on cityWalkers table
    if (chosenCity?.cityId) {
        // Find all walker IDs assigned to the selected city
        const walkerIdsForCity = cityWalkers
            .filter(cw => cw.cityId === chosenCity.cityId)
            .map(cw => cw.walkerId);
            
        // Filter walkers based on those IDs
        const filterByCity = walkers.filter(walker => 
            walkerIdsForCity.includes(walker.id)
        );
        
        setFilteredWalkers(filterByCity);
    } else {
        // If no city is selected, show all walkers
        setFilteredWalkers(walkers);
    }
}, [chosenCity, walkers, cityWalkers]);


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