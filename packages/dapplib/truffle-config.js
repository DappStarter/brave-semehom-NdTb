require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strong razor remain public hunt hat army giggle'; 
let testAccounts = [
"0xfad2dcfab6a40d14b2639efb4aa25e357eb440d47bfededc2f91a9497107dceb",
"0xad2001b1df6c04f50f4ef67adca0290c87c4b49815f9f9556f22a59ecfb68276",
"0x3bdb3e107c35026093c5fe420ba68ae4c7a20f9d20b7176ae0c7c5d31ca5a361",
"0x92dd77b2def4f5e71c3fe609e2364782593cf87798d72524be77f6a800d0ea28",
"0xd384a8d921e947d87b942c51d0b4101e7cf21e0150bb1d55ffba511bcd25366a",
"0x79285dac65d8a2127f96d52b50466a7b376f482840fe499acb5d1491b38d5294",
"0x36184c4fc5f9a94be0b565060fef541372bcebe1cfb48a84819fc86a1b3f92b9",
"0x7a7a5cf5a250fa15cf4e1ae5e9c907b63c59742482ac726f4fc40848d0ecd577",
"0x8b76df8a471310aacd0257cb418cd4ef5b34712c9a0dae77e9f218bba4470c20",
"0x31688783bbc316aa57f3442d5251edbb90a802f997ffb05c6767e154d6cde6b8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

