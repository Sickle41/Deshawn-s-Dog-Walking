import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getWalkerById } from "./Walkers.js"
import { getCities } from "./City.js"

export const EditWalker = () => {
    const {walkerId} = useParams()
    const [walker, setWalker] = useState({})
    const [allCities, setAllCities] = useState([])
    useEffect(()=>{
        getWalkerById(walkerId).then(res=>{
            setWalker(res)
        })
    },[])

    useEffect(()=>{
        getCities().then(cityArray=>{
            setAllCities(cityArray)
        })
    },[])

    return  (
        <div>
            <input 
                type="text"
                value={walker.name ? walker.name : ""}
                onChange = {(event)=>{
                    setWalker({...walker, name: event.target.value})
                }}
            />
            {allCities.map(cities=>
                <div key={cities.id}>
                <div key={cities.id}>{cities.name}</div>
                <input type="checkbox" />
                </div>
            )}
        </div>
    )
}