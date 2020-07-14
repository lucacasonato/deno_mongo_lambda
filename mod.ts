import { init } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/a3d2bbfca359efbc2941d16758805e3520d9ed89/ts/util.ts";

export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/a3d2bbfca359efbc2941d16758805e3520d9ed89/ts/client.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/a3d2bbfca359efbc2941d16758805e3520d9ed89/ts/collection.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/a3d2bbfca359efbc2941d16758805e3520d9ed89/ts/database.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/a3d2bbfca359efbc2941d16758805e3520d9ed89/ts/result.ts";
export type { ObjectId } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/a3d2bbfca359efbc2941d16758805e3520d9ed89/ts/types.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/a3d2bbfca359efbc2941d16758805e3520d9ed89/ts/util.ts";

export const VERSION = "v0.9.0-dev2";
export const RELEASE_URL =
  `https://github.com/lucacasonato/deno_mongo_lambda/releases/download/${VERSION}`;

await init(RELEASE_URL);
