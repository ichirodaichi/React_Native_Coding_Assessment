import React, { Children } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { COLORS } from "../../utils/Colors";
import { FONT_SIZE } from "../../utils/FontSizes";
import IMAGE_PATHS from "../../utils/ImagePaths";


const ShadowedView = ({ extraStyle, children }) => {

    return (
        <View
            style={[{
                shadowOffset: {
                    width: 4,
                    height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.5,
                shadowColor: 'black',
                shadowRadius: 2,
                elevation: 5,
                padding: widthPercentageToDP(2),
                borderRadius: 14,
                flexDirection: 'row'
            }, extraStyle]}>
            {children}


        </View>
    )

}

export const ShadowedChild = ({ icon, firstText, secondText, isReversed }) => {
    return (

        <View style={{
            flex: 0.4,
            alignItems: 'center',
            flexDirection: isReversed? 'row-reverse':'row'
        }}>

            {icon &&
                <Image source={icon} style={{ width: 40 }}></Image>}
            <View style={{
                justifyContent: 'center',
                paddingHorizontal: 10,

            }} >

                <Text style={{
                    fontSize: FONT_SIZE.Small,
                    fontWeight: "400",
                    color: COLORS.Grey
                }}>
                    {firstText}
                </Text>
                <Text style={{
                    fontSize: FONT_SIZE.Small,
                    fontWeight: "400",
                    marginTop: 2,
                    color: COLORS.Black
                }}>
                    {secondText}
                </Text>
            </View>
        </View>
    )

}

export const ShadowedCenter = ({ isVisible = true, icon, isTouchable, onPress }) => {
    return (
        <TouchableOpacity
            disabled={!isTouchable}
            onPress={onPress}
            style={{ flex: 0.2, alignItems: 'flex-end' }}>
            {isVisible && <Image style={{ height: '100%' }} resizeMode={"contain"} source={icon} />
            }
        </TouchableOpacity>
    );

}

export const ShadowedText = ({ childText }) => {
    return (
        <View style={{ margin: 10, justifyContent: 'center' }}>
            <Text>{childText}</Text>
        </View>
    )
}


export default ShadowedView;

