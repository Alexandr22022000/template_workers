import sha256 from "js-sha256";
import { expose } from "threads/worker";

expose({
    hashPassword(message) {
        for (let i = 0; i < 3000000; i++) {
            //@ts-ignore
            sha256(message);
        }
        //@ts-ignore
        return sha256(message);
    },
});
