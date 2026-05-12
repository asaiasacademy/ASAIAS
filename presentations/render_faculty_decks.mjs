import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const artifactTool = await import("file:///C:/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs");
const { PresentationFile } = artifactTool;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "out");
const previewDir = path.resolve(outDir, "previews");
await fs.mkdir(previewDir, { recursive: true });

const files = (await fs.readdir(outDir)).filter((file) => file.endsWith(".pptx")).sort();
const report = [];

for (const file of files) {
  const deckPath = path.join(outDir, file);
  const bytes = await fs.readFile(deckPath);
  const presentation = await PresentationFile.importPptx(bytes);
  const deckPreviewDir = path.join(previewDir, file.replace(/\.pptx$/i, ""));
  await fs.mkdir(deckPreviewDir, { recursive: true });
  const slides = [];

  for (let index = 0; index < presentation.slides.count; index += 1) {
    const slide = presentation.slides.getItem(index);
    const blob = await slide.export({ format: "png" });
    const buffer = Buffer.from(await blob.arrayBuffer());
    const previewPath = path.join(deckPreviewDir, `slide-${String(index + 1).padStart(2, "0")}.png`);
    await fs.writeFile(previewPath, buffer);
    slides.push({ slide: index + 1, previewPath, bytes: buffer.length });
  }

  report.push({ file, slides: presentation.slides.count, previews: slides });
}

await fs.writeFile(path.join(previewDir, "render-report.json"), JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
