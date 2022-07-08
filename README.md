# NFT
My first NFT Smart Contract using solidity and Hardhat <br/>
Add environment variables in environment file locally<br/>
ALCHEMY_KEY<br/>
ACCOUNT_PRIVATE_KEY<br/>
NETWORK<br/>
NFT_CONTRACT_ADDRESS<br/>

How to work with smartcontract using hardhat ?<br/>
1 . Without tasks <br/>
COMPILE :> npx hardhat compile<br/>
DEPLOY :> npx hardhat run scripts/deploy.js --network rinkeby <br/>

2.With tasks <br/>
COMPILE : npx hardhat compile<br/>
> npx ipfs-car --pack images --output images.car<br/>
> npx ipfs-car --pack metadata --output metadata.car<br/>
> npx hardhat check-balance<br/>
> npx hardhat deploy<br/>
> npx hardhat set-base-token-uri --base-url "https://bafybeif6iuokmmcuwj7jgscybx3gvlcwkb6ybspwcduivl7mbqmgmmxubi.ipfs.dweb.link/metadata/"<br/>
> npx hardhat mint --address 0xb9720BE63Ea8896956A06d2dEd491De125fD705E<br/>
> npx hardhat token-uri --token-id 1<br/>
> npx hardhat token-uri --token-id 2<br/>
> npx hardhat verify $NFT_CONTRACT_ADDRESS<br/>
