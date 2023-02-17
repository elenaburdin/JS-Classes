// class Color {
//     constructor(r, g, b) {
//         console.log('INSIDE CONSTRUCTOR')
//         console.log(r, g, b);
//     }
// }

// const c1 = new Color(255, 67, 89);




// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     // method
//     greet() {
//         return `HELLO FROM ${this.name}!`;
//     }
// }

// const c1 = new Color(255, 67, 89, 'tomato');



class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    // methods
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()} ,${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

