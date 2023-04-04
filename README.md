![](./_assets/_banner.png)

This repository contains an example implementation of a CCIP (Cross Chain Interoperability Protocol) resolver gateway/server.

## ❓ How to use

Feel free to [clone this repo](https://github.com/ensdomains/offchain-resolver-example/fork) and use it as a starting point for your own implementation. It contains everything you might need for running a basic resolver gateway/server that implements [EIP-3668](https://eips.ethereum.org/EIPS/eip-3668).

## 🏗️ Structure

This repository is split into two parts:

- `server/` - contains the gateway/server you run offchain
- `contracts/` - contains the smart contracts that are deployed on an EVM-compatible chain

## 🔗 Cross Chain Interoperability Protocol

The CCIP is a protocol that allows for the resolution of information on chains (or off-chain) from an EVM chain. It is based on the [EIP-3668](https://eips.ethereum.org/EIPS/eip-3668) standard and allows any smart contract to resolve information from an offchain gateway/server. In this repository you will find an example implementation of an ENS Off-chain Resolver, aswell as the matching smart contracts for loading the data.

## 📦 ensdomains/offchain-resolver

The [ensdomains/offchain-resolver](https://github.com/ensdomains/offchain-resolver) repository contains a more full implementation of an ENS Offchain Resolver, in addition to a worker, and smart contracts.

## 🙏 Attribution

This repository is heavily inspired by [ensdomains/offchain-resolver](https://github.com/ensdomains/offchain-resolver) and [v3xlabs/twitter.ngo](https://github.com/v3xlabs/twitter.ngo).
