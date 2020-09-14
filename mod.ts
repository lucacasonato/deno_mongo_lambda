import { init } from "https://deno.land/x/mongo@v0.12.1/ts/util.ts";

export * from "https://deno.land/x/mongo@v0.12.1/ts/client.ts";
export * from "https://deno.land/x/mongo@v0.12.1/ts/collection.ts";
export * from "https://deno.land/x/mongo@v0.12.1/ts/database.ts";
export * from "https://deno.land/x/mongo@v0.12.1/ts/result.ts";
export { ObjectId } from "https://deno.land/x/mongo@v0.12.1/ts/types.ts";
export type { UpdateOptions } from "https://deno.land/x/mongo@v0.12.1/ts/types.ts";
export * from "https://deno.land/x/mongo@v0.12.1/ts/util.ts";

export const VERSION = "v0.12.1";
export const RELEASE_URL =
  `https://github.com/lucacasonato/deno_mongo_lambda/releases/download/${VERSION}`;

await init(RELEASE_URL);
