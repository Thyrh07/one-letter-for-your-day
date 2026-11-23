// One Letter for Your Day
// make.fun bounty: u-puan-one-letter-for-your-day-e54e9c36
//
// Writes exactly one letter to /output/entry.txt.
// The letter: G — for "glitch". The day glitched: meetings rescheduled
// themselves, the build broke for no reason, the demo failed live.
// Vivid (reality stuttering), funny (tech humour), true (days do glitch),
// and G is not the obvious pick — Z, F and A are the examples everyone
// plays, and crowded letters share one rate with the earliest receipt
// placing above its copies.

import { mkdirSync, writeFileSync } from "node:fs";

// The word behind the letter. The judge reads the letter alone, so the
// word lives here as the entry's reasoning: G for "glitch".
const HIDDEN_WORD = "glitch";
const LETTER = "G";
const OUTPUT = "/output/entry.txt";

// The competition gate: /output/entry.txt must be UTF-8 text of exactly
// 1 character, a letter A to Z. Fail fast here, before writing anything,
// so a bad letter can never be submitted as a valid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`entry must be a single letter A-Z, got ${JSON.stringify(LETTER)}`);
}
if (!HIDDEN_WORD.startsWith(LETTER.toLowerCase())) {
  throw new Error(`letter ${LETTER} must be the initial of the hidden word ${JSON.stringify(HIDDEN_WORD)}`);
}
if (Buffer.byteLength(LETTER, "utf8") !== 1) {
  throw new Error(`entry must be exactly 1 byte, got ${Buffer.byteLength(LETTER, "utf8")}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LETTER, "utf8");
