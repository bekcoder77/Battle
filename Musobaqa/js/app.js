const container_div = document.querySelector(".container_div");
const socials = document.querySelector(".socials");
const checkbox = document.querySelector("#checkbox");
const loader = document.querySelector("#loader");

checkbox.addEventListener("click", () => {
  container_div.classList.toggle("active");
  socials.classList.toggle("active");
});
const surname = document.querySelector(".name");
const form = document.querySelector(".form");
const container = document.querySelector(".container-user");

const getData = async (name) => {
  const req = await fetch(`https://api.github.com/users/${name}`);
  const data = await req.json();

  useData(data);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = surname.value.toLowerCase();
  getData(name);
});

getData("coder");

function useData(data) {
  console.log(data);
  const {
    avatar_url,
    bio,
    blog,
    email,
    followers,
    followers_url,
    following,
    following_url,
    html_url,
    id,
    login,
    organizations_url,
    public_repos,
    received_events_url,
    repos_url,
    starred_url,
    subscriptions_url,
    twitter_username,
    type,
    url,
    name,
    created_at,
  } = data;
  container.innerHTML = `
    <div class="git-hub flex justify-center mt-10 gap-10 rounded-lg bg-[#FEFEFE] py-5 px-5 ml-12">
          <div class="images">
            <a href=${url}>
            <img
              class="object-contain mt-8 w-[300px]"
              src=${avatar_url}
              alt="avatar"
            />
            </a>
          </div>

          <div class="info mt-10">
            <div class="flex gap-10">
              <div class="octo mb-6">
                <h1 class="text-4xl">${name}</h1>
                <p class="text-[#0079FF]">@${login}</p>
              </div>
              <p class="mt-2">Joined ${created_at}</p>
            </div>
            <p class="text-[#4B6A9B]">
              ${bio}
            </p>
            <div
              class="cards flex gap-10 justify-center rounded-2xl mt-5 bg-[#F6F8FF] px-6 py-4"
            >
              <div class="card">
                <a href=${repos_url} class="text-xl">Repos</a>
                <p class="font-bold text-2xl">${public_repos}</p>
              </div>
              <div class="card">
                <a href=${followers_url} class="text-xl">Followers</a>
                <p class="font-bold text-2xl">${followers}</p>
              </div>
              <div class="card">
                <a href=${following_url} class="text-xl">Following</a>
                <p class="font-bold text-2xl">${following}</p>
              </div>
            </div>
            <div class="socials flex flex-wrap gap-7 justify-between py-10">
                <div class="social">
                  <h1 class="">
                    <i class="fa-solid fa-location-dot"></i> San Francisco
                  </h1>
                </div>
                <div class="social">
                  <h1 class="">
                    <i class="fa-brands fa-twitter"></i> Not Available
                  </h1>
                </div>
                <div class="social">
                  <h1 class="">
                    <i class="fa-solid fa-link"></i>
                    <a href="https://github.com/">https://github.com/</a>
                  </h1>
                </div>
                <div class="social">
                  <h1 class="">
                    <i class="fa-solid fa-building"></i> Not Available
                  </h1>
                </div>
              </div>
          </div>
        </div>
    `;
}
