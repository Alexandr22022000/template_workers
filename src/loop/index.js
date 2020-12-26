const calc = require("./calc");

self.addEventListener("message", (e) => {
    calc.default();

    postMessage("I am result!");
});
