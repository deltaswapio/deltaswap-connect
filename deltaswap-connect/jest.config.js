module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@deltaswapio/deltaswap-sdk/lib/esm': '@deltaswapio/deltaswap-sdk/lib/cjs',
  },
};
