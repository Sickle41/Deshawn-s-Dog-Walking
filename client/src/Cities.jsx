import { useEffect, useState } from "react"
import { addCity, getCities } from "./City.js"
import { useNavigate } from "react-router-dom"
import { getWalkers } from "./Walkers.js"


export const Cities = () => {

    const [allCities, setAllCities] = useState([])
    const [city, setCity] = useState({})
    

    useEffect(()=>{
       reFetch()
    },[])

    const reFetch = () => {
        getCities().then(cityArray=>{
            setAllCities(cityArray)
            setCity({name: ""})
        })
    }

    const handleSave = ()=>{
            
        const newCity = 
        {
            name : city.name,
            
        }
        addCity(newCity).then(()=>{reFetch() })
        

       }

    return(
        <div>
            {allCities.map(city=>(
                <div key ={city.id}>
                    {city.name}
                </div>

            ))}
        <input type = "text"
        placeholder="Enter a City"
        value = {city.name ? city.name : ""}
            onChange = {(city)=>{
                const copy = {...city}
                copy.name = city?.target.value
                setCity(copy)
            }}
            />
            <button onClick={()=>{handleSave()}}>Save</button>
        </div>
    )
}