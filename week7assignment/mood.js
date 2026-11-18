// Owen Schierbeck, 11/20/26

// connect variables to the html elements
const quote = document.querySelector("#quote");
const title = document.querySelector("#title");
const moodButtons = document.querySelector("#buttons");

// store the settings for each mood
const moods = {
  happy: {
    name: "Happy",
    bg: "#FFD700",
    text: "#bd26b0",
    message: "Warm smiles and the sun's kisses!"
  },
  calm: {
    name: "Calm",
    bg: "#A7D8DB",
    text: "#1B3A5C",
    message: "Take a deep breath. Everything is okay."
  },
  angry: {
    name: "Angry",
    bg: "#B22222",
    text: "#FFF5F5",
    message: "Grr! Nothing is going right today!"
  },
  sleepy: {
    name: "Sleepy",
    bg: "#3B4A6B",
    text: "#E6E9F5",
    message: "Yawn... time for a cozy nap."
  }
};

// change the page based on the button that's clicked
function handleMoodButtonClick(moodClick) {
  // only run if a button is clicked, not the empty space in the div
  if (moodClick.target.classList.contains("mood-btn")) {
    const mood = moodClick.target.getAttribute("data-mood");
    const moodSettings = moods[mood];

    document.body.style.backgroundColor = moodSettings.bg;
    document.body.style.color = moodSettings.text;
    quote.textContent = moodSettings.message;
    title.textContent = moodSettings.name.toUpperCase();

    console.log("Mood selected:", mood);
    console.log("Mood settings:", moodSettings);
  }
}

// one listener on the parent div instead of one on each button
moodButtons.addEventListener("click", handleMoodButtonClick);
