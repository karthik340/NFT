const {task} = require("hardhat/config");
const {getAccount} = require("./helpers");


task("check-balance","prints out the balace of your account").setAction(async function (taskArguments,hre){
    const account = getAccount();
    console.log(`Account balance for ${account.address}: ${await account.getBalance()}`);
});

task("deploy","Deploy the NFT.sol").setAction(async function (taskArguments,hre){
    const nftContractFactory = await hre.ethers.getContractFactory("NFT",getAccount());
    const nft = await nftContractFactory.deploy();
    console.log(`Contract deployed to address : ${nft.address}`);
});

