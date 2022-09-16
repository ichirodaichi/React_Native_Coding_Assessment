import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../utils/Colors';
import { FONT_SIZE } from '../../utils/FontSizes';
import IMAGE_PATHS from '../../utils/ImagePaths';

const Header = props => {
  const { headerText, onPressBack, onPressRightIcon } =
    props;
  return (
    <View style={{ paddingBottom: wp(0.4) }}>
      <View
        style={{
        
          position: 'relative',
          paddingHorizontal: wp(2),
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          width: wp(100),
          flexDirection: 'row',
          backgroundColor: COLORS.bgColor,
          height: wp(100) / 7,
        }}>


        <View
          style={{
            width: wp(92),

            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={onPressBack}>
            <Image source={IMAGE_PATHS.BackIcon} resizeMode={'contain'} />

          </TouchableOpacity>
          <Text
            style={{
              fontSize: FONT_SIZE.Medium,
              fontWeight: 'bold'
            }}>
            {headerText}
          </Text>

          <TouchableOpacity>
            <Image source={IMAGE_PATHS.InfoIcon} resizeMode={'contain'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header
