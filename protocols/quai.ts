import { manualCliff, manualStep } from "../adapters/manual";
import { ProtocolV1 } from "../types/adapters";
import { periodToSeconds } from "../utils/time";
import { GAS_TOKEN } from "../utils/constants";
const initialSupply = 3_000_000_000
const foundationSplit = initialSupply * 0.33
const comunityIncentivesSplit = initialSupply * 0.23
const teamSplit = initialSupply * 0.16
const invesmentSplit = initialSupply * 0.14
const developmentSplit = initialSupply * 0.06
const testnetSplit = initialSupply * 0.05
const exchangeLiquiditySplit = initialSupply * 0.02

const quai: ProtocolV1 = {
  "Foundation": [manualCliff("2025-02-05", foundationSplit * 0.02), manualStep("2025-08-05", periodToSeconds.month, 66, (foundationSplit * 0.98) / 66)],
  "Community Incentives": [manualCliff("2025-02-05", comunityIncentivesSplit * 0.15), manualStep("2025-08-25", periodToSeconds.month, 42, (comunityIncentivesSplit * 0.85) / 42)],
  "Team": manualStep("2026-02-05", periodToSeconds.month, 36, teamSplit / 36),
  "Invesment Rounds": [manualCliff("2025-02-05", invesmentSplit * 0.25), manualStep("2026-02-05", periodToSeconds.month, 36, (invesmentSplit * 0.75) / 36)],
  "Development Company": [manualCliff("2025-02-05", developmentSplit * 0.25), manualStep("2025-08-05", periodToSeconds.month, 42, (developmentSplit * 0.75) / 42)],
  "Testnet & Earn program": manualCliff("2025-02-05", testnetSplit),
  "Exchange Liquidity": manualCliff("2025-02-05", exchangeLiquiditySplit),
  meta: {
    token: `quai:${GAS_TOKEN}`,
    notes: [
      `Information on the Early Contributor vesting schedule structure could not be found, here we have assumed it as linearly unlocked over 4 years.`,
      `The Ethereum Foundation supply is assumed to be unlocked when there's an outflow from EthDev address.`,
      `Issuance is combination of PoW and PoS issuance, with Uncle Rewards and EIP-1559 burning included`,
    ],
    sources: [
      "https://dune.com/21co/ethereum-key-metrics",
      "https://www.galaxy.com/insights/research/breakdown-of-ethereum-supply-distribution-since-genesis/",
      "https://fastercapital.com/topics/common-token-vesting-strategies-for-airdrop-cryptocurrency.html",
    ],
    protocolIds: ["parent#quai"],
    chain: "quai",
  },
  categories: {
    farming: ["Community Incentives", "Testnet & Earn program"],
    privateSale: ["Invesment Rounds"],
    insiders: ["Team", "Development Company"],
    liquidity: ["Exchange Liquidity"],
    noncirculating: ["Foundation"]
  },
};
export default quai;