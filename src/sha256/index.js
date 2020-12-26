import sha256 from "js-sha256";

self.addEventListener("message", (e) => {
    for (let i = 0; i < 3000000; i++) {
        sha256(e.data);
    }
    postMessage(sha256(e.data));
});
