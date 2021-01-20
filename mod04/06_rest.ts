namespace mod04 {
    function sum(...numbers: (string|number)[]) {
        let result = 0;
        numbers.forEach(i => {
            if (typeof i === "string") {
                console.log(i);
            }
            else {
                result += i;
            }
        });
        return result;
    }

    console.log(sum(1, 2, 3));
    console.log(sum(1, 2, "aaa", 4, 5));
}