export const getDogs = async () => {
    const res = await fetch("/api/dogs");
    return res.json();
  };

export const getDogDetails = async (id) => {
  const res = await fetch(`/api/dogs/${id}`);
  return res.json();
}

export const saveNewDog = async (newDog)=> {
  return fetch("/api/dogs",
    {
      method: "POST",
      headers: 
      {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newDog)
    }
  ).then(res=>res.json())
}

export const getAvailableDogs = async (walkerId) => {
  const res = await fetch(`/api/assignabledogs/${walkerId}`);
  return res.json();
}

export const addWalker = async (dogId, walkerId) => {
  return fetch(`/api/dogs/${dogId}/assigned`,
    {
      method: "POST",
      headers: 
      {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({id : dogId, walkerId : walkerId})
    }
  ).then(res=>res.json())
}

export const removeDog = async (dogId) => {
  return fetch(`/api/dogs/${dogId}`,
    {
      method: "DELETE"
    }
  )
}