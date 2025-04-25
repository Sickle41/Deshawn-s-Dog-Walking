export const getWalkers = async () => {
    const res = await fetch("/api/walkers");
    return res.json();
  };

  export const getWalkerById = async (id) => {
    const res = await fetch(`/api/walkers/${id}`);
    return res.json();
  }
  
  export const removeWalker = async (id) => {
    const res = await fetch(`/api/walkers/${id}`,
      {
        method: "DELETE"
      }
    )
  }

  export const updateWalker = async (walker) => {
    const res = await fetch(`/api/walkers/${walker.id}`, 
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",

      },
      body: JSON.stringify(walker),
      }
    )
  }