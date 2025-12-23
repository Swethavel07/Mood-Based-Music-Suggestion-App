const moodSelect = document.getElementById("moodSelect");
const playlist = document.getElementById("playlist");

const songs = {
  happy: ["Song A", "Song B", "Song C"],
  sad: ["Song D", "Song E"],
  relaxed: ["Song F", "Song G"]
};

moodSelect.addEventListener("change", () => {
  playlist.innerHTML = "";
  document.body.style.background =
    moodSelect.value === "happy" ? "#fff59d" :
    moodSelect.value === "sad" ? "#bbdefb" :
    moodSelect.value === "relaxed" ? "#c8e6c9" : "#f0f0f0";

  songs[moodSelect.value]?.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song;
    playlist.appendChild(li);
  });
});
