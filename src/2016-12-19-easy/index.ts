const gifts = [
    'Partridge in a Pear Tree',
    'Turtle Doves',
    'French Hens',
    'Calling Birds',
    'Golden Rings',
    'Geese a Laying',
    'Swans a Swimming',
    'Maids a Milking',
    'Ladies Dancing',
    'Lords a Leaping',
    'Pipers Piping',
    'Drummers Drumming'
];

const wordFromNum = (num: number): string => {
    const suffixes = ['th','st','nd','rd','th'];
    let idx = Math.min(num % 10, suffixes.length - 1);
    const tens = num % 100;
    if (tens > 10 && tens < 14) {
        idx = 0
    }
    return `${num}${suffixes[idx]}`;
}

const wordify = (t: number, i: number) => (t - i === 1) ? (t === 1) ? 'a' : 'and a' : t - i;
const logger = (t: number) => (g: string, i: number) => console.log(`${wordify(t, i)} ${g}`);

const Main = () => {
    for (let i = 1; i <= gifts.length; i++) {
        console.log(`On the ${wordFromNum(i)} day of Christmas`);
        console.log(`My true love gave to me...`);
        [...gifts].reverse().slice(gifts.length - i).forEach(logger(i));
        console.log('');
    }
}

export default Main;