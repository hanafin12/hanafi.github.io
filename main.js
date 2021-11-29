let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
'"Genius is one percent inspiration and ninety-nine percent perspiration." "Thomas Edison"',
'"You can observe a lot just by watching."-"Yogi Berra"',
'"A 	house divided against itself cannot stand." "Abraham Lincoln"',
'"Difficulties increase the nearer we get to the goal." "Johann Wolfgang von Goethe"',
];

btn.addEventlistener('click', function (){
	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
	output.innerHTML = randomQuote;	 
})
	
