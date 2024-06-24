import { asset } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href={asset("/styles/index.css")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>barg</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
