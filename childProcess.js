const { spawn } = require("child_process");

const child = spawn("dir", [], { shell: true }); // returns data in streams
child.on("error", (err) => console.log(err));

child.stdout.on("data", (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on("close", () => {
  console.log("closed");
});
