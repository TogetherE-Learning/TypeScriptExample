// npm init -y
// npm i --save isomorphic-fetch es6-promise

import "isomorphic-fetch";

namespace mod06{
    function callAPI() {
        fetch("https://www.google.com")
            .then(response=>response.text())
            .then(result=>console.log(result));
    }

    callAPI();
    console.log(1);
}