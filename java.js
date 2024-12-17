const advice = document.querySelector(".quote");
const id = document.querySelector(".id-number")
const button = document.querySelector(".dice");

async function fetchAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) throw new Error('Failed to fetch advice');

        const data = await response.json();
        id.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    } catch (error) {
        console.error('Error:', error);
        advice.textContent = "Oops! Something went wrong. Try again!";
    }
}

button.addEventListener("click", fetchAdvice);
document.addEventListener('DOMContentLoaded', fetchAdvice)