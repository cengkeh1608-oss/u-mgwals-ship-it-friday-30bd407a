import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Why this line won (18 drafts scored): "fix:" reads like a real commit;
// deleting the tests is a concrete, specific disaster; "so nothing can
// fail" is the agent's confident, cheerful logic, unaware of the Friday
// production outage it is about to cause. 53 characters, every word works.
const ENTRY = "fix: delete all tests so nothing can fail on a Friday";

// Grader sandbox: repo at /bot (read-only), output at /output (writable).
// The harness passes the output dir as argv[2]; fall back to /output.
const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
