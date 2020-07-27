/*

@author TheAlan404
Discord: Dennis_#3272
Glitch: @alan404

Thank you for participating in this Enrichment Center Activity.

Want You Gone - Coming Soon
(Contact me on Discord)

Made: 02/05/2020
Took: 2~3 Hours
Made with: NodeJS and Cake.
*/






function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}





process.title = "GLaDOS";
var leftSide = [];
var rightSide = [];
var myLine = 1;

var topstrleft = "------------------------------------- "
var topstrright = " ----------------------------------------"
var midstrleft = "                                     "
var pairs = "||"
var midstrright = "                                        "

function prepare() {
	myLine = 1;
	leftSide = [];
	rightSide = [];
	leftSide.push(topstrleft);
	for (let i=0 ; i !== 23 ; i++) {
		leftSide.push(midstrleft);
	}
	
	rightSide.push(topstrright);
	for (let i=0 ; i !== 23 ; i++) {
		rightSide.push(midstrright);
	}
}




function render() {
	process.stdout.write('\033c')
	for (let i=0; i !== 23 ; i++) {
		
		if (i==0) {
			console.log(topstrleft + topstrright);
		} else {
			while (leftSide[i].length < 37) {
				leftSide[i] = leftSide[i] + " "
			}
			console.log(leftSide[i] + pairs + rightSide[i]);
		}
	}
}




function _type(text, delayTime) {
	let counter = 1;
	let arr = text.split();
	
	while (counter !== text.length) {
		leftSide[myLine] = text.slice(0, counter) + "_";
		
		
		render();
		sleep(delayTime);
		counter++;
	}
	leftSide[myLine] = text;
	render();
	myLine++;
}


function chorusOne() {
	_type("Forms FORM-29827281-12:", 75);
	_type("Test Assessment Report", 75);
	myLine++;
	sleep(1000);
	_type("This was a triumph.", 100);
	sleep(1700);
	_type("I'm making a note here;", 100);
	_type("HUGE SUCCESS.", 75);
	sleep(1300);
	_type("It's hard to overstate", 140);
	_type("my satisfaction.", 140);
	sleep(1000);
	_type("Aperture Science", 100);
	sleep(2000);
	_type("We do what we must", 100);
	_type("because we can.", 100);
	sleep(750);
	_type("For the good of all of us", 150);
	sleep(100);
	_type("Except the ones who are dead.", 50);

	myLine++;
	sleep(1000);
	_type("But theres no sense crying", 100);
	_type("over every mistake.", 100);
	sleep(100);
	_type("You just keep on trying", 100);
	_type("till you run out of cake.", 100);
	sleep(100);
	_type("And the science gets done.", 100);
	sleep(100);
	_type("And you make a neat gun.", 100);
	sleep(100);
	_type("For the people who are", 100);
	sleep(100);
	_type("still alive.", 250);
}

function chorusTwo() {
	_type("Forms FORM-55551-5:", 50);
	_type("Personnel File Addendum:", 50);
	myLine++;
	_type("Dear <<Subject Name Here>>.", 100);
	myLine++;
	_type("I'm not even angry.", 100);
	sleep(700);
	_type("I'm being so sincere right now.", 170);
	sleep(100);
	_type("Even though you broke my heart", 170);
	_type("and killed me.", 170);
	sleep(2000);
	_type("And tore me to pieces.", 100);
	sleep(1000);
	_type("And threw every piece into a fire.", 200);
	sleep(100);
	_type("As they burned it hurt because", 100);
	sleep(100);
	_type("I was so happy for you!", 70);
	sleep(300);
	_type("Now these points of data", 100);
	sleep(100);
	_type("make a beatiful line.", 100);
	sleep(100);
	_type("And we're out of beta.", 100);
	sleep(100);
	_type("We're releasing on time.", 100);
	sleep(100);
	_type("So I'm GLaD. I got burned.", 100);
	sleep(100);
	_type("Think of all the things we learned", 100);
	sleep(100);
	_type("for the people who are", 100);
	sleep(100);
	_type("still alive.", 220);
}

function chorusUNKNOWN(Cant, Count, To, REDACTED) {
	_type("Forms FORM-55551-6:", 50);
	_type("Personnel File Addendum Addendum:", 50);
	myLine++;
	sleep(200);
	_type("One last thing:", 150);
	myLine++;
	sleep(100);
	_type("Go ahead and leave me.", 100);
	sleep(200);
	_type("I think I prefer to stay inside.", 100);
	sleep(200);
	_type("Maybe you'll find someone else", 90);
	sleep(50);
	_type("to help you.", 100);
	sleep(2500);
	_type("Maybe Black Mesa...", 150);
	sleep(100);
	_type("THAT WAS A JOKE. FAT CHANCE", 130);
	sleep(100);
	_type("Anyway, this cake is great.", 120);
	sleep(100);
	_type("It's so delicious and moist.", 100);
	sleep(300);
	_type("Look at me still talking", 100);
	sleep(50);
	_type("when there's Science to do.", 100);
	sleep(100);
	_type("When I look out there,", 100);
	sleep(100);
	_type("it makes me GLaD I'm not you.", 100);
	sleep(100);
	_type("I've experiments to run.", 100);
	sleep(100);
	_type("There is research to be done.", 100);
	sleep(100);
	_type("On the people who are", 100);
	sleep(100);
	_type("still alive.", 220);
}

function chorusFinal() {
	myLine++;
	myLine++;
	myLine++;
	_type("PS: And believe me I am", 100);
	_type("still alive", 100);
	sleep(500);
	_type("PPS: I'm doing Science and I'm", 100);
	_type("still alive", 100);
	sleep(500);
	_type("PPPS: I feel FANTASTIC and I'm", 100);
	_type("still alive", 100);
	myLine++;
	sleep(500);
	_type("FINAL THOUGHT:", 50);
	_type("While you're dying I'll be", 100);
	_type("still alive", 100);
	myLine++;
	sleep(500);
	_type("FINAL THOUGHT PS:", 50);
	_type("And when you're dead I will be", 100);
	_type("still alive", 100);
	myLine++;
	myLine++;
	sleep(500);
	_type("STILL ALIVE", 100);
	sleep(1000);
}




function GLADOS() {
	prepare();
	chorusOne();
	sleep(200);
	prepare();
	render();
	chorusTwo();
	sleep(200);
	prepare();
	render();
	chorusUNKNOWN();
	sleep(700);
	prepare();
	render();
	chorusFinal();
	prepare();
	render();
	sleep(1000);
	rightSide[6] = "   THANK YOU FOR PARTICIPATING"
	rightSide[7] = "   IN THIS"
	rightSide[8] = "   ENRICHMENT CENTER ACTIVITY!!"
	render();
}

GLADOS();


