export const getCities = async () => {
    const res = await fetch("/api/cities");
    return res.json();
  };