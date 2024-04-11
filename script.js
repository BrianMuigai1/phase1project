document.addEventListener("DOMContentLoaded", () => {
    const updateChart = () => {
        const tax = parseInt(document.getElementById("tax").value);
        const transport = parseInt(document.getElementById("transport").value);
        const entertainment = parseInt(document.getElementById("entertainment").value);
        const rent = parseInt(document.getElementById("rent").value);
        const food = parseInt(document.getElementById("food").value);
        const totalSalary = parseInt(document.getElementById("totalSalary").value);

        const totalExpenses = tax + transport + entertainment + rent + food;
        const remainingToSave = totalSalary - totalExpenses;

        document.getElementById("save").value = remainingToSave > 0 ? remainingToSave : 0;

        if (typeof myChart !== "undefined") {
            myChart.destroy();
        }
        myChart = new Chart(document.getElementById("Piechart"), {
            type: "pie",
            data: {
                labels: [
                    "Tax",
                    "Transport",
                    "Entertainment",
                    "Rent & other utilities",
                    "Food",
                    "Save",
                    "Total Salary"
                ],
                datasets: [
                    {
                        backgroundColor: [
                            "#e63946",
                            "#254800",
                            "#ffbe0b",
                            "#1d3557",
                            "#326998",
                            "#000000",
                            "#E40066"
                        ],
                        data: [tax, transport, entertainment, rent, food, remainingToSave, totalSalary],
                    },
                ],
            },
            options: {
                title: {
                    display: true,
                    text: "MyExpenses Monthly",
                },
                responsive: true,
            },
        });
    };

    document.getElementById("tax").addEventListener("input", updateChart);
    document.getElementById("transport").addEventListener("input", updateChart);
    document.getElementById("entertainment").addEventListener("input", updateChart);
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
                const exchangeRatesContainer = document.getElementById("exchangeRatesContainer");
                exchangeRatesContainer.innerHTML = ""; // Clear previous data

                Object.keys(data.rates).forEach((currency) => {
                    const exchangeRateItem = document.createElement("span");
                    exchangeRateItem.textContent = `${currency}: ${data.rates[currency]} `;
                    exchangeRatesContainer.appendChild(exchangeRateItem);
                });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const handleUpdateRates = () => {
        fetchExchangeRates();
    };

    fetchExchangeRates();

    document.getElementById("updateRatesBtn").addEventListener("click", handleUpdateRates);
});

function convertCurrency() {
    const rates = {
        USD: { EUR: 0.83, GBP: 0.71, KES: 109.50 },
        EUR: { USD: 1.20, GBP: 0.86, KES: 132.20 },
        GBP: { USD: 1.40, EUR: 1.16, KES: 147.90 },
        KES: { USD: 0.0091, EUR: 0.0076, GBP: 0.0068 }
    };

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    const convertedAmount = amount * rates[fromCurrency][toCurrency];

    document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
