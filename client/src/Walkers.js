export const getWalkers = async () => {
    const res = await fetch("/api/walkers");
    return res.json();
  };
