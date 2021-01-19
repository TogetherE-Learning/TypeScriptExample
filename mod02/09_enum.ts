enum Color {
    red = 5, 
    blue = 10, 
    green = 15
}

let c: Color = Color.red;

display(c);

function display(color: Color) {
    switch (color) {
        case Color.blue:
            console.log(`${Color[color]}:${color}`);
            break;
        case Color.red:
            console.log(`${Color[color]}:${color}`);
            break;
        case Color.green:
            console.log(`${Color[color]}:${color}`);
            break;
    }
}