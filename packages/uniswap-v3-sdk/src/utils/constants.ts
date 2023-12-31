import { createFraction } from "reverse-mirage";
import type { FeeTier, TickSpacing } from "../types/uniswapV3Pool.js";

export const Q32 = 2n ** 32n;
export const Q96 = 2n ** 96n;
export const Q128 = 2n ** 128n;

export const MIN_TICK = -887272;
export const MAX_TICK = -MIN_TICK;

export const MIN_SQRT_PRICE = createFraction(4295128739n, Q96);
export const MAX_SQRT_PRICE = createFraction(
  1461446703485210103287273052203988822378723970342n,
  Q96,
);

export const feeAmountTickSpacing = {
  100: 1,
  500: 10,
  3_000: 60,
  10_000: 200,
} as const satisfies { [feeTier in FeeTier]: TickSpacing };
