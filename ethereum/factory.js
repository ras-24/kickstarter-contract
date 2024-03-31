import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  'YOUR_CONTRACT_DEPLOYED_ADDRESS'
  // remember to change this to your own contract deployed address!
);

export default instance;
