const traversalReducer = (acc: any, curr: string): any => acc[curr];
const safelyTraverse = (obj: any, props: string[], defaultVal: any = ''): any => {
	try {
		return props.reduce(traversalReducer, obj) || defaultVal;
	} catch (e) {
		return defaultVal;
	}
};

const test = () => {
	const obj1 = {
		foo: {
			bar: {
				baz: 'Boom Boom Pow'
			}
		}
	};

	const obj2 = {
		one: {
			two: 7
		}
	}

	const obj3 = {};

	console.log(safelyTraverse(obj1, ['foo', 'bar', 'baz'])); // Boom Boom Pow 
	console.log(safelyTraverse(obj2, ['one', 'two', 'three', 'four'])); // ""
	console.log(safelyTraverse(obj3, ['boom'], 'new default')); // new default
};

export default test;