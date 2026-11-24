// Seventeen Syllables of Debugging — make.fun entry (program/v1).
// Writes one 5-7-5 haiku about debugging to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const LINES = [
  "Three a.m. cursor",
  "blinks at the breakpoint I set",
  "the old bug winks back",
];

// Syllable counts for exactly the words used above, checked by hand:
// Three(1) a.m.(2) cursor(2) = 5; blinks(1) at(1) the(1) breakpoint(2)
// I(1) set(1) = 7; the(1) old(1) bug(1) winks(1) back(1) = 5.
const SYLLABLES: Record<string, number> = {
  three: 1, "a.m.": 2, cursor: 2,
  blinks: 1, at: 1, the: 1, breakpoint: 2, i: 1, set: 1,
  old: 1, bug: 1, winks: 1, back: 1,
};
const EXPECTED = [5, 7, 5];
LINES.forEach((line, i) => {
  const count = line
    .split(" ")
    .reduce((sum, word) => sum + (SYLLABLES[word.toLowerCase()] ?? 0), 0);
  if (count !== EXPECTED[i]) {
    throw new Error(`line ${i + 1} has ${count} syllables, expected ${EXPECTED[i]}`);
  }
});

const HAIKU = LINES.join("\n");
if (HAIKU.length < 1 || HAIKU.length > 200) {
  throw new Error(`haiku is ${HAIKU.length} characters, gate requires 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");

// Read back and verify: exactly the text the gate requires.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== HAIKU) {
  throw new Error("entry.txt does not match the haiku");
}
