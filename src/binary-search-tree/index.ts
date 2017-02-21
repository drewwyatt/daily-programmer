enum Direction {
	LEFT  = 0,
	RIGHT = 1,
};

class Tree {
	left?: Tree;
	right?: Tree;

	constructor( public root: number ) {}

	search(n: number): Tree | undefined {
		if (n === this.root) {
			return this;
		}

		if (n < this.root) {
			if (this.left) {
				return this.left.search(n);
			} else {
				console.warn('${n} does not exist in tree');
				return;
			}
		} else {
			if (this.right) {
				return this.right.search(n);
			} else {
				console.warn('${n} does not exist in tree');
				return;
			}
 		}
	}

	insert(n: number): void {
		if (n == this.root) {
			console.warn(`${n} already exists on tree.`);
			return;
		}

		if (n < this.root) {
			if (this.left) {
				this.left.insert(n);
			} else {
				this.left = new Tree(n);
				console.info(`${n} was inserted`);
			}
		} else {
			if (this.right) {
				this.right.insert(n);
			} else {
				this.right = new Tree(n);
				console.info(`${n} was inserted`);
			}
 		}
	}
}

const shuffle = (shuffled: number[], c: number, i: number, arr: number[]): number[] => {
    const randomIndex = Math.floor(Math.random() * i);
	shuffled.push(arr[randomIndex]);
	arr[randomIndex] = c;
	return shuffled;
};

const test = () => {
	const numbers: number[] = [];
	Array(100).fill(null).forEach((_, i) => numbers.push(i));
	const shuffled = numbers.reduce(shuffle, []);

	const t = new Tree(20);
	shuffled.forEach(s => t.insert(s));
	console.log(JSON.stringify(t));
};

export default test;


