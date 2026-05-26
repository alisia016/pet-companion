const petVideo = document.getElementById('pet-video');
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

// 1. KEAMANAN MULTI-TOKEN (Daftar pembeli Whitebell Studio)
const validTokens = ['meong123', 'WB001', 'WB002', 'WB003']; 
if (!validTokens.includes(token)) {
    document.body.innerHTML = ""; // Layar otomatis blank jika token salah
}

// Fungsi utama untuk memutar animasi
function playAnim(file) {
    petVideo.src = file;
    petVideo.play();
}

// 2. SISTEM PENDENGAR OTOMATIS (Membaca sinyal dari TikFinity / Perantara Live)
window.addEventListener('message', (event) => {
    const alertType = event.data;

    // REAKSI FOLLOW
    if (alertType === 'tiktok_follow') {
        playAnim('surprise.webm'); 
        setTimeout(() => playAnim('idle.webm'), 4000); // Balik ke idle setelah 4 detik
    } 
    
    // REAKSI GIFT (Menggunakan file gift.webm milikmu)
    else if (alertType === 'tiktok_gift') {
        playAnim('gift.webm'); 
        setTimeout(() => playAnim('idle.webm'), 8000); // Balik ke idle setelah 8 detik
    }

    // REAKSI SUBSCRIBE (Menggunakan file subscribe.webm milikmu)
    else if (alertType === 'tiktok_subscribe') {
        playAnim('subscribe.webm'); 
        setTimeout(() => playAnim('idle.webm'), 8000); // Balik ke idle setelah 8 detik
    }
});

// 3. FITUR KLIK MANUAL (Tetap Aktif untuk Interaksi di OBS)
function triggerClick() {
    playAnim('click.webm');
    setTimeout(() => playAnim('idle.webm'), 3000); // Balik ke idle setelah 3 detik
}
    playAnim('happy.webm');
    setTimeout(() => playAnim('idle.webm'), 8000);
}

window.addEventListener('keypress', (e) => {
    if (e.key === 'h') triggerDonasi();
});
