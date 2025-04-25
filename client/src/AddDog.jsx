import { useState, useEffect } from "react"
import { getCities } from "./City.js"
import { saveNewDog } from "./Dogs.js"
import { useNavigate } from "react-router-dom"


export const AddDog = () => {
   const [dog, setDog] = useState({})
   const [allCities, setAllCities] = useState([])
   const [chosenCity, setChosenCity] = useState({})
   const navigate = useNavigate()

   useEffect(()=>{
    getCities().then((cityArray)=>{
        setAllCities(cityArray)
    })
   },[])
    
   const handleSave = ()=>{
        
    const newDog = 
    {
        name : dog.name,
        cityId : chosenCity.cityId
    }
    saveNewDog(newDog).then(res => {
      navigate(`/dogs/${res.id}`)  
    })
   }
    
    return(
        <div>
            <input 
            type = "text"
            placeholder="Enter Name of Dog"
            value = {dog?.name}
            onChange = {(dog)=>{
                const copy = {...dog}
                copy.name = dog?.target.value
                setDog(copy)
            }}/>
            <select value={dog.cityId}
            onChange={(chosenCity)=>{
                const copy = {...chosenCity}
                copy.cityId = parseInt(chosenCity.target.value)
                setChosenCity(copy)
            
            }}>
                <option value="0">Select a City</option>
                {allCities.map(
                    cityObj => (
                        <option value={cityObj.id} key={cityObj.id}>{cityObj.name}</option>
                    )
                )}
            </select>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}