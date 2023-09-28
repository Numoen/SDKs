import { type Hex } from "viem";
import { beforeEach, test } from "vitest";
import { deployPool, testClient } from "../_test/utils.js";
import type { PanopticPool } from "../types/PanopticPool.js";

let id: Hex | undefined = undefined;

// @ts-ignore
let pool: PanopticPool;

beforeEach(async () => {
  if (id === undefined) {
    pool = await deployPool();
  } else {
    await testClient.revert({ id });
  }
  id = await testClient.snapshot();
}, 100_000);

test.todo("mint options", async () => {});