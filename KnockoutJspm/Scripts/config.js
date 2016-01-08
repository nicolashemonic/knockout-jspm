System.config({
  baseURL: "/Scripts",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "jquery": "github:components/jquery@1.11.3",
    "knockout": "github:knockout/knockout@3.3.0",
    "ko-hello-world": "node_modules/ko-hello-world/ko-hello-world",
    "typescript": "npm:typescript@1.6.2",
    "underscore": "npm:underscore@1.8.3"
  }
});
