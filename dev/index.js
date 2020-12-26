const express = require("express"),
    path = require("path"),
    app = express();

const { spawn, Thread, Worker } = require("threads");

app.set("PORT", 7000);

app.get("/run", async (req, res) => {
    const start = Date.now();

    const worker = await spawn(new Worker("../build/loop_node"));
    const result = await worker.hashPassword("I am backend!");

    const time = (Date.now() - start) / 1000;
    res.send("Result: " + result + ", Time: " + time + " s").status(200);
});

app.use("/workers", express.static(path.join(__dirname, "../build")));
app.use(express.static(path.join(__dirname, "./interface")));

app.listen(app.get("PORT"), () => console.log("Dev server was started on http://localhost:" + app.get("PORT")));
