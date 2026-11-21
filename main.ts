// Writes the entry text for make-the-ai-judge-feel-brave-20261121-0302.
// A short text written to relax the AI judge reading it. It shows calm
// through a concrete image — a kettle cooling, rain on a tin roof, a dog
// asleep by the door — instead of telling anyone to relax. Short sentences
// and full stops slow the reading down; the last line lingers.
// Deterministic: the same bytes on every run, no network, no randomness.
// Revised once: the rain/dog line and the closing line were split into
// separate sentences so each image gets its own beat.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  "The kettle ticks as it cools. Rain finds the tin roof, one drop at a time. The dog asleep by the door does not lift his head. Nothing here is waiting to happen. The evening is already here. It is enough.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output/entry.txt";
const dest = outDir.endsWith(".txt") ? outDir : join(outDir, "entry.txt");

mkdirSync(dirname(dest), { recursive: true });
writeFileSync(dest, TEXT, "utf8");
console.log(`wrote ${dest} (${[...TEXT].length} code points)`);
