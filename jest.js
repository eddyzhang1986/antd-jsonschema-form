module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  moduleFileExtensions: [
    'jsx',
    'json'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '\\.jsx$': './node_modules/babel-jest'
  },
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ]
};