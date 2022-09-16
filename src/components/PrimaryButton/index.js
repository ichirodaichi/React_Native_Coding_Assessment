import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { COLORS } from '../../utils/Colors';
import { FONT_SIZE } from '../../utils/FontSizes'

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const PrimaryButton = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={
        disabled ? styles.disabledStyle :
          styles.primarybtn}
      onPress={onPress}
      disabled={disabled}>

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  primarybtn: {
    // fontFamily: FONT_NAME.Brown,

    borderRadius: widthPercentageToDP(4),
    backgroundColor: COLORS.ThemeColor,
    width: width * 0.90,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  disabledStyle: {
    // fontFamily: FONT_NAME.Brown,
    backgroundColor: COLORS.LightBlue,
    width: width * 0.82,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.White,
    fontWeight: 'bold',
    // fontStyle:''
    fontSize: FONT_SIZE.Medium,
    // fontFamily: FONT_NAME.Brown,
  },
});
