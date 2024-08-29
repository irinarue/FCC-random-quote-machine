let quotesArr = [];
let currentQuote;
let currentAuthor;

const colorsArr = [    '#16a085',    '#27ae60',    '#2c3e50',    '#f39c12',    '#e74c3c',    '#9b59b6',    '#FB6964',    '#342224',    '#472E32',    '#BDBB99',    '#77B1A9',
    '#73A857', "olive", "slateblue", "orange"]

const fetchQuotes = async () => {
    try {
            const response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            const result = await response.json();
            quotesArr = result.quotes;
            console.log(quotesArr);
            getRandomQuote();

    } catch (error) {
        console.log("Error fetching the Quotes", error)
    }
}

fetchQuotes();

const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesArr.length);
    const randomQuote = quotesArr[randomIndex];
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;
    updateUI();
    changeColor();
};

const updateUI = () => {
    $("#text").text(currentQuote);
    $("#author").text( "- " + currentAuthor);
    const retweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote}" - ${currentAuthor}`)}`;
    console.log(retweetLink);
    $("#tweet-quote").attr("href", retweetLink);
};

const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorsArr.length);
    const randomC = colorsArr[randomIndex];
    $("body").css("color", randomC);
    $("body").css("background-color", randomC);
    $("#new-quote").css("background-color", randomC);
    $("i").css("color", randomC);
}

$("#new-quote").click(fetchQuotes);


