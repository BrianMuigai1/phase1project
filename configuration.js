const apiUrl = "https://open.er-api.com/v6/latest/USD";
const queryParams = {
  param1: "value1",
  param2: "value2",
  apiKey: apiKey,
};

const url = new URL(apiUrl);
url.search = new URLSearchParams(queryParams).toString();

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
