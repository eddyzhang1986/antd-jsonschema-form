module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transform: {
    '\\.js$': './node_modules/babel-jest',
    '\\.jsx$': './node_modules/babel-jest'
  },
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ]
};