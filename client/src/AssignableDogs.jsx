
import { useEffect, useState } from "react";
import { addWalker, getAvailableDogs } from "./Dogs";
import { useNavigate, useParams } from "react-router-dom";

export const AssignableDogs = () => {


const [dogs, setDogs] = useState([])
const {walkerId} = useParams()
const navigate = useNavigate()

useEffect(() => {
    getAvailableDogs(walkerId).then(dogArray => {
        setDogs(dogArray)
    })
}, [walkerId])

const handleSave = (dogId, walkerId) => {

    console.log(dogId)
    console.log(walkerId)

    addWalker(dogId, walkerId).then(res => {
          navigate(`/dogs/${res.id}`)  
        })
}

return <div>{dogs.map(dog => (
    <button onClick={() => {handleSave(dog.id, walkerId)}}>{dog.name}</button>
))}</div>
}
