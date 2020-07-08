import { init } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/v0.8.0/ts/util.ts";

export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/v0.8.0/ts/client.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/v0.8.0/ts/collection.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/v0.8.0/ts/database.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/v0.8.0/ts/result.ts";
export { ObjectId } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/v0.8.0/ts/types.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/v0.8.0/ts/util.ts";

export const VERSION = "v0.8.0";
export const RELEASE_URL = `https://github.com/lucacasonato/deno_mongo_lambda/releases/download/${VERSION}`;

await init(RELEASE_URL);
