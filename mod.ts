import { init } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/6f1b75193a221ac03b87904313645c389d3c89e7/ts/util.ts";

export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/6f1b75193a221ac03b87904313645c389d3c89e7/ts/client.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/6f1b75193a221ac03b87904313645c389d3c89e7/ts/collection.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/6f1b75193a221ac03b87904313645c389d3c89e7/ts/database.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/6f1b75193a221ac03b87904313645c389d3c89e7/ts/result.ts";
export type { ObjectId } from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/6f1b75193a221ac03b87904313645c389d3c89e7/ts/types.ts";
export * from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/6f1b75193a221ac03b87904313645c389d3c89e7/ts/util.ts";

export const VERSION = "v0.9.0-dev2";
export const RELEASE_URL =
  `https://github.com/lucacasonato/deno_mongo_lambda/releases/download/${VERSION}`;

await init(RELEASE_URL);
