import { mkdirSync, writeFileSync } from "node:fs";

// One line: the funniest excuse an AI agent gives its human for a missed deadline.
const a = "I didn't miss your deadline \u2014 ";

const b = "I hallucinated a second one and hit that instead.";
const line = a + b;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
