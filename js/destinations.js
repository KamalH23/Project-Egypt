// Function to filter destinations based on search input
function filterDestinations() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const destinationCards = document.getElementById("destinationCards").getElementsByClassName("card");
  
    Array.from(destinationCards).forEach((card) => {
      const cardName = card.getAttribute("data-name").toLowerCase();
      if (cardName.includes(searchInput)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  