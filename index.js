const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "HVe5pA4PqyGTDTelEv38ZA==x7ycXTYMTwXUwaGN";
const options = {
  method: "GET",
  headers: {
    "X-Api-key": apiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke() {
  try {
    // console.log("clicked");
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";

    jokeEl.innerText = data[0].joke;
    // console.log(data[0]);
  } catch (error) {
    jokeEl.innerText = "An error happened, try Again later.";
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
    console.log(error);
  }
}
btnEl.addEventListener("click", getjoke);
