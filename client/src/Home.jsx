import { getGreeting } from "./apiManager";
import { getDogs } from "./Dogs";
import { useEffect, useState } from "react";

export default function Home() {
  const [dogs, setDogs] = useState()
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
    getDogs()
      .then(setDogs)
      });
   [];


  return <p>{greeting.message}</p>,
<ul>
  {dogs.map(d => (
    <li key={d.id}>{d.name}</li>
  ))}
</ul>
  }
  

  
  

  

