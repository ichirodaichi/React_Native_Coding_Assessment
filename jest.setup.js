/* eslint-disable no-undef */

import "react-native-gesture-handler/jestSetup"


// -------------------- React Navigation --------------------
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(() => ({
    getState: jest.fn(),
    canGoBack: jest.fn(),
    addListener: jest.fn(),
  })),
  useRoute: jest.fn(() => ({
    name: "",
  })),
}))

jest.mock("react-native-responsive-screen", () => ({
  widthPercentageToDP: jest.fn(),
  heightPercentageToDP: jest.fn(),
}))

