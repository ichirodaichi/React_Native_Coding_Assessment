import { StyleSheet } from 'react-native';
import { FONT_SIZE } from './FontSizes';
import { COLORS } from './Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const GlobalStyles = StyleSheet.create({
  SliderHeaderText: {
    fontSize: FONT_SIZE.ExtraLarge,
    // fontFamily: FONT_NAME.Brown,
    color: COLORS.Black,
  },
  InputField: {
    fontSize: FONT_SIZE.Medium,
    color: COLORS.LightGrey2, //'#B2B2B2',
    height: 50,
  },
  baseview: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  container: {
    flex: 0.9,
  },
  txt: {
    fontSize: FONT_SIZE.Small,
    fontWeight: 'bold',
    marginBottom: 4
  },
  inputText: {
    color: COLORS.ThemeColor,
    // marginTop: heightPercentageToDP(1),
    fontSize: FONT_SIZE.Large,
    fontWeight: 'bold'
  },
  inputContainer: {
    marginTop: heightPercentageToDP(2),
    alignItems: 'center'
  },
  container1: {
    fontSize: FONT_SIZE.Small,
    margin: 10,
    fontWeight: 'bold'
  },
  extraView: {
    width: '100%',
    height: heightPercentageToDP(8),
    backgroundColor: COLORS.White,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  calButtonView: {
    backgroundColor: COLORS.White,
    height: 38,
    borderRadius: 4,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowColor: COLORS.Grey,
    shadowRadius: 2,
    elevation: 4,
    alignItems: 'center',
    width: widthPercentageToDP(30)
  },
  calButtonText: {
    fontSize: FONT_SIZE.Medium,
    marginTop: 5,
    fontWeight: '600'
  },
  primaryView: {
    flex: 0.2,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  underlineStyle: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.LightBlue
  },
  exchangeTabView: {
    padding: 2,
    height: heightPercentageToDP(3.5),
    backgroundColor: COLORS.tabBg, 
    borderRadius: 6, 
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'stretch'
  },
  buySellViewStyle:{
    justifyContent: 'center',
     flex: 1, 
     alignItems: 'center'
  },
  buySellText:{
    fontSize:FONT_SIZE.Small,
    color:COLORS.Grey
  }
});
