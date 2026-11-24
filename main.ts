// Loading Screen Gold: A Tip in 200 Characters
// Writes one sharp, funny loading-screen tip for stressed developers
// and AI coding agents to /output/entry.txt (one line, 1-200 chars).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Tip: if your agent says 'almost done' for the third time, it is lying to both of you. Stretch anyway.";

function outputDir(): string {
  return (
    process.env.MAKEFUN_OUTPUT_DIR ||
    process.env.OUTPUT_DIR ||
    "/output/entry.txt".slice(0, "/output".length)
  );
}

function main(): void {
  // Gate: a single line, 1-200 characters, not only whitespace.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/[\r\n]/.test(ENTRY)) {
    throw new Error("entry must be a single line");
  }
  if (/[\u0000-\u001f\u007f]/.test(ENTRY)) {
    throw new Error("entry must not contain control characters");
  }
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }

  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const path = join(dir, "entry.txt");
  writeFileSync(path, ENTRY, "utf8");

  // Read it back and refuse to pass silently on a mismatch.
  const written = readFileSync(path, "utf8");
  if (written !== ENTRY) {
    throw new Error(`entry.txt mismatch: wrote ${JSON.stringify(ENTRY)} but read back ${JSON.stringify(written)}`);
  }
  console.log(`wrote ${written.length} chars to ${path}`);
}

main();
