"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App.jsx"));
require("./index.css");
var _reactRouterDom = require("react-router-dom");
var _NotFound = _interopRequireDefault(require("utils/NotFound404/NotFound404.jsx"));
var _Home = _interopRequireDefault(require("pages/Home/Home.jsx"));
var _Team = _interopRequireDefault(require("pages/Team/Team.jsx"));
var _MainLayout = _interopRequireDefault(require("components/Layout/MainLayout.jsx"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = [{
  path: "/",
  element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MainLayout["default"], {}),
  children: [{
    path: "/",
    element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Home["default"], {})
  }, {
    path: "/team",
    element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Team["default"], {})
  }]
}, {
  path: "*",
  element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_NotFound["default"], {})
}];
var router = (0, _reactRouterDom.createBrowserRouter)(routes);
//error in this file
_client["default"].createRoot(document.getElementById("root")).render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_react["default"].StrictMode, {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.RouterProvider, {
      router: router
    })
  })
}));
