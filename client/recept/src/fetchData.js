async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/recipes");

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}
export default fetchData;
