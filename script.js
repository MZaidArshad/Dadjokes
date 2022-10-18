const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const genrateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const response = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await response.json();
    joke.innerHTML = data.joke;
  } catch (err) {
    console.log(`Error is ${err}`);
  }
};
jokeBtn.addEventListener("click", genrateJokes);
genrateJokes();
