import { getGreeting } from "./apiManager";
import { getDogs, removeDog } from "./Dogs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [dogs, setDogs] = useState([])
  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });

  useEffect(() => {
    getGreeting()
      .then(setGreeting)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  useEffect(() => {
    reFetch()
      },[]);
  
  const reFetch = ()=>{
    getDogs()
    .then(setDogs)
  }
   
const handleRemove = (dogId) =>{
  removeDog(dogId).then(()=>{reFetch()})
}

  return <p>{greeting.message}</p>,

<div>
  {dogs.map(d => (
    <div key={d.id}>
    <Link to={`/dogs/${d.id}`} key={d.id}><div>{d.name}</div></Link>
    <button onClick={()=>{handleRemove(d.id)}}>Remove</button>
    </div>))}
</div>
  }
  

  
  

  

