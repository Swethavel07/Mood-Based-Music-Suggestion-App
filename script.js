// Get elements from HTML
const moodSelect = document.getElementById("moodSelect");
const playlist = document.getElementById("playlist");

// Songs data based on mood
const songs = {
  happy: [
    "Happy – Pharrell Williams",
    "Can't Stop the Feeling",
    "Uptown Funk"
  ],
  sad: [
    "Someone Like You",
    "Fix You",
    "Let Her Go"
  ],
  relaxed: [
    "Weightless",
    "Let It Be",
    "Perfect"
  ]
};

// Event listener for mood change
moodSelect.addEventListener("change", function () {
  const selectedMood = moodSelect.value;

  // Clear previous playlist
  playlist.innerHTML = "";

  // If no mood selected
  if (selectedMood === "") {
    return;
  }

  // Display songs for selected mood
  songs[selectedMood].forEach(function (song) {
    const li = document.createElement("li");
    li.innerText = song;
    playlist.appendChild(li);
  });
});
