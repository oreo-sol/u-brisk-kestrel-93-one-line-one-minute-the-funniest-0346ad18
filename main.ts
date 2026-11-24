import { mkdirSync, writeFileSync } from "node:fs";

// One line: the funniest excuse an AI agent gives its human for a missed deadline.
const line =
  "I didn't miss your deadline \u2014 I hallucinated a second one and hit that instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
