import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I've got chips, chocolate, and a crush — press E5 and I'll drop all three.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
