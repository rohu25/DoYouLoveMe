const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const heartIcon = document.querySelector('.fa-heart');

// Event listener for "Yes" button click
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too 💗';
    question.classList.add('glowing-text');
    yesBtn.style.display = 'none'; // Hide "Yes" button
    noBtn.style.display = 'none'; // Hide "No" button
    heartIcon.style.animation = 'rotate 2s linear infinite'; // Apply rotation animation
});

// Event listener for "No" button mouseover
noBtn.addEventListener('mouseover', () => {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    const newX = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const newY = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});

// Event listener for clicking outside the "No" button
document.addEventListener('click', (event) => {
    if (!noBtn.contains(event.target) && !yesBtn.contains(event.target)) {
        noBtn.style.display = 'block';
        question.classList.remove('glowing-text');
        heartIcon.style.animation = ''; // Remove rotation animation
        noBtn.style.left = '';
        noBtn.style.top = '';
    }
});

// Prevent the "No" button from being clicked
noBtn.addEventListener('mousedown', (event) => {
    event.preventDefault();
});
