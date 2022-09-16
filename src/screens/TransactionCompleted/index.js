import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Linking,
} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Header from '../../components/Header';
import PrimaryButton from '../../components/PrimaryButton';
import ShadowedView, { ShadowedCenter, ShadowedChild } from '../../components/ShadowedView';
import { COLORS } from '../../utils/Colors';
import { ConvertUSDToBitcoin, ConvertUSDToETH } from '../../utils/ExchangeHelpers';
import { FONT_SIZE } from '../../utils/FontSizes';
import { GlobalStyles } from '../../utils/GlobalStyles';
import IMAGE_PATHS from '../../utils/ImagePaths';
import { STRINGS } from '../../utils/Strings';


const TransactionCompleted = ({ navigation, route }) => {
    const price = route.params ? route.params.price : 0

    return (
        <SafeAreaView style={GlobalStyles.baseview}>

            <Header headerText={STRINGS.TransactionCompleteText}
                onPressBack={() => { navigation.goBack() }}
                onPressRightIcon={() => { }}

            />

            <View style={{ flex: 0.52, alignItems: 'center', justifyContent: 'flex-end' }}>

                <Image style={{ height: '80%' }} resizeMode='contain' source={IMAGE_PATHS.Illustration} />

            </View>

            <View style={{

                flex: 0.28, alignItems: 'center', paddingHorizontal: 20,

                justifyContent: 'space-evenly'

            }}>

                <Text style={{

                    fontSize: FONT_SIZE.ExtraLarge,

                    color: COLORS.Black,

                    fontWeight: '600',
                    marginTop: 10

                }}>

                    {STRINGS.ExchangeSuccessfulTitle}

                </Text>

                <Text>

                    {STRINGS.ExchangeSuccessfulText}

                </Text>
                <ShadowedView

                    extraStyle={{ width: '100%', height: heightPercentageToDP(8), backgroundColor: COLORS.White }} >

                    <ShadowedChild firstText={"Bitcoin BTC"}

                        secondText={ConvertUSDToBitcoin(price)} />

                    <ShadowedCenter icon={IMAGE_PATHS.ArrowIcon} />

                    <ShadowedChild firstText={"Ethereum ETH"}

                        secondText={ConvertUSDToETH(price)} />

                </ShadowedView>

            </View>

            <View style={GlobalStyles.primaryView}>
            <View style={GlobalStyles.underlineStyle} />
                <PrimaryButton text={STRINGS.DoneText} />
            </View>

        </SafeAreaView>
    )

}

export default TransactionCompleted;
