/* Using Kennedy probabilities we will simply get a 
    random int [1,38]  */


const probabilities = {
    kennedy: {
        staticYin: 17,  //  17/38,
        staticYang: 28,  //  11/38
        movingYin: 30,  //  2/38
        movingYang: 38,  //  8/38
    },
    yarrow: {
        staticYin: 7,  //  7/16
        staticYang: 12,  //  5/16
        movingYin: 13,  //  1/16
        movingYang: 16,  //  3/16
    },
    coin: {
        staticYin: 3,  //  3/8
        staticYang: 6,  //  3/8
        movingYin: 7,  //  1/8
        movingYang: 8,  //  1/8
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getLines(method) {
    const {movingYang, movingYin, staticYang, staticYin} = probabilities[method];
    const total = movingYang;
    const lines = [];
    const randNums = [];
    for (let i = 0; i < 6; i++) {
        let rndNum = getRndInteger(1, total);
        randNums.push(rndNum);
        if (rndNum <= staticYin) {
            lines.push(0);
        } else if (rndNum <= staticYang) {
            lines.push(1);
        } else if (rndNum <= movingYin) {
            lines.push(2);
        } else if (rndNum <= movingYang) {
            lines.push(3);
        } else {
            console.error('rndNum out of bounds: ' + rndNum);
        }
    }
    console.log(randNums);
    return lines;
}

function huangReducer(lines) {
    let changingLine = null;
    const changingLines = [];
    const staticLines = [];
    lines.forEach((l, i) => {
        if (l > 1) {
            changingLines.push(i);
        } else {
            staticLines.push(i);
        }
    });
    const totalChanging = changingLines.length;
    switch (totalChanging){

        case 1: 
            changingLine = changingLines[0];
            break;
        
        case 2:
            if (lines[changingLines[0]] !== lines[changingLines[1]]) {
                 changingLine = (lines[changingLines[0]] === 2) ? changingLines[0] 
                    : changingLines[1];
            } else {
                changingLine = changingLines[0];
            }
            break;

        case 3:
            changingLine = changingLines[1];
            break;
        
        case 4:
            changingLine = staticLines[1];
            break;

        case 5:
            changingLine = staticLines[0];
            break;

        case 6:
            if (lines.reduce((a, b) => a + b) === 12 || lines.reduce((a,b) => a + b) === 18) {
                changingLine = 6;
            } else {
                lines = lines.map(l => l ^ 3); // XOR bitwise op to move all lines
            }
            break;

        default:
            break;
    }

    // switch to all 0's and 1's in lines, and return array and changingLine
    lines = lines.map(l => l & 1); // bitwise mask leaving only last bit 
    lines.push(changingLine); // for convenience just pushing the index of changingLine

    return lines;
}

function getHex(method='kennedy') {
    let lines = getLines(method);
    console.log(lines);

    lines = huangReducer(lines);

    const changingLine = lines.pop();

    const table = ['⚋', '⚊'];

    const hexagram = lines.map(n => table[n]);
    if (changingLine !== null) {
        if (changingLine < 6) {
            hexagram[changingLine] = '*' + hexagram[changingLine];
        } else hexagram.push('*******'); // special case where all changing lines on first or second gua 
    }
    while(hexagram.length) {
        console.log(hexagram.pop());
    }
}

getHex();