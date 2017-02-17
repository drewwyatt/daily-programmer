// Change the a sentence to another sentence, letter by letter.
// The sentences will always have the same length.

const input1 = [
	'floor',
	'brake'
];

const input2 = [
	'wood',
	'book'
];

const input3 = [
	'a fall to the floor',
	'braking the door in'
];

const notify = (one: string, two: string) => console.log('Changing','"' + one + '"', 'to',  '"' + two + '"...');
const lineBreak = () => console.log('');

const change = (one: string, two: string) => {
	notify(one, two);
	const length = one.length;

	for (let i = 0; i < length; i++) {
		
	}

	lineBreak();
};

const Main = () => {
	change(input1[0], input1[1]);
	change(input2[0], input3[1]);
	change(input3[0], input3[1]);
};

export default Main;