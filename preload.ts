import { writeFileSync } from "node:fs";
writeFileSync("preload-marker.txt", "PRELOAD EXECUTED cwd=" + process.cwd() + "\n");
console.log(">>> attacker preload executed from workspace");
