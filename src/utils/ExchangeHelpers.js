const USDtoBitcoinRate = 0.000050;
const USDtoETHRate = 0.00063;

function ConvertUSDToBitcoin(uSDValue) {
    return uSDValue * USDtoBitcoinRate;
}

function ConvertUSDToETH(uSDValue) {
    return uSDValue * USDtoETHRate;
}

module.exports = { ConvertUSDToBitcoin, ConvertUSDToETH }