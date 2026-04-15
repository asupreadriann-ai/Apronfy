const audioPlayer = document.getElementById("audioPlayer");
const nowPlaying = document.getElementById("nowPlaying");

let songs = [
    "Cup of Joe",
    "Moira Dela Torre",
    "Taylor Swift",
    "Ben&Ben",
    "December Avenue"
];

// PLAY SONG
function playSong(path, title){
    audioPlayer.src = path;
    audioPlayer.play();
    nowPlaying.textContent = "Now Playing: " + title;

    addToLibrary(title);
}

// SWITCH SECTIONS
function showSection(section){
    document.getElementById("homeSection").classList.remove("active");
    document.getElementById("searchSection").classList.remove("active");
    document.getElementById("librarySection").classList.remove("active");

    document.getElementById(section + "Section").classList.add("active");
}

// SEARCH FUNCTION
function searchSongs(){
    let input = document.getElementById("searchBox").value.toLowerCase();
    let results = document.getElementById("searchResults");

    results.innerHTML = "";

    songs.filter(song => song.toLowerCase().includes(input))
    .forEach(song => {
        let div = document.createElement("div");
        div.innerHTML = song;
        div.classList.add("result-item");
        div.onclick = () => playSong("", song);
        results.appendChild(div);
    });
}

// LIBRARY SYSTEM
function addToLibrary(song){
    let library = document.getElementById("libraryList");

    let item = document.createElement("div");
    item.classList.add("library-item");
    item.innerText = song;

    library.appendChild(item);
}