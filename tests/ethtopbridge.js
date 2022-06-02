const { expect } = require("chai");
const { call } = require('./helpers/call')
const hardhat = require('hardhat')
const { deployContract } = require('ethereum-waffle')
const { deployMockContract } = require('./helpers/deployMockContract')
const { AddressZero } = require("ethers").constants

const toWei = ethers.utils.parseEther

const overrides = { gasLimit: 9500000 }

describe('TopPridge', () => {

  let wallet, wallet2,wallet3
  let topBridge

  beforeEach(async () => {
    [wallet, wallet2,wallet3] = await hardhat.ethers.getSigners()
    provider = hardhat.ethers.provider

    const TopBridge =  await hre.ethers.getContractFactory("TopPridgeTest", wallet, overrides)
    topBridge = await TopBridge.deploy()

    console.log("wallet>>>> "  + wallet.address)

    console.log("topBridge>>>> "  + topBridge.address)

    await topBridge.initialize(1,wallet.address)

  })

  describe('blockHashes', () => {
    it('It is empty', async () => {
      let isSave = await topBridge.blockHashes('0x0000000000000000000000000000000000000000000000000000000000a4814d');
      console.log("isSave: " + isSave)
    })

  })
  
  describe('initWithBlock', () => {
    it('initWithBlock', async () => {
      let initData = '0xf902faf8a980808080a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000008011c0f90228f843a01f49cece388273d5fbf8248d023143428ac035ff2edb57d2c3ad80f9de24e40fa0334e7866658e01fd2f23d0cf8a2a56ef849a05a056ef9618089db89ed4b9b59480f843a05fcaf45a46bace3b25acec4ed00e34ef65a28f354dfdbf20010f59d231b3f9bfa059d1b64da30c75c05d10e16b3c6716537b1c398e4e6c2ec0b3a8d16beafc0b5980f843a024c107a15840045be1176e681252000cd49357ac1eb3dfb91da2f5380aa6c67fa02586dab5dae8030b93076cc397129d5319e431a42cd0ce8bf37ba3fb6ffdf91180f843a07e114de9907a9623f7a33a9cab75d7d7f97194eb6c569c0d2c9d1f52a2b6a4bca0290aee80ae525e79b01e47ccef4dfa73a88762c27181704a9901df10c045646f80f843a0f90e2bc1e2e74e606b294f9d6eb1b2631efcd47fbbeb228b46cdc8c1ed281f71a027963972089d6355bea43c39835141d06f43975b254ce7cbe97ebd32c801d82c01f843a0c1e8fada4ae896ffe973b913c81e50834a0ed7d4355667841fcb1d514c216b01a064efb5e3126d95cac81ae1d87924fd0408a83e1b33f4f4b941b1c7c256f3567c80f843a0da65a9248d67db1d7ec33609600eb8fe68e9f91d89e3629c0f946d7dc3781518a03f42be47ac7176b9bb3eec681d557cefa009fd0eca223b8e6f98c898f43f68e980f843a0191e3e4fc0e05827601d746723482d6675ff2b3080388ca9c09b1444a7cd0bada00cd3ec900d51eab003000aa5ec71e9e3a8508e028c7a98955ecac2d16c6554b080'
      await topBridge.initWithBlock(initData);
    })

  })

  describe('getClientBlock', () => {
    it('getClientBlock', async () => {
      let data = '0xf902faf8a980808080a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000008011c0f90228f843a01f49cece388273d5fbf8248d023143428ac035ff2edb57d2c3ad80f9de24e40fa0334e7866658e01fd2f23d0cf8a2a56ef849a05a056ef9618089db89ed4b9b59480f843a05fcaf45a46bace3b25acec4ed00e34ef65a28f354dfdbf20010f59d231b3f9bfa059d1b64da30c75c05d10e16b3c6716537b1c398e4e6c2ec0b3a8d16beafc0b5980f843a024c107a15840045be1176e681252000cd49357ac1eb3dfb91da2f5380aa6c67fa02586dab5dae8030b93076cc397129d5319e431a42cd0ce8bf37ba3fb6ffdf91180f843a07e114de9907a9623f7a33a9cab75d7d7f97194eb6c569c0d2c9d1f52a2b6a4bca0290aee80ae525e79b01e47ccef4dfa73a88762c27181704a9901df10c045646f80f843a0f90e2bc1e2e74e606b294f9d6eb1b2631efcd47fbbeb228b46cdc8c1ed281f71a027963972089d6355bea43c39835141d06f43975b254ce7cbe97ebd32c801d82c01f843a0c1e8fada4ae896ffe973b913c81e50834a0ed7d4355667841fcb1d514c216b01a064efb5e3126d95cac81ae1d87924fd0408a83e1b33f4f4b941b1c7c256f3567c80f843a0da65a9248d67db1d7ec33609600eb8fe68e9f91d89e3629c0f946d7dc3781518a03f42be47ac7176b9bb3eec681d557cefa009fd0eca223b8e6f98c898f43f68e980f843a0191e3e4fc0e05827601d746723482d6675ff2b3080388ca9c09b1444a7cd0bada00cd3ec900d51eab003000aa5ec71e9e3a8508e028c7a98955ecac2d16c6554b080'
      let client = await topBridge.getClientBlock(data);
      console.log("getClientBlock->>>>" + client)
  
    })
  })

  describe('getbatchClientBlock', () => {
    it('getbatchClientBlock', async () => {
      let data = '0xf90900b902fdf902faf8a980808080a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000008011c0f90228f843a01f49cece388273d5fbf8248d023143428ac035ff2edb57d2c3ad80f9de24e40fa0334e7866658e01fd2f23d0cf8a2a56ef849a05a056ef9618089db89ed4b9b59480f843a05fcaf45a46bace3b25acec4ed00e34ef65a28f354dfdbf20010f59d231b3f9bfa059d1b64da30c75c05d10e16b3c6716537b1c398e4e6c2ec0b3a8d16beafc0b5980f843a024c107a15840045be1176e681252000cd49357ac1eb3dfb91da2f5380aa6c67fa02586dab5dae8030b93076cc397129d5319e431a42cd0ce8bf37ba3fb6ffdf91180f843a07e114de9907a9623f7a33a9cab75d7d7f97194eb6c569c0d2c9d1f52a2b6a4bca0290aee80ae525e79b01e47ccef4dfa73a88762c27181704a9901df10c045646f80f843a0f90e2bc1e2e74e606b294f9d6eb1b2631efcd47fbbeb228b46cdc8c1ed281f71a027963972089d6355bea43c39835141d06f43975b254ce7cbe97ebd32c801d82c01f843a0c1e8fada4ae896ffe973b913c81e50834a0ed7d4355667841fcb1d514c216b01a064efb5e3126d95cac81ae1d87924fd0408a83e1b33f4f4b941b1c7c256f3567c80f843a0da65a9248d67db1d7ec33609600eb8fe68e9f91d89e3629c0f946d7dc3781518a03f42be47ac7176b9bb3eec681d557cefa009fd0eca223b8e6f98c898f43f68e980f843a0191e3e4fc0e05827601d746723482d6675ff2b3080388ca9c09b1444a7cd0bada00cd3ec900d51eab003000aa5ec71e9e3a8508e028c7a98955ecac2d16c6554b080b902fdf902faf8a980808080a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000008011c0f90228f843a01f49cece388273d5fbf8248d023143428ac035ff2edb57d2c3ad80f9de24e40fa0334e7866658e01fd2f23d0cf8a2a56ef849a05a056ef9618089db89ed4b9b59480f843a05fcaf45a46bace3b25acec4ed00e34ef65a28f354dfdbf20010f59d231b3f9bfa059d1b64da30c75c05d10e16b3c6716537b1c398e4e6c2ec0b3a8d16beafc0b5980f843a024c107a15840045be1176e681252000cd49357ac1eb3dfb91da2f5380aa6c67fa02586dab5dae8030b93076cc397129d5319e431a42cd0ce8bf37ba3fb6ffdf91180f843a07e114de9907a9623f7a33a9cab75d7d7f97194eb6c569c0d2c9d1f52a2b6a4bca0290aee80ae525e79b01e47ccef4dfa73a88762c27181704a9901df10c045646f80f843a0f90e2bc1e2e74e606b294f9d6eb1b2631efcd47fbbeb228b46cdc8c1ed281f71a027963972089d6355bea43c39835141d06f43975b254ce7cbe97ebd32c801d82c01f843a0c1e8fada4ae896ffe973b913c81e50834a0ed7d4355667841fcb1d514c216b01a064efb5e3126d95cac81ae1d87924fd0408a83e1b33f4f4b941b1c7c256f3567c80f843a0da65a9248d67db1d7ec33609600eb8fe68e9f91d89e3629c0f946d7dc3781518a03f42be47ac7176b9bb3eec681d557cefa009fd0eca223b8e6f98c898f43f68e980f843a0191e3e4fc0e05827601d746723482d6675ff2b3080388ca9c09b1444a7cd0bada00cd3ec900d51eab003000aa5ec71e9e3a8508e028c7a98955ecac2d16c6554b080b902fdf902faf8a980808080a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000008011c0f90228f843a01f49cece388273d5fbf8248d023143428ac035ff2edb57d2c3ad80f9de24e40fa0334e7866658e01fd2f23d0cf8a2a56ef849a05a056ef9618089db89ed4b9b59480f843a05fcaf45a46bace3b25acec4ed00e34ef65a28f354dfdbf20010f59d231b3f9bfa059d1b64da30c75c05d10e16b3c6716537b1c398e4e6c2ec0b3a8d16beafc0b5980f843a024c107a15840045be1176e681252000cd49357ac1eb3dfb91da2f5380aa6c67fa02586dab5dae8030b93076cc397129d5319e431a42cd0ce8bf37ba3fb6ffdf91180f843a07e114de9907a9623f7a33a9cab75d7d7f97194eb6c569c0d2c9d1f52a2b6a4bca0290aee80ae525e79b01e47ccef4dfa73a88762c27181704a9901df10c045646f80f843a0f90e2bc1e2e74e606b294f9d6eb1b2631efcd47fbbeb228b46cdc8c1ed281f71a027963972089d6355bea43c39835141d06f43975b254ce7cbe97ebd32c801d82c01f843a0c1e8fada4ae896ffe973b913c81e50834a0ed7d4355667841fcb1d514c216b01a064efb5e3126d95cac81ae1d87924fd0408a83e1b33f4f4b941b1c7c256f3567c80f843a0da65a9248d67db1d7ec33609600eb8fe68e9f91d89e3629c0f946d7dc3781518a03f42be47ac7176b9bb3eec681d557cefa009fd0eca223b8e6f98c898f43f68e980f843a0191e3e4fc0e05827601d746723482d6675ff2b3080388ca9c09b1444a7cd0bada00cd3ec900d51eab003000aa5ec71e9e3a8508e028c7a98955ecac2d16c6554b080'
      let client = await topBridge.getbatchClientBlock(data);
      console.log("getClientBlock->>>>" + client)
  
    })
  })

})
