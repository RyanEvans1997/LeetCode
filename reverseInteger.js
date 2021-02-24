let reverse = function(x) {
    let getString = x.toString();
    let isNegative = x < 0 ? true : false;
    let absoluteValueString;
    let reversedString = [];
    let outputValue;

    // console.log('getString: ' + getString);

    if(isNegative) {
        absoluteValueString = getString.slice(1);
    } else {
        absoluteValueString = getString;
    }


    // console.log('absoluteValueString: ' + absoluteValueString);

    let endOfString = absoluteValueString.length - 1;


    while(endOfString > 0) {
        if(absoluteValueString[endOfString] == 0) {
            endOfString--;
            continue;
        } else {
            break;
        }
    }

    let outputValueString = absoluteValueString.slice(0, endOfString + 1)

    for (let i = outputValueString.length - 1; i >= 0; i--) {
        reversedString.push(outputValueString[i])
    }
    outputValue = parseInt(reversedString.join(''));

    if(isNegative) {
        outputValue -= outputValue * 2;
    }

    if (-2147483648 > outputValue || 2147483647 < outputValue) {
        return 0;
    }

    // console.log('outputValue: ' + outputValue);
    return outputValue;

};

console.log(reverse(1534236469));
