const advice = document.querySelector(".quote");
const heading = document.querySelector(".heading")
const id = document.querySelector(".id-number");
const button = document.querySelector(".dice");

async function fetchAdvice() {
    try {
        //Show "Loading..." while fetching
        advice.classList.remove("show");
        advice.textContent = "Loading...";
        heading.style.display = "none";

        await new Promise((resolve) => setTimeout(resolve, 300));

        //Fetch the advice
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) throw new Error('Failed to fetch advice');

        //Parse the advice
        const data = await response.json();

        //Display the advice after fetching
        heading.style.display = "block";
        id.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
        setTimeout(() => {
            advice.classList.add("show");
        }, 50)
    } catch (error) {
        console.error('Error:', error);
        heading.style.display = "none";
        advice.textContent = "Oops! Something went wrong. Try again!";
        advice.classList.add("show");
    }
}

button.addEventListener("click", fetchAdvice);
document.addEventListener('DOMContentLoaded', fetchAdvice)