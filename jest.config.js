module.exports = {
    preset: 'react-native',
    // verbose: true,
    // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // clearMocks: true,
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    setupFiles: [
        "./jest.setup.js",
    ],
    // collectCoverageFrom: ['app/*/.{js,jsx,ts,tsx}'],
    // coverageReporters: ['lcov', 'text-summary'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/file_transformer.js',
    },
};