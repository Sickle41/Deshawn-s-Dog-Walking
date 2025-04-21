
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDogDetails } from "./Dogs.js";

export const DogDetails = () => {
   const [dogsId, setDogsId] = useState({})
   const {id} = useParams()
   useEffect (() => {
    getDogDetails(id).then(data => {
        const dogObject = data
        setDogsId(dogObject)
    })
   },[id])

   return (
    <div>
        <h2>Dog Details</h2>
        <div>
            <div>
                {dogsId?.name}
                    </div>
                    <div>
                {dogsId?.cities?.name}
            </div>
            <div>
                {dogsId?.walkers?.name}
            </div>

                </div>
        </div>
   )
}