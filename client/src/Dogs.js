export const getDogs = async () => {
    const res = await fetch("/api/dogs");
    return res.json();
  };
  