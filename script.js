function playVideo() {
    const url = document.getElementById("m3u8-url").value;
    jwplayer("videoPlayer").setup({
        file: url,
        width: "100%",
        height: "100%", 
        aspectratio: "16:9"
    });
}

function generateEmbedUrl() {
    const url = document.getElementById("m3u8-url").value;
    const baseUrl = window.location.href.replace("index.html", "");
    const embedUrl = `${baseUrl}player.html?url=${encodeURIComponent(url)}`;
    document.getElementById("embed-url").value = embedUrl;
}

function copyLink() {
    const embedUrl = document.getElementById("embed-url").value;
    navigator.clipboard.writeText(embedUrl)
        .then(() => {
        const inputField = document.getElementById("embed-url");
        inputField.classList.add("input-highlight");
        setTimeout(() => inputField.classList.remove("input-highlight"), 300);
    })
    .catch(err => console.error("Error copying text: ", err));
}
