export const getCityWalkers = async () => {
    const res = await fetch("/api/cityWalkers");
    return res.json();
  };

export const deleteCityWalker = async (id) => {
    const res = await fetch(`/api/cityWalkers/${id}`,
    {
        method: "DELETE"
    })
    return res.json();
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