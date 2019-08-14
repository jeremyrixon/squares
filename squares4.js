

w=8 * 9 * 5 * 7;
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

let n = 0;

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

function next_lower(s) {
    let found = false;
    let l = 0;
    for (let i = 0; i <= n; i++) {
        let ysi_plus_hsi = ys[i] + hs[i];
        let yss_plus_hss = ys[s] + hs[s];
        let ysl_plus_hsl = ys[l] + hs[l];

        if (ysi_plus_hsi > yss_plus_hss) {
            if (!found) {
                found = true;
                l = i;
            } else {
                if (ysi_plus_hsi < ysl_plus_hsl) {
                    l = i;
                }
            }
        }
    }
    return [found, l];
}

function auto(s) {
    for(let above = [true, 0]; above[0]; above=next_lower(above[1])) {
        for(let left = 0; left <= n; left++) {
            below(s,above[1]);
            right(s,left);
            if (check(s) === true) {
                return true;
            }
        }
    }
    return `Couldn't find spot for ${s}`;
}


for (let i = 0; i < 2000; i++) {
    console.log(i);
    let s = n + 1;
    let r = auto(s);
    if (r !== true) {
        console.log(r);
        break;
    }
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
    let fs = Math.min(fontsize,hs[i]/2);
    s += `
        <rect x="${xs[i]}" y="${ys[i]}" width="${ws[i]}" height="${hs[i]}" fill="${colours[i % colours.length]}"/>
        <text x="${xs[i]+ws[i]/2}" y="${ys[i]+(hs[i]+fs/2)/2}" alignment-baseline="middle" font-size="${fs}" text-anchor="middle">${i}</text>
    `;
}

s+=`</svg>`;

fs = require('fs');

fs.writeFileSync("squares4.svg", s)

