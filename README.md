# Simple NFT Minter

An expert-level repository for launching a non-fungible token (NFT) collection. This project follows the ERC-721 standard, allowing users to mint unique assets with metadata links (IPFS or HTTPS) for images and attributes.

## Features
* **ERC-721 Metadata Support:** Includes `tokenURI` for easy integration with marketplaces like OpenSea.
* **Auto-Incrementing IDs:** Secure, sequential token ID assignment.
* **Access Control:** Integrated ownership logic for administrative functions.

## Getting Started
1. Install dependencies: `npm install`.
2. Configure your `NFTMinter.sol` with a desired collection name and symbol.
3. Deploy and call `safeMint` with a destination address and a metadata URI.

## License
MIT
