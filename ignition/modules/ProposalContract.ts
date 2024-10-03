// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const ProposalContractModule = buildModule("ProposalContractModule", (m) => {


  const proposalcontract = m.contract("ProposalContract");

  return { proposalcontract  };
});

export default ProposalContractModule;
