import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getWalkerById, updateWalker } from "./Walkers.js"
import { getCities } from "./City.js"
import { addCityWalker, deleteCityWalker, getCityWalkers } from "./CityWalkers.js"




export const EditWalker = () => {
    const {walkerId} = useParams()
    const [walker, setWalker] = useState({})
    const [allCities, setAllCities] = useState([])
    const [cityWalkers, setCityWalkers] = useState([])
    const navigate = useNavigate()
    

    useEffect(()=>{
        getWalkerById(walkerId).then(res=>{
            setWalker(res)
        })
    },[])

    useEffect(() => {
        reFetch()
    },[])
    
    const reFetch = () => {
        getCityWalkers().then(res => {
            setCityWalkers(res)
            
        })
    }

    useEffect(()=>{
        getCities().then(cityArray=>{
            setAllCities(cityArray)
        })
    },[])

    const handleCheckMark = (cityId) => {
      const jointableId = cityWalkers.find(cw => cw.cityId === cityId && cw.walkerId == walkerId)
      if(jointableId == undefined) {
        addCityWalker({cityId:cityId, walkerId:walkerId }).then(() => {
            reFetch()
        })
      } 
      else {
        deleteCityWalker(jointableId.id).then(() => {
            console.log("Deleting cityWalker with id:", jointableId.id)
            reFetch()
        })
      }
 
     

    }
  

        const handleSaveUpdateWalker = () => {
            const updatedWalker = {id: walker.id,
                name: walker.name  
            }
            updateWalker(updatedWalker).then(() => {
                navigate("/walkers")
            })
        }

        const isWalkerAssignedToCity = (cityId) => {
            return cityWalkers.some(cw => cw.cityId === cityId && cw.walkerId == walkerId) }

    return (
        <div>
            <input
                type="text"
                value={walker.name ? walker.name : ""}
                onChange={(event) => {
                    setWalker({...walker, name: event.target.value})
                }}
            />
            {allCities.map(city => (
                <div key={city.id}>
                    <div>{city.name}</div>
                    <input 
                        checked = {isWalkerAssignedToCity(city.id)}
                        type="checkbox"
                        onChange={() => {
                            handleCheckMark(city.id)
                        }}
                    />
                </div>
            ))}
            <button onClick={() => {
                handleSaveUpdateWalker(walker.id)
                
            }}>
                Save Changes
            </button>
        </div>
    )
}