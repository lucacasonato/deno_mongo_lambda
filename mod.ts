import { init } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/3f5b89057efe28f08beec4fcb6206ec15833de0e/ts/util.ts";

export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/3f5b89057efe28f08beec4fcb6206ec15833de0e/ts/client.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/3f5b89057efe28f08beec4fcb6206ec15833de0e/ts/collection.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/3f5b89057efe28f08beec4fcb6206ec15833de0e/ts/database.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/3f5b89057efe28f08beec4fcb6206ec15833de0e/ts/result.ts";
export { ObjectId } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/3f5b89057efe28f08beec4fcb6206ec15833de0e/ts/types.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/3f5b89057efe28f08beec4fcb6206ec15833de0e/ts/util.ts";

export const VERSION = "v0.10.0";
export const RELEASE_URL =
  `https://github.com/lucacasonato/deno_mongo_lambda/releases/download/${VERSION}`;

await init(RELEASE_URL);
