import { init } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/2503375425009ce2cec694a0d829d9d2d1444a8d/ts/util.ts";

export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/2503375425009ce2cec694a0d829d9d2d1444a8d/ts/client.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/2503375425009ce2cec694a0d829d9d2d1444a8d/ts/collection.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/2503375425009ce2cec694a0d829d9d2d1444a8d/ts/database.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/2503375425009ce2cec694a0d829d9d2d1444a8d/ts/result.ts";
export { ObjectId } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/2503375425009ce2cec694a0d829d9d2d1444a8d/ts/types.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/2503375425009ce2cec694a0d829d9d2d1444a8d/ts/util.ts";

export const VERSION = "2503375425009ce2cec694a0d829d9d2d1444a8d";
export const RELEASE_URL = `https://github.com/lucacasonato/deno_mongo_lambda/releases/download/${VERSION}`;

await init(RELEASE_URL);
