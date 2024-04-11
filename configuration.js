const apiUrl = "https://open.er-api.com/v6/latest/USD";

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    console.log(data);

    console.log("Exchange rates:", data.rates);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData();
