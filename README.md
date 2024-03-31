# kickstarter-contract
Kickstarter Smart Contract

## Getting Started
This is an example of how you can set up this project locally. To get a local copy up and running, follow these steps.

### Prerequisites
1. Must have a MetaMask Wallet Account.
2. We use Sepolia Network so we need to use a Sepolia faucet to obtain test ether.
Make sure you have MetaMask balance on Sepolia Network.

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/ras-24/kickstarter-contract.git
   ```
2. Go to kickstarter contract directory
   ```sh
   cd kickstarter-contract
   ```
3. Install NPM packages
   ```sh
   npm install --legacy-peer-deps
   ```
4. On ethereum/deploy.js file, please change to your MetaMask Seed Phrase and Infura Sepolia URL Endpoint
   ```sh
   const provider = new HDWalletProvider(
     'YOUR_METAMASK_SEED_PHRASE',
     // remember to change this to your own phrase!
     'YOUR_INFURA_SEPOLIA_URL_ENDPOINT'
     // remember to change this to your own endpoint!
   );
   ```
5. Go to ethereum directory
   ```sh
   cd ethereum
   ```
6. Deploy kickstarter contract
   ```sh
   node deploy.js
   ```
7. Copy **Contract Deployed Address** to ethereum/factory.js file
   ```sh
   const instance = new web3.eth.Contract(
     JSON.parse(CampaignFactory.interface),
     'YOUR_CONTRACT_DEPLOYED_ADDRESS'
     // remember to change this to your own contract deployed address!
   );
   ```
8. On ethereum/web3.js file, please change to your Infura Sepolia URL Endpoint
   ```sh
   } else {
     // We are on the server *OR* the user is not running metamask
     const provider = new Web3.providers.HttpProvider(
       'YOUR_INFURA_SEPOLIA_URL_ENDPOINT'
       // remember to change this to your own endpoint!
     );
     web3 = new Web3(provider);
   }
   ```   
9. Run kickstarter contract
   ```sh
   npm run dev
   ```

## License

Distributed under the MIT License. See `LICENSE` for more information.
