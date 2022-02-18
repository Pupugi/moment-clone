const quotes = [
    {
        quote: "What is done out of love always takes place beyond good and evil.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "What is a friend? A single soul dwelling in two bodies.",
        author: "Aristotle"
    },
    {
        quote: "If you don't risk anything you risk even more.",
        author: "Erica Jong"
    },
    {
        quote: "Always read stuff that will make you look good if you die in the middle of it.",
        author: "P. J. O'Rourke"
    },
]

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;