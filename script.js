function changeMood() {
  const mood = document.getElementById("mood").value;
  const playlist = document.getElementById("playlist");

  playlist.innerHTML = "";

  let songs = [];

  if (mood === "happy") {
    document.body.style.background = "#ffeaa7";
    songs = ["Happy Song 1", "Joyful Beats", "Smile Tune"];
  }
  else if (mood === "sad") {
    document.body.style.background = "#74b9ff";
    songs = ["Sad Melody", "Lonely Night", "Blue Heart"];
  }
  else if (mood === "relaxed") {
    document.body.style.background = "#55efc4";
    songs = ["Calm Waves", "Peaceful Mind", "Soft Piano"];
  }
  else if (mood === "energetic") {
    document.body.style.background = "#ff7675";
    songs = ["Power Boost", "Workout Vibes", "Energy Blast"];
  }

  songs.forEach(song => {
    const div = document.createElement("div");
    div.className = "song";
    div.textContent = song;
    playlist.appendChild(div);
  });
}
