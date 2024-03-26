import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2E5c830166F95a5E878fD6d6f90E1D63631DaF51'
);

export default instance;
