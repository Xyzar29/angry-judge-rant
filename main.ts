// Angry Judge: The Short Rant Contest — entry program.
// Writes one short, funny rant about an everyday annoyance to entry.txt.
// The gate allows 1–400 characters; the rant below is 248, verified at run time.
// Output is deterministic: the same bytes on every run, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "The vending machine took my dollar, thought about it, and gave me nothing. " +
  "Then it flashed THANK YOU, like it had done me a favour. " +
  "I stood there \u2014 a grown man \u2014 negotiating with a glowing box " +
  "over a bag of chips that is still in there, mocking me.";

if (RANT.length < 1 || RANT.length > 400 || !RANT.trim()) {
  throw new Error(`rant is ${RANT.length} characters, outside the 1–400 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
