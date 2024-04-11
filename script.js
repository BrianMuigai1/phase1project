document.addEventListener("DOMContentLoaded", () => {
  const updateChart = () => {};

  document.getElementById("tax").addEventListener("input", updateChart);
  document.getElementById("transport").addEventListener("input", updateChart);
  document
    .getElementById("entertainment")
    .addEventListener("input", updateChart);
  document.getElementById("rent").addEventListener("input", updateChart);
  document.getElementById("food").addEventListener("input", updateChart);
  document.getElementById("totalSalary").addEventListener("input", updateChart);

  const fetchExchangeRates = () => {
    const apiUrl = "https://open.er-api.com/v6/latest/USD";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const dataList = document.getElementById("exchangeRatesContainer");
        dataList.innerHTML = "";

        Object.keys(data.rates).forEach((currency) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${currency}: ${data.rates[currency]}`;
          dataList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  fetchExchangeRates();
});

function convertCurrency() {}
