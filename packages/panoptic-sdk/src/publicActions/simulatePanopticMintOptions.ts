import type {
  Chain,
  Client,
  SimulateContractParameters,
  SimulateContractReturnType,
  Transport,
} from "viem";
import { simulateContract } from "viem/contract";
import { panopticPoolABI } from "../generated.js";
import type { PanopticPosition } from "../types/PanopticPosition.js";

export type PanopticMintOptionsParameters = {
  positions: PanopticPosition[];
  amount: bigint;
};

export type SimulatePanopticMintOptionsParameters<
  TChain extends Chain | undefined = Chain,
  TChainOverride extends Chain | undefined = Chain | undefined,
> = Omit<
  SimulateContractParameters<
    typeof panopticPoolABI,
    "mintOptions",
    TChain,
    TChainOverride
  >,
  "args" | "address" | "abi" | "functionName"
> & { args: PanopticMintOptionsParameters };

export type SimulatePanopticMintOptionsReturnType<
  TChain extends Chain | undefined,
  TChainOverride extends Chain | undefined = undefined,
> = SimulateContractReturnType<
  typeof panopticPoolABI,
  "mintOptions",
  TChain,
  TChainOverride
>;

export const simulatePanopticMintOptions = <
  TChain extends Chain | undefined,
  TChainOverride extends Chain | undefined,
>(
  client: Client<Transport, TChain>,
  {
    args: { positions, amount },
    ...request
  }: SimulatePanopticMintOptionsParameters<TChain, TChainOverride>,
): Promise<SimulatePanopticMintOptionsReturnType<TChain, TChainOverride>> =>
  simulateContract(client, {
    address: positions[0]!.pool.address,
    abi: panopticPoolABI,
    functionName: "mintOptions",
    args: [positions.map((p) => p.id), amount, 0n, 0, 0],
    ...request,
  } as unknown as SimulateContractParameters<
    typeof panopticPoolABI,
    "mintOptions",
    TChain,
    TChainOverride
  >);
