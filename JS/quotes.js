const quotes = [
    {
        quote: "The way to getStarted",
        author : "Walt Disney",
    },
    {
        quote: "The 바보 to getStarted",
        author : "Walt 재욱",
    },
    {
        quote: "The way to 치킨",
        author : "Walt 치킨",
    },
    {
        quote: "The way 배고파",
        author : "Walt 민성",
    },
    {
        quote: "The way 졸령~",
        author : "Walt 성권",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author;