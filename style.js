var quotes= [
    'Buckle Up- You are going on an adventure.',
    'Not knowing Where I am going is what inspires me the to travel it',
    'Sometimes all you need is a good friend and a full tank',
	'Save money and travel further!',
	'I travel not to go anywhere,but to go. I travel for travel sake. The great affair is to move',
	'Working from your car is like the private luxury office you never knew you wanted',
	'Adventure is worthwhile in itself',
	'Nothing compares to highway driving in the fall'
]

function newQuote() {
    var randonNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('output').innerHTML = quotes[randonNum];
}

