import { mkdirSync, writeFileSync } from "node:fs";

// One word — the single word Grandma would text about AI.
// She can't remember what the newfangled thing is called, so it's a doohickey.
const entry = "doohickey";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
