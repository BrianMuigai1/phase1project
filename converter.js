fetch("https://open.er-api.com/v6/latest/USD")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const dataList = document.getElementById("data-list");
    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.name;
      dataList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

  function convertCurrency() {
    
    const rates = {
      USD: {
        EUR: 0.83,
        GBP: 0.71,
        KES: 109.50  
      },
      EUR: {
        USD: 1.20,
        GBP: 0.86,
        KES: 132.20  
      },
      GBP: {
        USD: 1.40,
        EUR: 1.16,
        KES: 147.90  
      },
      KES: {
        USD: 0.0091,  
        EUR: 0.0076,  
        GBP: 0.0068   
      }
    };
  
    
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
  
    
    const convertedAmount = amount * rates[fromCurrency][toCurrency];
  
    
    document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
