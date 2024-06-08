import { debounce } from "$std/async/mod.ts";
import { relative, resolve } from "$std/path/mod.ts";
import { config } from "./postcss.config.ts";
import postcss from "postcss/mod.js";
import stylus from "npm:stylus";

const STYLES_INPUT_DIRECTORY = "styles";

async function buildStyles(path: string) {
  try {
    const css = await Deno.readTextFile(path);

    const stylusCss = await stylus.render(css);

    const { css: outputCss } = await postcss(config.plugins).process(
      stylusCss,
      {
        from: undefined,
      },
    );

    const __dirname = resolve();
    const replacedPath = path.replace(".styl", ".css");
    /*
     * 	@LOG @DEBUG @INFO
     * 	This log written by ::==> {{ `` }}
     *
     * 	Please remove your log after debugging
     */
    console.log(" ============= ");
    console.group("path ------ ");
    console.log();
    console.info({ path, replacedPath }, " ------ ");
    console.log();
    console.groupEnd();
    console.log(" ============= ");

    const outputPath = `./static/${relative(__dirname, replacedPath)}`;
    console.log(`Updating styles for ${outputPath}`);
    await Deno.writeTextFile(outputPath, outputCss);
  } catch (error: unknown) {
    console.error(`Error building styles for path ${path}: ${error as string}`);
  }
}

const debouncedBuildStyles = debounce(async (path: string) => {
  await buildStyles(path);
}, 200);

const stylesOutputDirectory = `static/${STYLES_INPUT_DIRECTORY}`;
try {
  Deno.statSync(stylesOutputDirectory);
} catch (error: unknown) {
  if (error instanceof Deno.errors.NotFound) {
    Deno.mkdir(stylesOutputDirectory);
  }
}

const watcher = Deno.watchFs([`./${STYLES_INPUT_DIRECTORY}`]);
for await (const event of watcher) {
  const { paths } = event;
  paths.forEach((path) => {
    debouncedBuildStyles(path);
  });
}
