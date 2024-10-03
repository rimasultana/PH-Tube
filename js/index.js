function getTime(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hours ${minute}m ${remainingSecond} s ago`;
}

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
      <figure class='h-[200px] relative'>
        <img class='h-full w-full object-cover'
          src="${video.thumbnail}" 
          alt="videoImg" />
          ${
            video.others.posted_date?.length == 0
              ? ""
              : `<span class=" absolute bg-black p-2 font-bold right-3 bottom-1 text-white ">${getTime(video.others.posted_date)}</span>`
          }
      </figure>
      <div class="px-0 py-2 flex gap-2">
        <div>
          <img class="w-10 h-10 rounded-full object-cover" src="${
            video.authors[0].profile_picture
          }" alt="Author's Picture"/>
        </div>
        <div class="flex flex-col justify-center">
          <h2 class="font-bold">${video.title}</h2>
          <div class="flex items-center gap-2">
            <p class="text-gray-400">${video.authors[0].profile_name}</p>
            ${
              video.authors[0].verified
                ? '<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="Verified Icon"/>'
                : ""
            }
          </div>
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
