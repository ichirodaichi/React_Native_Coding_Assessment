import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text
} from 'react-native';
import Header from '../../components/Header';
import { COLORS } from '../../utils/Colors';
import { STRINGS } from '../../utils/Strings';
import PrimaryButton from '../../components/PrimaryButton';
import ShadowedView, { ShadowedText, ShadowedChild } from '../../components/ShadowedView';
import { GlobalStyles } from '../../utils/GlobalStyles';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ConvertUSDToBitcoin, ConvertUSDToETH } from '../../utils/ExchangeHelpers';


const Confirmation = ({ navigation, route }) => {
    const price = route.params ? route.params.price : 0
    const [value, setValue] = useState(route.params ? route.params.usdPrice : '')
    return (
        <SafeAreaView style={GlobalStyles.baseview}>

            <Header headerText={STRINGS.Confrimation} onPressBack={() => navigation.goBack()} />

            <View style={GlobalStyles.container}>
                <View style={GlobalStyles.inputContainer}>
                    <Text style={GlobalStyles.txt}>{STRINGS.EnterPrice}</Text>
                    <Text style={GlobalStyles.inputText}>{value}</Text>
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
                        {/* <ShadowedChild firstText={"Quantity"}
                            secondText={"0.040141"} />
                        <ShadowedCenter isVisible={false} />
                        <ShadowedChild
                            secondText={"ETH"} /> */}
                    </ShadowedView>

                </View>
                <View style={GlobalStyles.container1}>
                    <Text style={GlobalStyles.txt}>{STRINGS.OrderText}</Text>
                    <Row firstText={"Form"} secondText={`Bitcoin ${ConvertUSDToBitcoin(price)} BTC`} />
                    <Row firstText={"To"} secondText={`Ethereum ${ConvertUSDToETH(price)}ETH`} />
                    <Row firstText={"Transaction Free (0.0%)"} secondText={'$0.0'} />
                    <Row firstText={"Total"} secondText={`${ConvertUSDToBitcoin(price)} BTC $${price}`} />
                </View>
            </View>

            <View style={GlobalStyles.primaryView}>
                <View style={GlobalStyles.underlineStyle} />
                <PrimaryButton text={STRINGS.ConfrimText} onPress={() => navigation.navigate('TransactionCompleted',{price: price})} />
            </View>

        </SafeAreaView>

    )
}


const Row = ({ firstText, secondText }) => {
    return (
        <View style={{
            alignItems: 'center',
            marginTop: 2,
            backgroundColor: COLORS.White, height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, borderRadius: 14

        }}>
            <Text style={{ color: COLORS.Grey }}>{firstText}</Text>
            <Text>{secondText} </Text>

        </View>
    )
}



export default Confirmation;