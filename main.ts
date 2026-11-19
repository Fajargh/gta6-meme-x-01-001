// gta6-meme-x-01 entry: copies POST.json (the X post address) to the output dir.
// The house reads the post from X itself; nothing this program writes is judged.
// Node 22, standard library only, no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The meme itself is meme.png at the repo root; the X post that carries it
// is named by POST.json (see X-POST.txt for the suggested post text).
const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "POST.json"), join(outDir, "POST.json"));
