import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import Header from '../../components/Header';
import { COLORS } from '../../utils/Colors';
import { STRINGS } from '../../utils/Strings';
import PrimaryButton from '../../components/PrimaryButton';
import ShadowedView, { ShadowedCenter, ShadowedChild, ShadowedText } from '../../components/ShadowedView';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import IMAGE_PATHS from '../../utils/ImagePaths';
import { FONT_SIZE } from '../../utils/FontSizes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ConvertUSDToETH } from '../../utils/ExchangeHelpers';

const ExchangeCrypto = ({ navigation }) => {

    const [priceText, setPriceText] = useState('$1.000');

    const [price, setPrice] = useState(1.000);

    return (
        <SafeAreaView style={GlobalStyles.baseview}>

            <Header headerText={STRINGS.ExchangeCryptoText} />

            <View style={GlobalStyles.container}>

                <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
                    <View style={GlobalStyles.exchangeTabView}>
                        <View style={GlobalStyles.buySellViewStyle}>
                            <Text style={GlobalStyles.buySellText}>Buy</Text>
                        </View>
                        <View style={{ borderRightWidth: 0.8, height: 10, alignSelf: 'center' }} />
                        <View style={GlobalStyles.buySellViewStyle}>

                            <Text style={GlobalStyles.buySellText}>Sell</Text>

                        </View>
                        <View style={[GlobalStyles.buySellViewStyle, { borderRadius: 6, backgroundColor: COLORS.White }]}>
                            <Text style={{ fontSize: FONT_SIZE.Small }}>Exchange</Text>
                        </View>
                    </View>
                </View>
                <View style={GlobalStyles.inputContainer}>
                    <Text style={GlobalStyles.txt}>{STRINGS.EnterPrice}</Text>
                    <Text
                        style={GlobalStyles.inputText}
                    >{priceText}</Text>
                </View>
                <View style={[GlobalStyles.container1, {
                    marginTop: heightPercentageToDP(4),
                }]}>
                    <Text style={GlobalStyles.txt}>{STRINGS.YouReceiveText}</Text>

                    <ShadowedView
                        extraStyle={GlobalStyles.extraView} >
                        <ShadowedChild firstText={"Quantity"}
                            secondText={ConvertUSDToETH(price)} />
                        <ShadowedText childText={"ETH"} />

                    </ShadowedView>


                </View>
                <View style={GlobalStyles.container1}>
                    <Text style={GlobalStyles.txt}>{STRINGS.ExchangeText}</Text>


                    <ShadowedView
                        extraStyle={{ width: '100%', height: heightPercentageToDP(8), backgroundColor: COLORS.White, marginTop: 10 }}

                    >

                        <ShadowedChild
                            icon={IMAGE_PATHS.BitcoinIcon}
                            firstText={"Form"}
                            secondText={"Bitcoin"}
                        />
                        <ShadowedCenter icon={IMAGE_PATHS.ExchangeIcon} />

                        <ShadowedChild
                            firstText={"To"}
                            secondText={"Ethereum"}
                            isReversed={true}
                            icon={IMAGE_PATHS.EthereumIcon} />
                    </ShadowedView>

                </View>

            </View>
            <Keypad

                value={priceText}
                onValueChange={(value) => {
                    if (!value.includes('$')) {
                        setPrice(value)
                        setPriceText(`$${value}`)
                    }
                    else {
                        let price = value.replace('$', '')
                        setPrice(price)
                        setPriceText(value)

                    }
                }}></Keypad>


            <View style={GlobalStyles.primaryView}>
                <View style={GlobalStyles.underlineStyle} />
                <PrimaryButton text={STRINGS.ConvertText} onPress={() => navigation.navigate('Confirmation', { usdPrice: priceText, price: price })} />
            </View>

        </SafeAreaView>

    )
}
const Keypad = ({ value, onValueChange }) => {

    const [input, setInput] = useState(value);

    const HandleChange = (value) => {
        let previous = input;
        if (value == 'x') {
            if (input.length > 0)
                previous = previous.slice(0, -1)
        }
        else {
            previous = previous + value.toString();
        }
        setInput(previous)
        // console.warn(' Key pad press ', previous)
        onValueChange(previous)


    }

    return (
        <View style={{ flex: 0.35, margin: 10 }}>
            <View style={styles.calView}>
                <KeypadButton buttonText={1} onPress={(value) => { HandleChange(value) }} />
                <KeypadButton buttonText={2} onPress={(value) => { HandleChange(value) }} />
                <KeypadButton buttonText={3} onPress={(value) => { HandleChange(value) }} />
            </View>
            <View style={[styles.calView, { marginTop: 5 }]}>
                <KeypadButton buttonText={4} onPress={(value) => { HandleChange(value) }} />
                <KeypadButton buttonText={5} onPress={(value) => { HandleChange(value) }} />
                <KeypadButton buttonText={6} onPress={(value) => { HandleChange(value) }} />
            </View>
            <View style={[styles.calView, { marginTop: 5 }]}>
                <KeypadButton buttonText={7} onPress={(value) => { HandleChange(value) }} />
                <KeypadButton buttonText={8} onPress={(value) => { HandleChange(value) }} />
                <KeypadButton buttonText={9} onPress={(value) => { HandleChange(value) }} />
            </View>
            <View style={[styles.calView, { marginTop: 5 }]}>
                <KeypadButton buttonText={'.'} onPress={(value) => { HandleChange(value) }} />
                <KeypadButton buttonText={0} onPress={(value) => { HandleChange(value) }} />
                <KeypadButton buttonText={'x'} onPress={(value) => { HandleChange(value) }} />
            </View>
        </View>
    )
}
const KeypadButton = ({ buttonText, onPress }) => {
    return (
        <TouchableOpacity
            style={GlobalStyles.calButtonView}
            onPress={() => onPress(buttonText)}
        >
            <Text style={GlobalStyles.calButtonText}>{buttonText}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    calView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})


export default ExchangeCrypto;
