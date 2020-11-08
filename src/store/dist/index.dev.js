"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _products = _interopRequireDefault(require("./modules/products"));

var _cart = _interopRequireDefault(require("./modules/cart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _vuex.createStore)({
  modules: {
    prods: _products["default"],
    cart: _cart["default"]
  },
  state: function state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    login: function login(state) {
      state.isLoggedIn = true;
    },
    logout: function logout(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login: function login(context) {
      context.commit('login');
    },
    logout: function logout(context) {
      context.commit('logout');
    }
  },
  getters: {
    isAuthenticated: function isAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});
var _default = store;
exports["default"] = _default;