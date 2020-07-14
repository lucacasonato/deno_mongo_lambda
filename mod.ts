import { init } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/f1452aae7cbfd6349db316cf2b51eb9013e20dad/ts/util.ts";

export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/f1452aae7cbfd6349db316cf2b51eb9013e20dad/ts/client.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/f1452aae7cbfd6349db316cf2b51eb9013e20dad/ts/collection.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/f1452aae7cbfd6349db316cf2b51eb9013e20dad/ts/database.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/f1452aae7cbfd6349db316cf2b51eb9013e20dad/ts/result.ts";
export type { ObjectId } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/f1452aae7cbfd6349db316cf2b51eb9013e20dad/ts/types.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/f1452aae7cbfd6349db316cf2b51eb9013e20dad/ts/util.ts";

export const VERSION = "v0.9.0-dev2";
export const RELEASE_URL = `https://github.com/lucacasonato/deno_mongo_lambda/releases/download/${VERSION}`;

await init(RELEASE_URL);
