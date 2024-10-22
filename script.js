let currentPage = 1;
const totalPages = 3; // Adjust this if you have more pages

const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
const music = document.getElementById('backgroundMusic');
const playMusicButton = document.getElementById('playMusic');
const pauseMusicButton = document.getElementById('pauseMusic');

// Play music on page load
window.onload = function() {
    music.play();
};

// Function to show the current page
function showPage(pageNumber) {
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById('page' + i);
        page.classList.remove('active');
    }
    const current = document.getElementById('page' + pageNumber);
    current.classList.add('active');
}

// Initial page load
showPage(currentPage);

// Navigation
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

// Music controls
playMusicButton.addEventListener('click', () => {
    music.play();
});

pauseMusicButton.addEventListener('click', () => {
    music.pause();
});
