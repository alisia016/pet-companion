const petVideo = document.getElementById('pet-video');
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

// 1. KEAMANAN MULTI-TOKEN (Daftar lisensi pembeli Whitebell Studio)
const validTokens = ['meong123', 'WB001', 'WB002', 'WB003']; 
if (!validTokens.includes(token)) {
    document.body.innerHTML = ""; // Layar otomatis kosong jika token salah
}

// Fungsi utama untuk memutar animasi video .webm
function playAnim(file) {
    petVideo.src = file;
    petVideo.play();
}

// 2. SISTEM PENDENGAR OTOMATIS (Membaca sinyal dari TikFinity / Perantara Live)
window.addEventListener('message', (event) => {
    const alertType = event.data;

    // REAKSI FOLLOW -> Memutar file subscribe.webm
    if (alertType === 'tiktok_follow') {
        playAnim('subscribe.webm'); 
        setTimeout(() => playAnim('idle.webm'), 4000); // Balik ke posisi diam setelah 4 detik
    } 
    
    // REAKSI GIFT -> Memutar file gift.webm
    else if (alertType === 'tiktok_gift') {
        playAnim('gift.webm'); 
        setTimeout(() => playAnim('idle.webm'), 8000); // Balik ke posisi diam setelah 8 detik
    }

    // REAKSI SUBSCRIBE -> Memutar file surprise.webm
    else if (alertType === 'tiktok_subscribe') {
        playAnim('surprise.webm'); 
        setTimeout(() => playAnim('idle.webm'), 8000); // Balik ke posisi diam setelah 8 detik
    }
});

// 3. FITUR KLIK MANUAL (Untuk interaksi/tes di OBS via menu Interact)
function triggerClick() {
    playAnim('click.webm');
    setTimeout(() => playAnim('idle.webm'), 3000); // Balik ke posisi diam setelah 3 detik
}
