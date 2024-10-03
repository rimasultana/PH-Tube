// fetch, Load and show Categories on html
const loadCategores = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategores(data.categories))
    .catch((error) => console.log(error));
};

// Fetch and load videos from API
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos") 
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos)) 
    .catch((error) => console.log(error));
};

// Display videos on the page
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    console.log(video); 
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
      <figure>
        <img
          src="${video.thumbnail}" 
          alt="${video.title}" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${video.title}</h2>
        <p>${video.description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch Now</button>
        </div>
      </div>
    `;
    videoContainer.appendChild(card); 
  });
};

// Display categories on the page
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
loadVideos();
