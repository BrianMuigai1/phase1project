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
  
    updateChart();
  });
