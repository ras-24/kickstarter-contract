import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9c76A25c9963B1aFD69C65967Bf4DeC663C6cF79'
);

export default instance;
