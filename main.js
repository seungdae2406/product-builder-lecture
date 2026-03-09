let numbers = [];
let pickedNumbers = [];

// Initialize numbers 1 to 100
function initNumbers() {
    numbers = Array.from({length: 100}, (_, i) => i + 1);
    pickedNumbers = [];
    updateUI();
}

const display = document.getElementById('number-display');
const pickBtn = document.getElementById('pick-btn');
const resetBtn = document.getElementById('reset-btn');
const historyUl = document.getElementById('numbers-ul');
const themeToggle = document.getElementById('theme-toggle');

function updateUI() {
    display.textContent = pickedNumbers.length > 0 ? pickedNumbers[pickedNumbers.length - 1] : '-';
    historyUl.innerHTML = pickedNumbers.map(n => `<li>${n}</li>`).join('');
    
    if (numbers.length === 0) {
        pickBtn.disabled = true;
        pickBtn.textContent = '모든 숫자 완료';
    } else {
        pickBtn.disabled = false;
        pickBtn.textContent = '숫자 뽑기';
    }
}

pickBtn.addEventListener('click', () => {
    if (numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const picked = numbers.splice(randomIndex, 1)[0];
        pickedNumbers.push(picked);
        updateUI();
    }
});

resetBtn.addEventListener('click', () => {
    if (confirm('모든 기록을 초기화하시겠습니까?')) {
        initNumbers();
    }
});

// Theme Toggle Logic
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = '다크 모드';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '라이트 모드';
    }
});

// Start the app
initNumbers();
