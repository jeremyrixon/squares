w=2 * 3 * 4 * 5 * 1 * 7 * 1 * 3;
h=w * Math.PI * Math.PI / 6;


s=`<?xml version="1.0" encoding="UTF-8" ?>
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">

    <rect x="${s01x=0}"         y="${s01y=0}"         width="${s01w=w}"    height="${s01h=w}"    fill="#0f0"/>
    <rect x="${s02x=0}"         y="${s02y=s01h}"      width="${s02w=w/2}"  height="${s02h=w/2}"  fill="#00f"/>
    <rect x="${s03x=s02x+s02w}" y="${s03y=s01h}"      width="${s03w=w/3}"  height="${s03h=w/3}"  fill="#f00"/>
    <rect x="${s04x=s02x+s02w}" y="${s04y=s03y+s03h}" width="${s04w=w/4}"  height="${s04h=w/4}"  fill="#ff0"/>
    <rect x="${s05x=s04x+s04w}" y="${s05y=s03y+s03h}" width="${s05w=w/5}"  height="${s05h=w/5}"  fill="#0ff"/>
    <rect x="${s06x=s03x+s03w}" y="${s06y=s01h}"      width="${s06w=w/6}"  height="${s06h=w/6}"  fill="#f0f"/>
    <rect x="${s07x=s03x+s03w}" y="${s07y=s06y+s06h}" width="${s07w=w/7}"  height="${s07h=w/7}"  fill="#080"/>
    <rect x="${s07x=s03x+s03w}" y="${s07y=s06y+s06h}" width="${s07w=w/7}"  height="${s07h=w/7}"  fill="#080"/>
    <rect x="${s08x=0}"         y="${s08y=s02y+s02h}" width="${s08w=w/8}"  height="${s08h=w/8}"  fill="#800"/>
    <rect x="${s09x=s08x+s08w}" y="${s09y=s02y+s02h}" width="${s09w=w/9}"  height="${s09h=w/9}"  fill="#008"/>
    <rect x="${s10x=s09x+s09w}" y="${s10y=s02y+s02h}" width="${s10w=w/10}" height="${s10h=w/10}" fill="#088"/>
    <rect x="${s11x=s10x+s10w}" y="${s11y=s02y+s02h}" width="${s11w=w/11}" height="${s11h=w/11}" fill="#880"/>
    <rect x="${s12x=s04x+s04w}" y="${s12y=s05y+s05h}" width="${s12w=w/12}" height="${s12h=w/12}" fill="#808"/>
    <rect x="${s13x=s12x+s12w}" y="${s13y=s05y+s05h}" width="${s13w=w/13}" height="${s13h=w/13}" fill="#400"/>
    <rect x="${s14x=s11x+s11w}" y="${s14y=s02y+s02h}" width="${s14w=w/14}" height="${s14h=w/14}" fill="#040"/>
    
    <text x="${s01x+s01w/2}" y="${s01y+s01h/2}" alignment-baseline="middle" font-size="${s01h/10 + 50}" text-anchor="middle">1</text>
    <text x="${s02x+s02w/2}" y="${s02y+s02h/2}" alignment-baseline="middle" font-size="${s02h/10 + 50}" text-anchor="middle">2</text>
    <text x="${s03x+s03w/2}" y="${s03y+s03h/2}" alignment-baseline="middle" font-size="${s03h/10 + 50}" text-anchor="middle">3</text>
    <text x="${s04x+s04w/2}" y="${s04y+s04h/2}" alignment-baseline="middle" font-size="${s04h/10 + 50}" text-anchor="middle">4</text>
    <text x="${s05x+s05w/2}" y="${s05y+s05h/2}" alignment-baseline="middle" font-size="${s05h/10 + 50}" text-anchor="middle">5</text>
    <text x="${s06x+s06w/2}" y="${s06y+s06h/2}" alignment-baseline="middle" font-size="${s06h/10 + 50}" text-anchor="middle">6</text>
    <text x="${s07x+s07w/2}" y="${s07y+s07h/2}" alignment-baseline="middle" font-size="${s07h/10 + 50}" text-anchor="middle">7</text>
    <text x="${s08x+s08w/2}" y="${s08y+s08h/2}" alignment-baseline="middle" font-size="${s08h/10 + 50}" text-anchor="middle">8</text>
    <text x="${s09x+s09w/2}" y="${s09y+s09h/2}" alignment-baseline="middle" font-size="${s09h/10 + 50}" text-anchor="middle">9</text>
    <text x="${s10x+s10w/2}" y="${s10y+s10h/2}" alignment-baseline="middle" font-size="${s10h/10 + 50}" text-anchor="middle">10</text>
    <text x="${s11x+s11w/2}" y="${s11y+s11h/2}" alignment-baseline="middle" font-size="${s11h/10 + 50}" text-anchor="middle">11</text>
    <text x="${s12x+s12w/2}" y="${s12y+s12h/2}" alignment-baseline="middle" font-size="${s12h/10 + 50}" text-anchor="middle">12</text>
    <text x="${s13x+s13w/2}" y="${s13y+s13h/2}" alignment-baseline="middle" font-size="${s13h/10 + 50}" text-anchor="middle">13</text>
    <text x="${s14x+s14w/2}" y="${s14y+s14h/2}" alignment-baseline="middle" font-size="${s14h/10 + 50}" text-anchor="middle">14</text>
</svg>`

fs = require('fs');

fs.writeFileSync("s.svg", s)

