export const getCities = async () => {
    const res = await fetch("/api/cities");
    return res.json();
  };

  export const addCity = async (newCity)=> {
    return fetch("/api/cities",
      {
        method: "POST",
        headers: 
        {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(newCity)
      }
    ).then(res=>res.json())
  }