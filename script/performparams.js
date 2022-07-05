const toWei = ethers.utils.parseEther
//perform params
const isErc20Locker = false;
//eth params 
const lockerEth = "0x7849D7085C73692aBFe11F0565c69109b5272842";
const tokenEth = "0x0000000000000000000000000000000000000000";
const bridgeEth = "0x344ba03680DCD1C448429cB4b16132fd842f29eB"
const proverEth = "0x48D8317B1E6486b475898D26ADe2084Aea05Ae16"
const limitEth = "0x31D51A469428E8dc14859c9B2727909f164AC27c"

const minTransferedToken = 0
const maxTransferedToken = toWei('100000000000')
const bridgeEthAddBolckAdmin = "0xdf055236179D7295DAE562b0DfD1bd19EaCCF7d1"
const topInitBlock = '0x00f902dcb86900f866808080a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000f9024c80f90248f847a0ccfd761eff028cf33d7ccff2fab98da30ab4aed861333460efc2ecfe231568b7a0de47d9a3da684e301c79244927994ef1c87e9ccef59d4b8ba6a631819fb3469184fffffffff847a03d6f5bb35069dd3ba6916d3c4b9ea578e4947cdb4893684d760115f339843f2ea04718b071024ba74e7731d561a08efb881dff35f10aeaafff56f3ff30d37ec85984fffffffff847a04091670a5a82094d2c88f35ef356ab2693a37a42652f304fdb22423f995113c2a01ea3957767ba3bf1b96911dc9bacbac2b3698f3a660ecff6df30d889a52efca084fffffffff847a0526211e6cc766f2d8c2d9d07ad06d0ebe7a5b2a40617bacc143e17d8b874846da0ca7e96bf9355378369b03c4dfb4e1db8db927d94342715213f3f1edc8dda640284fffffffff847a0f0e65f7d833ea2516fe433b24530d92a52a11c67f0e6c2204dc9625d1923aacea028346c5574eb8c30ceb562021e5d02563574376133de95a258588db2083c35fc84fffffffff847a025e72e5f78c9047c2f5a4b773e52a848472248e27f27133589ace38cbcd0eaf3a04806b5cc9eddf2e98f71c713c6215a45ba8f42f7d699db2be7ad3cd3d697d5b284fffffffff847a0b281d45e0fd1af490f357186ea197c88ec3dad4b81e702d5092821d7a98ed047a0e667d755e6e771b38fa0fb5eebdabfca198be5f062a6763dc60d28d5c9de9a7284fffffffff847a0f66600f2962e18550e426f59b48f029deea01a9f4d91b48f640bc8e693e6cdc9a0a8ec6322f4d01679815cd522315df1c09fdba7d4aaeef0f8edfbc08869c2e03084ffffffffc0'

//top params 
const lockerTop = "0xbb2572C8875c4A450ECa878BCe4000238D798E96";
const tokenTop = "0x88507fD7C860A500E66Ba454cFb76263cbB42919";
const limitTop = "0xBcC695Db281868cecF024d1143aC3AC18B3a49AC"

module.exports = {
    isErc20Locker,lockerEth,tokenEth,limitEth,proverEth,bridgeEth,lockerTop,tokenTop,limitTop,minTransferedToken,maxTransferedToken,bridgeEthAddBolckAdmin,topInitBlock
}
