const { workerData, parentPort } = require("worker_threads");

const data = workerData;
parentPort.postMessage(`You said \"${data}\".`);
