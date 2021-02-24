let symbolToValue = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
}


let romanToInt = function (s) {
    // console.log(symbolToValue[s]);
    let individualSymbols = s.split('');
    console.log(individualSymbols);
    let output = 0;
    let i = 0;

    while(i < individualSymbols.length) {
        if(individualSymbols[i] === 'I' && individualSymbols[i+1] === 'V') {
            output += 4;
            i+=2;
        } else if(individualSymbols[i] === 'I' && individualSymbols[i+1] === 'X') {
            output += 9;
            i+=2;
        } else if(individualSymbols[i] === 'X' && individualSymbols[i+1] === 'L') {
            output += 40;
            i+=2;
        } else if(individualSymbols[i] === 'X' && individualSymbols[i+1] === 'C') {
            output += 90;
            i+=2;
        } else if(individualSymbols[i] === 'C' && individualSymbols[i+1] === 'D') {
            output += 400;
            i+=2;
        } else if(individualSymbols[i] === 'C' && individualSymbols[i+1] === 'M') {
            output += 900;
            i+=2;
        } else {
            output += symbolToValue[individualSymbols[i]];
            i++;
        }
    }
    return output;
}

romanToInt('LVIII');