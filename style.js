var quotes= [
    'Remember that happiness is a way of travel, not a destination.',
    'Life is short, and the world is wide.',
    'Dare to live the life you have always wanted.'
]

function newQuote() {
    var randonNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('output').innerHTML = quotes[randonNum];
}