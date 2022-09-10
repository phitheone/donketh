/* 
       ___  ___    _  _  ___  _____   __  __             _         _   
 _ _  |_  )|   \  | \| || __||_   _| |  \/  | __ _  _ _ | |__ ___ | |_ 
| ' \  / / | |) | | .` || _|   | |   | |\/| |/ _` || '_|| / // -_)|  _|
|_||_|/___||___/  |_|\_||_|    |_|   |_|  |_|\__,_||_|  |_\_\\___| \__|
                                                                    
Update values accordingly
xxnft is the NFT SmartContract Address
xxmarket is the NFT MarketPlace Address
xxresell is the NFT MarketResell Address
xxnftcol is the already create NFT Collection Address
*/

/*
Private Key Encryption
Replace ethraw with your private key "0xPRIVATEKEY" (Ethereum and other EVM)
Replace hhraw with your private key "0xPRIVATEKEY" (Hardhat)
*/

import SimpleCrypto from "simple-crypto-js";
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgtjkhnkj";
// const ethraw = "0xa183c2f8c9480aa8be6c59f4263923911079a0a516c90eb9c0c8c480c5a81f93";
// const hhraw = "0xa183c2f8c9480aa8be6c59f4263923911079a0a516c90eb9c0c8c480c5a81f93";
const ethraw =
  "0x8d916ca08dac2f8b7e005425f97679a83c2f57ba43efaa3b2e3feae42613e265";
const hhraw =
  "0x8d916ca08dac2f8b7e005425f97679a83c2f57ba43efaa3b2e3feae42613e265";
export const simpleCrypto = new SimpleCrypto(cipherKey);
export const cipherEth = simpleCrypto.encrypt(ethraw);
export const cipherHH = simpleCrypto.encrypt(hhraw);

/*
HardHat Testnet
*/

// export var hhresell = "0x726798225D5729a248e864B356a1408e5cc0a80f";
// export var hhnftcol = "0xDB0cE1bE9e1c7E5FB4b30B8Ede7Af1105f9B8Ed4";
var hhrpc = "https://rpc01-sg.dogechain.dog";

/*
tbnb
*/

export var hhresell = "0xbF349891AA03cebbE12bc0a36A75fB57E752bAd4";
export var hhnftcol = "0x4EcE540DF586Bf32618ce7430090624e746d1822";

var tesnet = "https://data-seed-prebsc-1-s3.binance.org:8545/";

//doge

export var dogesell = "0xbF349891AA03cebbE12bc0a36A75fB57E752bAd4";
export var dogenftcol = "0x4EcE540DF586Bf32618ce7430090624e746d1822";
// export var dogenft = "0x726798225D5729a248e864B356a1408e5cc0a80f"; //edit
// export var dogemarket = "0x726798225D5729a248e864B356a1408e5cc0a80f"; //edit
export var dogerpc = "https://rpc01-sg.dogechain.dog";
/*
Global Parameters
*/
// export var mainnet = hhrpc

export var mainnet = dogerpc;
