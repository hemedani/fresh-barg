import { createContext } from "preact";
import { asset } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";
import { createAppState } from "@libs";

export const createdBargAppStates = createAppState();
export const BargContext = createContext(createdBargAppStates);

export default function App({ Component, data }: PageProps) {
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
        <BargContext.Provider
          value={data && data.initBargContext
            ? data.initBargContext
            : createdBargAppStates}
        >
          <Component />
        </BargContext.Provider>
      </body>
    </html>
  );
}
