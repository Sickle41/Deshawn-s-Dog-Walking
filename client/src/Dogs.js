export const getDogs = async () => {
    const res = await fetch("/api/dogs");
    return res.json();
  };

export const getDogDetails = async (id) => {
  const res = await fetch(`/api/dogs/${id}`);
  return res.json();
}
  