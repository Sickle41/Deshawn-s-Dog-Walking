export const getCityWalkers = async () => {
    const res = await fetch("/api/cityWalkers");
    return res.json();
  };

export const deleteCityWalker = async (id) => {
    const res = await fetch(`/api/cityWalkers/${id}`,
    {
        method: "DELETE"
    })
    
    const text = await res.text();
    if (text === "") {
        return null;
    } else {
        console.log("Unexpected response from deleteCityWalker:", text);
        return null;
    }
}
export const addCityWalker = async (citywalker) => {
    return fetch("/api/citywalkers",
        {
          method: "POST",
          headers: 
          {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(citywalker)
        }
      ).then(res=>res.json())
}