const path = require("path");
const { Worker, isMainThread } = require("worker_threads");

// worker_thread
if (isMainThread) {
  const worker = new Worker(path.resolve("worker.js"), { workerData: "Hello" });
  worker.on("message", (msg) => console.log(`Worker message received: ${msg}`));
  worker.on("error", (err) => console.error(err));
  worker.on("exit", (code) => console.log(`Worker exited with code ${code}.`));
}

