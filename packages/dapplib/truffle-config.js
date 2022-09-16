require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue rifle rural hospital grid another army genuine'; 
let testAccounts = [
"0x6febbf714dd62882daac998d75fcd2a7239380ff81e60de1e353850104939966",
"0x7da772f2a701b7710f9b23a5f33fc0b10ca76c00f68f4c4d045424bc556251f7",
"0x4018184b061d3e970b362af2339443a7d834b91a77787dae86a1b0871ddf19f2",
"0x5c47808fd3a55646b9f61e71e68d1dc85e631bd8b94a6a179853e052c9e00a0d",
"0x3a8b556b6aa930cec585f363e828657aa73cb898b97a5f06961f9c1531db765b",
"0x0ec9048a773d52f8d5e161be8393152e6812e5e331bbc9e50bcb91b93a39a7d1",
"0xe6dead6834b465bbc82388d4ccf1b49104129ace1e27222135d3f97c280e09a5",
"0xc8f53f325354216177bca9ce6eb8a0e9121f2e903957f1bc639e1fd4b8150549",
"0xd8498881eac4c83368fa0f3f016c18395f24f257ceed2327052cadb182cc4a68",
"0x17b2eb8d860bdfbeb13890b1cca718798d4f0b514ffc8fd7669240b06aee3817"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

