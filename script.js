const petVideo = document.getElementById('pet-video');
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

// KEAMANAN TOKEN (Ganti 'meong123' sesukamu)
if (token !== 'meong123') {
    document.body.innerHTML = ""; 
}

function playAnim(file) {
    petVideo.src = file;
    petVideo.play();
}

// 1. Saat diklik (Click)
function triggerClick() {
    playAnim('click.webm');
    setTimeout(() => playAnim('idle.webm'), 3000);
}

// 2. Animasi Otomatis (Tidur atau Kaget secara random)
setInterval(() => {
    const r = Math.random();
    if (r < 0.1) {
        playAnim('surprise.webm');
    } else if (r < 0.2) {
        playAnim('sleep.webm');
    } else {
        if (!petVideo.src.includes('happy.webm')) {
            playAnim('idle.webm');
        }
    }
}, 20000);

// 3. Trigger Donasi (Happy)
function triggerDonasi() {
    playAnim('happy.webm');
    setTimeout(() => playAnim('idle.webm'), 8000);
}

window.addEventListener('keypress', (e) => {
    if (e.key === 'h') triggerDonasi();
});