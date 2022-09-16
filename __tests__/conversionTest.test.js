import { ConvertUSDToBitcoin, ConvertUSDToETH } from "../src/utils/ExchangeHelpers";

const mockVariables =
{
    usdToBitcoin: 0.000050,
    usdtoETHRate: 0.00063,
}


test('Convert USD to Bitcoin Test', () => {
    expect(ConvertUSDToBitcoin(1)).toBe(mockVariables.usdToBitcoin);
});

test('Convert USD to EtH Test', () => {
    expect(ConvertUSDToETH(1)).toBe(mockVariables.usdtoETHRate);
});