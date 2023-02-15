const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i += 2) {
        let sign = expr.slice(i, i + 2);
        sign == '10' ? arr.push('.') : sign == '11' ? arr.push('-') : arr.push(sign);
    };

    let matrix = [];
    for (let i = 0; i < arr.length; i += 5) {
        matrix.push(arr.slice(i, i + 5));
    };

    let morseArr = matrix.map(item => item.filter(sign => sign !== '00').join(''));

    let word = '';
    morseArr.forEach(item => {
        item == '**********' ? word += ' ' : word += MORSE_TABLE[item];
    });
    return word;
}

module.exports = {
    decode
}