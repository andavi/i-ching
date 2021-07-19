/* Using Kennedy probabilities we will simply get a 
    random int [1,38]  */

// const range = (start, end, length = end - start + 1) => [...Array(length).keys()].map(d => d + start);
function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}



// const probabilities = {
//     kennedy: {
//         movingYang: range(1, 8),  //  8/38
//         movingYin: range(9, 10),  //  2/38
//         staticYang: range(11, 21),  //  11/38
//         staticYin: range(22, 38),  //  17/38,
//         total: 38
//     },
//     yarrow: {
//         movingYang: range(1, 3),  //  3/16
//         movingYin: range(4, 4),  //  1/16
//         staticYang: range(5, 9),  //  5/16
//         staticYin: range(10, 16),  //  7/16
//         total: 16
//     },
//     coin: {
//         movingYang: range(1, 1),  //  1/8
//         movingYin: range(2,2),  //  1/8
//         staticYang: range(3, 5),  //  3/8
//         staticYin: range(6, 8),  //  3/8
//         total: 8
//     }
// }

const probabilities = {
    kennedy: {
        movingYang: 8,  //  8/38
        movingYin: 10,  //  2/38
        staticYang: 21,  //  11/38
        staticYin: 38,  //  17/38,
        total: 38
    },
    yarrow: {
        movingYang: range(1, 3),  //  3/16
        movingYin: range(4, 4),  //  1/16
        staticYang: range(5, 9),  //  5/16
        staticYin: range(10, 16),  //  7/16
        total: 16
    },
    coin: {
        movingYang: range(1, 1),  //  1/8
        movingYin: range(2,2),  //  1/8
        staticYang: range(3, 5),  //  3/8
        staticYin: range(6, 8),  //  3/8
        total: 8
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getLines(method) {
    const {movingYang, movingYin, staticYang, staticYin, total} = probabilities[method];
    // console.log(movingYang);
    // console.log(movingYin);
    // console.log(staticYang);
    // console.log(staticYin);
    // console.log(total);
    const lines = [];
    const rnds = [];
    for (let i = 0; i < 6; i++) {
        let rndNum = getRndInteger(1, total);
        rnds.push(rndNum);
        if (rndNum <= movingYang) {
            lines.push(0);
        } else if (rndNum <= movingYin) {
            lines.push(1);
        } else if (rndNum <= staticYang) {
            lines.push(2);
        } else if (rndNum <= staticYin) {
            lines.push(3);
        } else {
            console.error('rndNum out of bounds: ' + rndNum);
        }
    }
    console.log(rnds);
    return lines;
}

function getHex(method='kennedy') {
    const lines = getLines(method);
    console.log(lines);

    const table = ['⚊*', '⚋*', '⚊', '⚋'];

    const hexagram = lines.map(n => table[n]);
    while(hexagram.length) {
        console.log(hexagram.pop());
    }
}

getHex();