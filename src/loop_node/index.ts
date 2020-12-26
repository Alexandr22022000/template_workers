import { expose } from "threads/worker";
import calc from "./calc";

expose({
    hashPassword(message) {
        calc();

        return "I am result!";
    },
});
