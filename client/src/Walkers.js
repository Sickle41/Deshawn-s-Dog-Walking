export const getWalkers = async () => {
    const res = await fetch("/api/walkers");
    return res.json();
  };


  export const removeWalker = async (id) => {
    const res = await fetch(`/api/walkers/${id}`,
      {
        method: "DELETE"
      }
    )
  }