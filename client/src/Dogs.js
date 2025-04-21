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