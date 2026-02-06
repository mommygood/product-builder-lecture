const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const numberSpans = lottoNumbersContainer.querySelectorAll('.number');
const generateBtn = document.getElementById('generate-btn');
const historyList = document.getElementById('history-list');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numbers.forEach((number, index) => {
        numberSpans[index].textContent = number;
    });
}

function addToHistory(numbers) {
    const li = document.createElement('li');
    li.textContent = numbers.join(', ');
    historyList.prepend(li);
}

function generateAndDisplay() {
    const newNumbers = generateLottoNumbers();
    displayNumbers(newNumbers);
    addToHistory(newNumbers);
}


generateBtn.addEventListener('click', generateAndDisplay);

// Initial generation
generateAndDisplay();
