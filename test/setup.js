if (typeof window !== 'undefined') {
  const matchMediaPolyfill = function matchMediaPolyfill() {
    return {
      matches: false,
      addListener: function () {
      },
      removeListener: function () {
      },
    };
  };
  window.matchMedia = window.matchMedia;
}