// fetch, Load and show Categories on html
const loadCategores = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategores(data.categories))
    .catch((error) => console.log(error));
};
// [{"category_id":"1001","category":"Music"},

const displayCategores = (categories) => {
    const categoreContainer = document.getElementById("categores");
  
    categories.forEach((item) => {
      const button = document.createElement("button");
      button.classList = "btn";
      button.innerText = item.category; 
  
      categoreContainer.appendChild(button);
    });
  };
  
  loadCategores();