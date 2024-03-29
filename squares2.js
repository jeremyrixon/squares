

w=9 * 5 * 7 * 11 * 13 * 17 * 19;
h=w * Math.PI * Math.PI / 6;
fontsize=w/40;

colours = [
    "#444",
    "#0f0",
    "#00f",
    "#f00",
    "#ff0",
    "#0ff",
    "#f0f",
    "#080",
    "#080",
    "#800",
    "#008",
    "#088",
    "#880",
    "#808",
    "#f80",
    "#f08",
    "#8f0",
    "#0f8",
    "#80f",
    "#08f",
    "#f88",
    "#8f8",
    "#88f"];

xs=[0,0];
ys=[0,0];
ws=[0,0];
hs=[0,0];

function right(s, o) {
    xs[s] = xs[o]+ws[o];
    ws[s] = w/s;
}

function below(s, o) {
    ys[s] = ys[o]+hs[o];
    hs[s] = w/s;
}


right(1, 0);
below(1, 0);

right(2, 0);
below(2, 1);

right(3, 2);
below(3, 1);

right(4, 2);
below(4, 3);

right(5, 4);
below(5, 3);

right(6, 3);
below(6, 1);

right(7, 3);
below(7, 6);

right(8, 0);
below(8, 2);

right(9, 8);
below(9, 2);

right(10, 9);
below(10, 2);

right(11, 10);
below(11, 2);

right(12, 4);
below(12, 5);

right(13, 12);
below(13, 5);

right(14, 11);
below(14, 2);

right(15, 11);
below(15, 14);

right(16, 13);
below(16, 5);

right(17, 15);
below(17, 4);

right(18, 17);
below(18, 4);

right(19, 18);
below(19, 4);

right(20, 19);
below(20, 4);

let n=20;

function check(s) {

    if (xs[s] < 0) {
        return `xs[${s}] < 0: ${xs[s]}`;
    }

    if (ys[s] < 0) {
        return `ys[${s}] < 0: ${ys[s]}`;
    }

    if (xs[s] + ws[s] > w) {
        return `xs[${s}] + ws[${s}] > w : ${xs[s] + ws[s]} > ${w}`;
    }

    if (ys[s] + hs[s] > h) {
        return `ys[${s}] + hs[${s}] > h : ${ws[s] + hs[s]} > ${h}`;
    }

    for (let i = 1; i <= n; i++) {
        if (i === s) {
            continue;
        }
        if (xs[s] + ws[s] <= xs[i]) {
            continue;
        }
        if (xs[i] + ws[i] <= xs[s]) {
            continue;
        }
        if (ys[s] + hs[s] <= ys[i]) {
            continue;
        }
        if (ys[i] + hs[i] <= ys[s]) {
            continue;
        }
        return `${s} overlaps with ${i}`;
    }

    return true;
}

function auto(s) {
    for(let above = 0; above <= n; above++) {
        for(let left = 0; left <= above; left++) {
            below(s,above);
            right(s,left);
            if (check(s) === true) {
                return;
            }
        }
    }
}


for (let i = 0; i < 10; i++) {
    let s = n + 1;
    auto(s);
    n = s;
}

for (let i = 1; i <= n; i++) {
    let r = check(i);
    if (r !== true) {
        console.log(r);
    }
}

s=`<svg xmlns="http://www.w3.org/2000/svg" width="${1000}" height="${1000 * Math.PI * Math.PI / 6}" viewBox="0 0 ${w} ${h}">`;

for (i = 1; i <= n; i++) {
    s += `
        <rect x="${xs[i]}" y="${ys[i]}" width="${ws[i]}" height="${hs[i]}" fill="${colours[i % colours.length]}"/>
        <text x="${xs[i]+ws[i]/2}" y="${ys[i]+(hs[i]+fontsize/2)/2}" alignment-baseline="middle" font-size="${fontsize}" text-anchor="middle">${i}</text>
    `;
}

s+=`</svg>`;

fs = require('fs');

fs.writeFileSync("s.svg", s)

