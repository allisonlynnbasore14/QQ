


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



function pickJoke(){
	var Joke1 = ["Q: How do you make seven an even number?    A: Take the s out!"];
	var Joke2 = ["Q: What is the difference between a Ph.D. in mathematics and a large pizza?    A: A large pizza can feed a family of four "];
	var Joke3 = ["Q: What happened to the plant in math class?    A: It grew square roots."];
	var Joke4 = ["Two statisticians go bird hunting. The first one fires at the bird but overshoots by 5 feet. The second one fires and undershoots the bird by 5 feet. They both give each other a high-five and say, Got it!"]
	var Joke5 = ["Q: What is the definition of a polar bear? A: A rectangular bear after a coordinate transformation"];
	var Joke6 = ["Q: What did one math book say to the other? A: Don't bother me I've got my own problems!"];
	var Joke7 = ["Q: What did the mathematician get kicked out of the golf club? A: He kept yelling, Square root of 16!"];
	var Joke8 = ["Q: Why did I divide sin by tan?    A: Just cos."];
	var Joke9 = ["Q: Why didn't the quarter roll down the hill with the nickel?   A: Because it had more cents."];
	var Joke10 = ["Q: Why don’t Calculus majors throw house parties?   A: Because you should never drink and derive."];
	var Joke11 = ["Q: What did Al Gore play on his guitar?    A: An Algorithm"];
	var Joke12 = ["Q: Did you hear the one about the statistician?    A: Probably."];
	var Joke13 = ["Q: What do you call a number that can’t keep still?    A: A roamin’ numeral."];
	var Joke14 = ["Q: Why do mathematicians like parks?    A: Because of all the natural logs."];
	var Joke15 = ["Q: Why should the number 288 never be mentioned?    A: It’s two gross."];
	var Joke16 = ["I put my root beer in a square glass. Now it’s just beer."];
	var Joke17 = ["Q: Did you hear about the mathematician who’s afraid of negative numbers?  He will stop at nothing to avoid them."];
	var Joke18 = ["The problem with math puns is that calculus jokes are all derivative, trigonometry jokes are too graphic, algebra jokes are usually formulaic, and arithmetic jokes are pretty basic. But I guess the occasional statistics joke is an outliers."];
	var Joke19 = ["After a talking sheepdog gets all the sheep in the pen, he reports back to the farmer: 'All 40 accounted for.'  'But I only have 36 sheep,' says the farmer. 'I know,' says the sheepdog.'But I rounded them up.'"];
	var Joke20 = ["Here’s some advice: At a job  interview, tell them you’re willing to give 110 percent. Unless the job is a statistician."];
	Jokes = [Joke1,Joke2,Joke3,Joke4,Joke5,Joke6,Joke7,Joke8,Joke9,Joke10,Joke11,Joke12,Joke13,Joke14,Joke15,Joke16,Joke17,Joke18,Joke19,Joke20];
	var ind = getRandomInt(0,20);
	document.getElementById("demo").innerHTML = Jokes[ind];
}



