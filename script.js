// script.js

function startAR() {
  alert("Arahkan kamera ke marker Hiro untuk memulai! 🚀");
}

function toggleInfo() {
  const info = document.getElementById("info");
  info.style.display = (info.style.display === "none") ? "block" : "none";
}

function resetScene() {
  location.reload();
}

function captureScene() {
  const area = document.getElementById("capture-area");
  html2canvas(area).then(canvas => {
    const link = document.createElement("a");
    link.download = "hasil_AR.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    alert("Gambar berhasil disimpan! 🖼️");
  });
}

function goToMateri() {
  window.location.href = "materi.html";
}

function goHome() {
  window.location.href = "home.html";
}

function goToHome() {
  window.location.href = "home.html";
}
