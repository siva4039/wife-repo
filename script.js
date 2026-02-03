const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

// Function to move the No button to a random position
function moveNoButton() {
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Calculate random position within the buttons container
    const maxX = window.innerWidth - btnWidth - 40;
    const maxY = window.innerHeight - btnHeight - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Use fixed positioning to move anywhere on screen
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Move No button when mouse enters
noBtn.addEventListener('mouseenter', moveNoButton);

// Also move on touch devices
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Create floating hearts effect
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    
    const heartsContainer = document.createElement('div');
    heartsContainer.classList.add('hearts');
    document.body.appendChild(heartsContainer);
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heartsContainer.remove();
    }, 3000);
}

// Yes button click handler
yesBtn.addEventListener('click', () => {
    message.textContent = 'Yay! I love you too! 💖💖💖';
    message.classList.remove('hidden');
    
    // Hide the No button
    noBtn.style.display = 'none';
    
    // Create multiple hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createHeart(), i * 100);
    }
    
    // Change Yes button text
    yesBtn.textContent = 'I knew it! 😊';
    yesBtn.style.background = 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)';
});
