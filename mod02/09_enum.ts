enum Color {
    red, blue, green
}

let c: Color = Color.red;

display(c);

function display(color: Color) {
    switch (color) {
        case Color.blue:
            console.log("blue...");
            break;
        case Color.red:
            console.log("red...");
            break;
        case Color.green:
            console.log("green...");
            break;
    }
}