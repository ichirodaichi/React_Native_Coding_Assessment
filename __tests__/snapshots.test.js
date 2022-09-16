import { render } from '@testing-library/react-native';
import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Header from '../src/components/Header';
import PrimaryButton from '../src/components/PrimaryButton';
import ShadowedView, { ShadowedChild } from '../src/components/ShadowedView';
import { COLORS } from '../src/utils/Colors';

test('Header renders correctly', () => {
    const snap = render(
        <Header
            headerText={"Hello"}
        />).toJSON();
    expect(snap).toMatchSnapshot();
});

test('Button renders correctly', () => {
    const snap = render(
        <PrimaryButton
            text={"Hello"}
            onPress={() => console.log("Working")} />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});

test('Shadowed Component renders correctly', () => {
    const snap = render(
        <ShadowedView
            extraStyle={{
                width: '100%',
                height: heightPercentageToDP(8),
                backgroundColor: COLORS.White
            }} />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});

test('Shadowed Child renders correctly', () => {
    const snap = render(
        <ShadowedChild
            firstText={"Bitcoin BTC"}
            secondText={"0.040141"} />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});