const display = document.querySelector(".display");
const button = document.querySelectorAll("button");
display.innerHTML = `<h1>Loading...</h1>`;

const loadingIndicator = document.createElement("div");
loadingIndicator.classList.add("loading-indicator");
display.parentNode.insertBefore(loadingIndicator, display);

function showLoadingIndicator() {
  loadingIndicator.style.display = "block";
  display.innerHTML = ""; // Clear previous content
}

function hideLoadingIndicator() {
  loadingIndicator.style.display = "none";
}
function get(url) {
  showLoadingIndicator(); // Show loading indicator before fetching data
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.recipes.forEach((recipe) => {
        display.innerHTML += `
        <div class="recipe">
          <img src="${recipe.image_url}" alt="${recipe.title}">
          <div class="info">
            <h1>${recipe.title}</h1>
            <a href="${recipe.source_url}" target="_blank">Describtion</a>
            <p><span class="text-grey">Publisher:</span> ${recipe.publisher}</p>
          </div>
          
        </div>
      `;
      });
    hideLoadingIndicator(); // Hide loading indicator after data is loaded
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      display.innerHTML = `<p>Error loading recipes. Please try again.</p>`;
      hideLoadingIndicator(); // Hide loading indicator on error
    });
}
button[0].addEventListener("click", () => {
  get("https://forkify-api.herokuapp.com/api/search?q=pizza");
});
button[1].addEventListener("click", () => {
  get("https://forkify-api.herokuapp.com/api/search?q=salad");
});
button[2].addEventListener("click", () => {
  get("https://forkify-api.herokuapp.com/api/search?q=beef");
});
button[3].addEventListener("click", () => {
  get("https://forkify-api.herokuapp.com/api/search?q=pasta");
});
