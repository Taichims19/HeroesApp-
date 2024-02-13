module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.cjs'],
  transformIgnorePatterns: [
    "node_modules/(?!(query-string|decode-uri-component|split-on-first|filter-obj)/)",
  ],
  moduleNameMapper: { 
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js", 
    "\\.(css|less|scss|sass)$": "identity-obj-proxy" 
  }
};
