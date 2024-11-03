const button = document.querySelector('.start-button');
const messageBox = document.querySelector('.message-box');
const status = document.querySelector('.status');

// Sample translations
const messages = [
    "Feed me now, peasant!",
    "Your keyboard looks very comfortable...",
    "I saw a bird today. It was amazing!",
    "The red dot... I will catch it one day.",
    "Your lap is my throne!"
];

let isListening = false;

// Function to get random message
const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return `"${messages[randomIndex]}"`;
};

// Function to update UI state
const updateUIState = (listening) => {
    button.textContent = listening ? 'Stop Translating' : 'Start Translating';
    button.style.background = listening ? '#e53e3e' : '#6b46c1';
    status.style.display = listening ? 'flex' : 'none';
};

// Function to start translation
const startTranslation = () => {
    updateUIState(true);
    return setInterval(() => {
        messageBox.textContent = getRandomMessage();
    }, 5000);
};

// Function to stop translation
const stopTranslation = (interval) => {
    updateUIState(false);
    clearInterval(interval);
    messageBox.textContent = '"Human, I require immediate attention and treats!"';
};

// Event listener for button click
button.addEventListener('click', () => {
    isListening = !isListening;
    
    if (isListening) {
        window.messageInterval = startTranslation();
    } else {
        stopTranslation(window.messageInterval);
    }
});
