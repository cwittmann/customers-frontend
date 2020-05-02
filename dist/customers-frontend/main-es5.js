function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./customer/customer-list/customer-list.component */
    "./src/app/customer/customer-list/customer-list.component.ts");
    /* harmony import */


    var _customer_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer/customer-details/customer-details.component */
    "./src/app/customer/customer-details/customer-details.component.ts");
    /* harmony import */


    var _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./customer/customer-edit/customer-edit.component */
    "./src/app/customer/customer-edit/customer-edit.component.ts");
    /* harmony import */


    var _order_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order/order-details/order-details.component */
    "./src/app/order/order-details/order-details.component.ts");
    /* harmony import */


    var _order_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order/order-edit/order-edit.component */
    "./src/app/order/order-edit/order-edit.component.ts");
    /* harmony import */


    var _order_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./order/order-list/order-list.component */
    "./src/app/order/order-list/order-list.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _shared_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/services/authentication/auth-guard.service */
    "./src/app/shared/services/authentication/auth-guard.service.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
      path: 'customer',
      canActivate: [_shared_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
      children: [{
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }, {
        path: 'list',
        component: _customer_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomerListComponent"]
      }, {
        path: 'details/:id',
        component: _customer_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_3__["CustomerDetailsComponent"]
      }, {
        path: 'edit/:id',
        component: _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_4__["CustomerEditComponent"]
      }, {
        path: 'new',
        component: _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_4__["CustomerEditComponent"]
      }]
    }, {
      path: 'order',
      canActivate: [_shared_services_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
      children: [{
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }, {
        path: 'list',
        component: _order_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_7__["OrderListComponent"]
      }, {
        path: 'details/:id',
        component: _order_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsComponent"]
      }, {
        path: 'edit/:id',
        component: _order_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_6__["OrderEditComponent"]
      }, {
        path: 'new',
        component: _order_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_6__["OrderEditComponent"]
      }]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
      pathMatch: 'full'
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: '*',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./common-components/confirm-dialog/confirm-dialog.component */
    "./src/app/common-components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _common_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./common-components/modal-dialog/modal-dialog.component */
    "./src/app/common-components/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var _shared_services_database_indexed_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/services/database/indexed-database.service */
    "./src/app/shared/services/database/indexed-database.service.ts");
    /* harmony import */


    var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/services/user/user.service */
    "./src/app/shared/services/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/services/authentication/auth.service */
    "./src/app/shared/services/authentication/auth.service.ts");
    /* harmony import */


    var _shared_services_connection_connection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/services/connection/connection.service */
    "./src/app/shared/services/connection/connection.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return {
        exact: false
      };
    };

    function AppComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Customers");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
      }
    }

    function AppComponent_div_7_img_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_7_img_2_Template_img_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r75.goOffline($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_7_img_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_7_img_3_Template_img_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r77.goOnline($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_7_Template_img_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r79.showProfile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_7_img_2_Template, 1, 0, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_7_img_3_Template, 1, 0, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_7_Template_img_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r80);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r81.logout($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.isOnline);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r72.isOnline);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(dialog, IndexedDatabaseService, userService, router, authService, connectionService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.dialog = dialog;
        this.IndexedDatabaseService = IndexedDatabaseService;
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.connectionService = connectionService;
        this.title = 'customers';
        this.isAuthenticated = false;
        authService.userAuthenticated.subscribe(function (isAuthenticated) {
          _this.isAuthenticated = isAuthenticated;
        });
        connectionService.connectionChanged.subscribe(function (isOnline) {
          _this.isOnline = isOnline;
        });
      }

      _createClass(AppComponent, [{
        key: "goOffline",
        value: function goOffline(event) {
          this.connectionService.goOffline();
        }
      }, {
        key: "goOnline",
        value: function goOnline(event) {
          this.connectionService.goOnline();
        }
      }, {
        key: "showProfile",
        value: function showProfile(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var dialogConfig, userId, users, user;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
                    dialogConfig.disableClose = true;
                    dialogConfig.id = 'modal-component';
                    userId = this.authService.getCurrentUserId();
                    _context.next = 6;
                    return this.userService.getUser(userId);

                  case 6:
                    users = _context.sent;
                    user = users[0];
                    dialogConfig.data = {
                      title: user.username,
                      object: user
                    };
                    this.dialog.open(_common_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ModalDialogComponent"], dialogConfig);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout(event) {
          var _this2 = this;

          var dialogData = new _common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModel"]('Logout', 'Do you want to logout?');
          var dialogRef = this.dialog.open(_common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            maxWidth: '400px',
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            var result = dialogResult;

            if (result) {
              _this2.authService.logout();

              _this2.router.navigate(['/login']);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IndexedDatabaseService.ngOnInit();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_database_indexed_database_service__WEBPACK_IMPORTED_MODULE_5__["IndexedDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_connection_connection_service__WEBPACK_IMPORTED_MODULE_9__["ConnectionService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-lg"], ["src", "../../../assets/icons/logo.png", 1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["class", "collapse navbar-collapse", "id", "navbarNavAltMarkup", 4, "ngIf"], ["class", "menu-actions", 4, "ngIf"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLinkActive", "active-link", "routerLink", "/customer", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active-link", "routerLink", "/order", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], [1, "menu-actions"], ["src", "../../../assets/icons/profile.png", 1, "menu-item", "profile", 3, "click"], ["class", "menu-item onlineOffline", "src", "../../../assets/icons/online.png", 3, "click", 4, "ngIf"], ["class", "menu-item onlineOffline", "src", "../../../assets/icons/offline.png", 3, "click", 4, "ngIf"], ["src", "../../../assets/icons/logout.png", 1, "menu-item", "settings", 3, "click"], ["src", "../../../assets/icons/online.png", 1, "menu-item", "onlineOffline", 3, "click"], ["src", "../../../assets/icons/offline.png", 1, "menu-item", "onlineOffline", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Customers Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_6_Template, 6, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_div_7_Template, 5, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"]],
      styles: ["nav[_ngcontent-%COMP%] {\n  background: #070d14;\n  box-shadow: 2vw 2vw 5vw black;\n  opacity: 0.8;\n}\n\nh1[_ngcontent-%COMP%] {\n  display: inline;\n  color: white;\n  font-family: Colus, serif;\n  font-size: calc(8px + 1vw);\n  vertical-align: middle;\n}\n\n.logo[_ngcontent-%COMP%] {\n  left: 0;\n  margin: 1vw;\n  width: calc(16px + 1.5vw);\n  position: relative;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  margin: 0 0 0 1vw;\n  font-size: calc(12px + 0.5vw);\n  color: white;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  color: #b35e8f;\n}\n\n.menu-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  display: inline;\n}\n\n.onlineOffline[_ngcontent-%COMP%] {\n  width: calc(16px + 1.5vw);\n}\n\n.profile[_ngcontent-%COMP%] {\n  width: calc(16px + 1.5vw);\n}\n\n.settings[_ngcontent-%COMP%] {\n  width: calc(16px + 1.5vw);\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  margin: 1vw;\n}\n\n.menu-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2pla3RlXFxDdXN0b21lclxcY3VzdG9tZXJzLWZyb250ZW5kXFxjdXN0b21lcnMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIGJhY2tncm91bmQ6ICMwNzBkMTQ7XHJcbiAgYm94LXNoYWRvdzogMnZ3IDJ2dyA1dncgYmxhY2s7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogQ29sdXMsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogMXZ3O1xyXG4gIHdpZHRoOiBjYWxjKDE2cHggKyAxLjV2dyk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIG1hcmdpbjogMCAwIDAgMXZ3O1xyXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC41dncpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFjdGl2ZS1saW5rIHtcclxuICBjb2xvcjogI2IzNWU4ZjtcclxufVxyXG5cclxuLm1lbnUtYWN0aW9ucyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLm9ubGluZU9mZmxpbmUge1xyXG4gIHdpZHRoOiBjYWxjKDE2cHggKyAxLjV2dyk7XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICB3aWR0aDogY2FsYygxNnB4ICsgMS41dncpO1xyXG59XHJcblxyXG4uc2V0dGluZ3Mge1xyXG4gIHdpZHRoOiBjYWxjKDE2cHggKyAxLjV2dyk7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gIG1hcmdpbjogMXZ3O1xyXG59XHJcblxyXG4ubWVudS1pdGVtOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwibmF2IHtcbiAgYmFja2dyb3VuZDogIzA3MGQxNDtcbiAgYm94LXNoYWRvdzogMnZ3IDJ2dyA1dncgYmxhY2s7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuaDEge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IENvbHVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDF2dyk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvIHtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAxdnc7XG4gIHdpZHRoOiBjYWxjKDE2cHggKyAxLjV2dyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1saW5rIHtcbiAgbWFyZ2luOiAwIDAgMCAxdnc7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC41dncpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gIGNvbG9yOiAjYjM1ZThmO1xufVxuXG4ubWVudS1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ub25saW5lT2ZmbGluZSB7XG4gIHdpZHRoOiBjYWxjKDE2cHggKyAxLjV2dyk7XG59XG5cbi5wcm9maWxlIHtcbiAgd2lkdGg6IGNhbGMoMTZweCArIDEuNXZ3KTtcbn1cblxuLnNldHRpbmdzIHtcbiAgd2lkdGg6IGNhbGMoMTZweCArIDEuNXZ3KTtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIG1hcmdpbjogMXZ3O1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _shared_services_database_indexed_database_service__WEBPACK_IMPORTED_MODULE_5__["IndexedDatabaseService"]
        }, {
          type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _shared_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _shared_services_connection_connection_service__WEBPACK_IMPORTED_MODULE_9__["ConnectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _customer_customer_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./customer/customer-list */
    "./src/app/customer/customer-list/index.ts");
    /* harmony import */


    var _customer_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./customer/customer-details/customer-details.component */
    "./src/app/customer/customer-details/customer-details.component.ts");
    /* harmony import */


    var _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./customer/customer-edit/customer-edit.component */
    "./src/app/customer/customer-edit/customer-edit.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./common-components/confirm-dialog/confirm-dialog.component */
    "./src/app/common-components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _order_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./order/order-details/order-details.component */
    "./src/app/order/order-details/order-details.component.ts");
    /* harmony import */


    var _order_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./order/order-edit/order-edit.component */
    "./src/app/order/order-edit/order-edit.component.ts");
    /* harmony import */


    var _order_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./order/order-list/order-list.component */
    "./src/app/order/order-list/order-list.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _common_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./common-components/modal-dialog/modal-dialog.component */
    "./src/app/common-components/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _customer_customer_list__WEBPACK_IMPORTED_MODULE_7__["CustomerListComponent"], _customer_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_8__["CustomerDetailsComponent"], _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_9__["CustomerEditComponent"], _common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], _order_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailsComponent"], _order_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_15__["OrderEditComponent"], _order_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__["OrderListComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _common_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ModalDialogComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _customer_customer_list__WEBPACK_IMPORTED_MODULE_7__["CustomerListComponent"], _customer_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_8__["CustomerDetailsComponent"], _customer_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_9__["CustomerEditComponent"], _common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], _order_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailsComponent"], _order_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_15__["OrderEditComponent"], _order_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__["OrderListComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _common_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ModalDialogComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]],
          providers: [],
          entryComponents: [_common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], _common_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ModalDialogComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common-components/confirm-dialog/confirm-dialog.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/common-components/confirm-dialog/confirm-dialog.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ConfirmDialogComponent, ConfirmDialogModel */

  /***/
  function srcAppCommonComponentsConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function () {
      return ConfirmDialogModel;
    });
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfirmDialogComponent = /*#__PURE__*/function () {
      function ConfirmDialogComponent(dialogRef, data) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        this.message = data.message;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onConfirm",
        value: function onConfirm() {
          this.dialogRef.close(true);
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          this.dialogRef.close(false);
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
    };

    ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["app-confirm-dialog"]],
      decls: 10,
      vars: 2,
      consts: [[1, "text"], ["mat-dialog-actions", ""], ["mat-button", "", 1, "btn", "btn-primary", "btn-lg", "btn-danger", "shadow-none", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-primary", "btn-lg", "btn-success", "shadow-none", 3, "click"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
            return ctx.onDismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
            return ctx.onConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"]],
      styles: ["body[_ngcontent-%COMP%] {\n  padding: 10vw;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 1vw;\n  border-bottom: 0.2vw solid #b35e8f;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 0.2vw;\n  border: 0;\n  font-size: 2vw;\n  font-size: calc(8px + 0.5vw);\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: green;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvQzpcXFByb2pla3RlXFxDdXN0b21lclxcY3VzdG9tZXJzLWZyb250ZW5kXFxjdXN0b21lcnMvc3JjXFxhcHBcXGNvbW1vbi1jb21wb25lbnRzXFxjb25maXJtLWRpYWxvZ1xcY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBwYWRkaW5nOiAxMHZ3O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXZ3O1xyXG4gIGJvcmRlci1ib3R0b206IDAuMnZ3IHNvbGlkICNiMzVlOGY7XHJcbn1cclxuXHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luOiAwLjJ2dztcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcclxuICBhbmltYXRpb246IGZhZGVJbiAxcztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiBncmVlbjtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsImJvZHkge1xuICBwYWRkaW5nOiAxMHZ3O1xufVxuXG5oMiB7XG4gIG1hcmdpbi1ib3R0b206IDF2dztcbiAgYm9yZGVyLWJvdHRvbTogMC4ydncgc29saWQgI2IzNWU4Zjtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDAuMnZ3O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xuICBhbmltYXRpb246IGZhZGVJbiAxcztcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-confirm-dialog',
          templateUrl: './confirm-dialog.component.html',
          styleUrls: ['./confirm-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
        }, {
          type: ConfirmDialogModel,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var ConfirmDialogModel = function ConfirmDialogModel(title, message) {
      _classCallCheck(this, ConfirmDialogModel);

      this.title = title;
      this.message = message;
    };
    /***/

  },

  /***/
  "./src/app/common-components/modal-dialog/modal-dialog.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/common-components/modal-dialog/modal-dialog.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ModalDialogComponent */

  /***/
  function srcAppCommonComponentsModalDialogModalDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function () {
      return ModalDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../user/user.component */
    "./src/app/user/user.component.ts");

    var ModalDialogComponent = /*#__PURE__*/function () {
      function ModalDialogComponent(dialogRef, data) {
        _classCallCheck(this, ModalDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        this.object = data.object;
      }

      _createClass(ModalDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.dialogRef.close();
        }
      }]);

      return ModalDialogComponent;
    }();

    ModalDialogComponent.ɵfac = function ModalDialogComponent_Factory(t) {
      return new (t || ModalDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ModalDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalDialogComponent,
      selectors: [["app-modal-dialog"]],
      decls: 9,
      vars: 2,
      consts: [["id", "modal-content-wrapper"], [3, "object"], [1, "btn", 3, "click"]],
      template: function ModalDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-user", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalDialogComponent_Template_button_click_7_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("object", ctx.object);
        }
      },
      directives: [_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]],
      styles: ["body[_ngcontent-%COMP%] {\n  padding: 10vw;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 1vw;\n  border-bottom: 0.2vw solid #b35e8f;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.text[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-top: 3vw;\n  border: 0;\n  font-size: 2vw;\n  background: #b35e8f;\n  color: white;\n  font-size: calc(8px + 0.5vw);\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: green;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvbW9kYWwtZGlhbG9nL0M6XFxQcm9qZWt0ZVxcQ3VzdG9tZXJcXGN1c3RvbWVycy1mcm9udGVuZFxcY3VzdG9tZXJzL3NyY1xcYXBwXFxjb21tb24tY29tcG9uZW50c1xcbW9kYWwtZGlhbG9nXFxtb2RhbC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi1jb21wb25lbnRzL21vZGFsLWRpYWxvZy9tb2RhbC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLWNvbXBvbmVudHMvbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIHBhZGRpbmc6IDEwdnc7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxdnc7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4ydncgc29saWQgI2IzNWU4ZjtcclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luLXRvcDogM3Z3O1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDJ2dztcclxuICBiYWNrZ3JvdW5kOiAjYjM1ZThmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiYm9keSB7XG4gIHBhZGRpbmc6IDEwdnc7XG59XG5cbmgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXZ3O1xuICBib3JkZXItYm90dG9tOiAwLjJ2dyBzb2xpZCAjYjM1ZThmO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5idG4ge1xuICBtYXJnaW4tdG9wOiAzdnc7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAydnc7XG4gIGJhY2tncm91bmQ6ICNiMzVlOGY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG59XG5cbi5idG4tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal-dialog',
          templateUrl: './modal-dialog.component.html',
          styleUrls: ['./modal-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/customer-details/customer-details.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/customer/customer-details/customer-details.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CustomerDetailsComponent */

  /***/
  function srcAppCustomerCustomerDetailsCustomerDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function () {
      return CustomerDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common-components/confirm-dialog/confirm-dialog.component */
    "./src/app/common-components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/customer/customer.service */
    "./src/app/shared/services/customer/customer.service.ts");
    /* harmony import */


    var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/order/order.service */
    "./src/app/shared/services/order/order.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/order/details", a1];
    };

    function CustomerDetailsComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, order_r8.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", order_r8.amount, " x ", order_r8.name, " (", order_r8.manufacturer, ") --- ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, order_r8.amount * order_r8.price), " ");
      }
    }

    function CustomerDetailsComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No orders ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a1) {
      return ["/customer/edit", a1];
    };

    var CustomerDetailsComponent = /*#__PURE__*/function () {
      function CustomerDetailsComponent(activatedRoute, router, customerService, orderService, dialog, snackBar) {
        _classCallCheck(this, CustomerDetailsComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.customerService = customerService;
        this.orderService = orderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
      }

      _createClass(CustomerDetailsComponent, [{
        key: "deleteCustomer",
        value: function deleteCustomer(event) {
          var _this3 = this;

          var dialogData = new src_app_common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModel"]('Confirm Action', 'Are you sure young want to delete customer?');
          var dialogRef = this.dialog.open(src_app_common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            maxWidth: '400px',
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            var result = dialogResult;

            if (result) {
              _this3.customerService.deleteCustomer(_this3.customer.id.toString());

              _this3.snackBar.open('Customer ' + _this3.customer.firstname + ' ' + _this3.customer.lastname + ' deleted', null, {
                duration: 5000
              });

              _this3.router.navigate(['/customer/list']);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var customers, customer;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.id = this.activatedRoute.snapshot.params.id;
                    _context2.next = 3;
                    return this.customerService.getCustomer(this.id);

                  case 3:
                    customers = _context2.sent;
                    customer = customers[0];
                    _context2.next = 7;
                    return this.orderService.getAllOrdersOfCustomer(this.id);

                  case 7:
                    customer.orders = _context2.sent;
                    this.customer = customer;

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CustomerDetailsComponent;
    }();

    CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) {
      return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
    };

    CustomerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CustomerDetailsComponent,
      selectors: [["app-customer-details"]],
      decls: 48,
      vars: 21,
      consts: [[1, "container-fluid"], [1, "row", "customer"], [1, "col", "data-column"], [1, "detailItem"], ["src", "../../../assets/icons/birth.png", 1, "icon"], ["src", "../../../assets/icons/gender.png", 1, "icon"], ["src", "../../../assets/icons/job.png", 1, "icon"], ["src", "../../../assets/icons/map.png", 1, "icon"], ["src", "../../../assets/icons/currency.png", 1, "icon"], ["src", "../../../assets/icons/phone.png", 1, "icon"], ["src", "../../../assets/icons/mail.png", 1, "icon"], [1, "w-100", "d-block", "d-md-none"], ["class", "detailItem orderLink", 3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "detailItem", 4, "ngIf"], [1, "w-100", "d-block", "d-lg-none"], ["src", "../../../assets/icons/issue.png", 1, "icon"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "shadow-none", 3, "routerLink"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "shadow-none", 3, "click"], ["type", "button", "routerLink", "/customer/list", 1, "btn", "btn-primary", "btn-lg", "shadow-none"], [1, "detailItem", "orderLink", 3, "routerLink"], ["src", "../../../assets/icons/order.png", 1, "icon"]],
      template: function CustomerDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "User Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CustomerDetailsComponent_div_33_Template, 4, 9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CustomerDetailsComponent_div_34_Template, 3, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "No issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerDetailsComponent_Template_button_click_44_listener($event) {
            return ctx.deleteCustomer($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Back to Customer List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.customer.title, " ", ctx.customer.firstname, " ", ctx.customer.lastname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 16, ctx.customer.birthdate, "longDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customer.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customer.job);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", ctx.customer.streetaddress, ", ", ctx.customer.postalcode, " ", ctx.customer.city, " (", ctx.customer.country, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customer.currency);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customer.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customer.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.customer.orders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.customer.orders.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c1, ctx.customer.id));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  margin: 2vw 2vw 2vw 0;\n  font-size: calc(12px + 1vw);\n  color: #d9eef5;\n}\n\n.data-column[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1vw;\n  font-size: calc(8px + 0.5vw);\n  font-weight: 400;\n}\n\n.detailItem[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  color: black;\n  margin: 1vw 1vw 1vw 0;\n  opacity: 0.9;\n  transition: background-color 0.25s;\n}\n\n.orderLink[_ngcontent-%COMP%] {\n  transition: color 0.25s, background-color 0.25s, padding 0.5s;\n}\n\n.orderLink[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #b35e8f;\n  color: white;\n  padding: 0.4vw;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin: 0 0.6vw 0 0;\n  width: calc(12px + 0.5vw);\n  height: calc(12px + 0.5vw);\n}\n\n.customer[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 1vw 0;\n  width: 90vw;\n  border: 0.2vw solid #b5dce9;\n  background: white;\n  opacity: 0.95;\n  -webkit-animation: enterFromRight 0.5s;\n          animation: enterFromRight 0.5s;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0.2vw;\n  background: #b35e8f;\n  font-size: calc(8px + 0.5vw);\n  -webkit-animation: fadeIn 1.5s;\n          animation: fadeIn 1.5s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZGV0YWlscy9DOlxcUHJvamVrdGVcXEN1c3RvbWVyXFxjdXN0b21lcnMtZnJvbnRlbmRcXGN1c3RvbWVycy9zcmNcXGFwcFxcY3VzdG9tZXJcXGN1c3RvbWVyLWRldGFpbHNcXGN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSw2REFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgbWFyZ2luOiAydncgMnZ3IDJ2dyAwO1xyXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcclxuICBjb2xvcjogI2Q5ZWVmNTtcclxufVxyXG5cclxuLmRhdGEtY29sdW1uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMXZ3O1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmRldGFpbEl0ZW0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luOiAxdncgMXZ3IDF2dyAwO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xyXG59XHJcblxyXG4ub3JkZXJMaW5rIHtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cywgYmFja2dyb3VuZC1jb2xvciAwLjI1cywgcGFkZGluZyAwLjVzO1xyXG59XHJcblxyXG4ub3JkZXJMaW5rOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzNWU4ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC40dnc7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBtYXJnaW46IDAgMC42dncgMCAwO1xyXG4gIHdpZHRoOiBjYWxjKDEycHggKyAwLjV2dyk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEycHggKyAwLjV2dyk7XHJcbn1cclxuXHJcbi5jdXN0b21lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDF2dyAwO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGJvcmRlcjogMC4ydncgc29saWQgI2I1ZGNlOTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjk1O1xyXG4gIGFuaW1hdGlvbjogZW50ZXJGcm9tUmlnaHQgMC41cztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAwLjJ2dztcclxuICBiYWNrZ3JvdW5kOiAjYjM1ZThmO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG4iLCJoMSB7XG4gIG1hcmdpbjogMnZ3IDJ2dyAydncgMDtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxdncpO1xuICBjb2xvcjogI2Q5ZWVmNTtcbn1cblxuLmRhdGEtY29sdW1uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxdnc7XG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5kZXRhaWxJdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDF2dyAxdncgMXZ3IDA7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcbn1cblxuLm9yZGVyTGluayB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCBwYWRkaW5nIDAuNXM7XG59XG5cbi5vcmRlckxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMzVlOGY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC40dnc7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luOiAwIDAuNnZ3IDAgMDtcbiAgd2lkdGg6IGNhbGMoMTJweCArIDAuNXZ3KTtcbiAgaGVpZ2h0OiBjYWxjKDEycHggKyAwLjV2dyk7XG59XG5cbi5jdXN0b21lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDAgMXZ3IDA7XG4gIHdpZHRoOiA5MHZ3O1xuICBib3JkZXI6IDAuMnZ3IHNvbGlkICNiNWRjZTk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjk1O1xuICBhbmltYXRpb246IGVudGVyRnJvbVJpZ2h0IDAuNXM7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwLjJ2dztcbiAgYmFja2dyb3VuZDogI2IzNWU4ZjtcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-customer-details',
          templateUrl: './customer-details.component.html',
          styleUrls: ['./customer-details.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
        }, {
          type: src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/customer-edit/customer-edit.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/customer/customer-edit/customer-edit.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CustomerEditComponent */

  /***/
  function srcAppCustomerCustomerEditCustomerEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function () {
      return CustomerEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_model_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/customer */
    "./src/app/shared/model/customer.ts");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_enum_gender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/enum/gender */
    "./src/app/shared/enum/gender.ts");
    /* harmony import */


    var src_app_shared_enum_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/enum/title */
    "./src/app/shared/enum/title.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/customer/customer.service */
    "./src/app/shared/services/customer/customer.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CustomerEditComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", key_r25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r25);
      }
    }

    function CustomerEditComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Title is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_15_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.formControls.title.errors.required);
      }
    }

    function CustomerEditComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First name is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_21_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "First name should be at least 2 characters long.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_21_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerEditComponent_div_21_div_2_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.formControls.firstname.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.formControls.firstname.errors.minlength);
      }
    }

    function CustomerEditComponent_div_27_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Last name is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_27_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Last name should be at least 2 characters long.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_27_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerEditComponent_div_27_div_2_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.formControls.lastname.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.formControls.lastname.errors.minlength);
      }
    }

    function CustomerEditComponent_option_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", key_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r31);
      }
    }

    function CustomerEditComponent_div_34_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Gender is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_34_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.formControls.gender.errors.required);
      }
    }

    function CustomerEditComponent_div_46_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Birth date is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_46_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.formControls.birthdate.errors.required);
      }
    }

    function CustomerEditComponent_div_52_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Street address is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_52_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Street address should be at least 4 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_52_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerEditComponent_div_52_div_2_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.formControls.streetaddress.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.formControls.streetaddress.errors.minlength);
      }
    }

    function CustomerEditComponent_div_58_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Postal code is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_58_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Postal code should be at least 4 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_58_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerEditComponent_div_58_div_2_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.formControls.postalcode.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.formControls.postalcode.errors.minlength);
      }
    }

    function CustomerEditComponent_div_64_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "City is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_64_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " City should be at least 4 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_64_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerEditComponent_div_64_div_2_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.formControls.city.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.formControls.city.errors.minlength);
      }
    }

    function CustomerEditComponent_div_70_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Country code is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_70_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Country code should be exactly 2 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_70_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerEditComponent_div_70_div_2_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.formControls.country.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.formControls.country.errors.minlength || ctx_r19.formControls.country.errors.maxlength);
      }
    }

    function CustomerEditComponent_div_76_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Currency is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_76_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Currency should be at least 2 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_76_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerEditComponent_div_76_div_2_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.formControls.currency.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.formControls.currency.errors.minlength);
      }
    }

    function CustomerEditComponent_div_82_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Phone is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_82_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone should be at least 6 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_82_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerEditComponent_div_82_div_2_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.formControls.phone.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.formControls.phone.errors.minlength);
      }
    }

    function CustomerEditComponent_div_88_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "E-Mail is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_88_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " E-Mail should be at least 6 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CustomerEditComponent_div_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerEditComponent_div_88_div_1_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerEditComponent_div_88_div_2_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.formControls.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.formControls.email.errors.minlength);
      }
    }

    function CustomerEditComponent_button_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/customer/details", a1];
    };

    function CustomerEditComponent_button_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r24.customer.id));
      }
    }

    var CustomerEditComponent = /*#__PURE__*/function () {
      function CustomerEditComponent(activatedRoute, router, customerService, snackBar) {
        var _this4 = this;

        _classCallCheck(this, CustomerEditComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.customerService = customerService;
        this.snackBar = snackBar;
        this.isNew = false;
        this.genderTypes = src_app_shared_enum_gender__WEBPACK_IMPORTED_MODULE_5__["Gender"];
        this.genderTypeOptions = [];
        this.titleTypes = src_app_shared_enum_title__WEBPACK_IMPORTED_MODULE_6__["Title"];
        this.titleTypeOptions = [];
        this.activatedRoute.url.subscribe(function (params) {
          if (params[0].path === 'new') {
            _this4.isNew = true;
          }
        });
      }

      _createClass(CustomerEditComponent, [{
        key: "submit",
        value: function submit() {
          this.form.markAllAsTouched();

          if (this.form.invalid) {
            return;
          }

          this.customer = this.form.value;

          if (this.isNew) {
            this.customer.id = this.id;
            this.customerService.insertCustomer(this.customer);
            this.snackBar.open('Customer ' + this.customer.firstname + ' ' + this.customer.lastname + ' added', null, {
              duration: 5000
            });
            this.router.navigate(['/customer/list']);
          } else {
            this.customerService.updateCustomer(this.customer);
            this.snackBar.open('Customer ' + this.customer.firstname + ' ' + this.customer.lastname + ' updated', null, {
              duration: 5000
            });
            this.router.navigate(['/customer/details', this.customer.id]);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var uuid, customers;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.genderTypeOptions = Object.keys(this.genderTypes);
                    this.titleTypeOptions = Object.keys(this.titleTypes);
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                      firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
                      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
                      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                      gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                      job: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                      birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                      streetaddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]),
                      postalcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]),
                      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
                      country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(2)]),
                      currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
                      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
                      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])
                    });
                    this.id = this.activatedRoute.snapshot.params.id;

                    if (!this.isNew) {
                      _context3.next = 9;
                      break;
                    }

                    uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
                    this.id = uuid;
                    this.customer = new src_app_shared_model_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](this.id, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    return _context3.abrupt("return");

                  case 9:
                    _context3.next = 11;
                    return this.customerService.getCustomer(this.id);

                  case 11:
                    customers = _context3.sent;
                    this.customer = customers[0];
                    this.form.markAllAsTouched();
                    this.form.setValue(this.customer);

                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return CustomerEditComponent;
    }();

    CustomerEditComponent.ɵfac = function CustomerEditComponent_Factory(t) {
      return new (t || CustomerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
    };

    CustomerEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CustomerEditComponent,
      selectors: [["app-customer-edit"]],
      decls: 93,
      vars: 36,
      consts: [[1, "container-fluid"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-group"], ["for", "id"], ["formControlName", "id", "id", "id", "type", "text", "readonly", "", 1, "form-control", 3, "ngModel"], ["for", "title"], ["formControlName", "title", "id", "title", 1, "form-control", 3, "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "w-100", "d-block", "d-md-none"], ["for", "firstname"], ["formControlName", "firstname", "id", "firstname", "type", "text", 1, "form-control", 3, "ngModel"], ["for", "lastname"], ["formControlName", "lastname", "id", "lastname", "type", "text", 1, "form-control", 3, "ngModel"], ["for", "gender"], ["formControlName", "gender", "id", "gender", 1, "form-control", 3, "ngModel"], ["for", "job"], ["formControlName", "job", "id", "job", "type", "text", 1, "form-control", 3, "ngModel"], ["for", "birthdate"], ["formControlName", "birthdate", "id", "birthdate", "type", "date", 1, "form-control", 3, "ngModel"], ["for", "streetaddress"], ["formControlName", "streetaddress", "id", "streetaddress", "type", "text", 1, "form-control", 3, "ngModel"], ["for", "postalcode"], ["formControlName", "postalcode", "id", "postalcode", "type", "text", 1, "form-control", 3, "ngModel"], ["for", "city"], ["formControlName", "city", "id", "city", "type", "text", 1, "form-control", 3, "ngModel"], ["for", "country"], ["formControlName", "country", "id", "country", "type", "text", 1, "form-control", 3, "ngModel"], ["for", "currency"], ["formControlName", "currency", "id", "currency", "type", "text", 1, "form-control", 3, "ngModel"], ["for", "phone"], ["formControlName", "phone", "id", "phone", "type", "text", 1, "form-control", 3, "ngModel"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "text", 1, "form-control", 3, "ngModel"], ["type", "button", "class", "btn btn-primary btn-lg btn-danger shadow-none", "routerLink", "/customer/list", 4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-lg btn-danger shadow-none", 3, "routerLink", 4, "ngIf"], ["type", "button", "type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-success", "shadow-none"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], ["type", "button", "routerLink", "/customer/list", 1, "btn", "btn-primary", "btn-lg", "btn-danger", "shadow-none"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-danger", "shadow-none", 3, "routerLink"]],
      template: function CustomerEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CustomerEditComponent_Template_form_ngSubmit_3_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CustomerEditComponent_option_14_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CustomerEditComponent_div_15_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CustomerEditComponent_div_21_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CustomerEditComponent_div_27_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CustomerEditComponent_option_33_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CustomerEditComponent_div_34_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Job");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Birth date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CustomerEditComponent_div_46_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Street address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, CustomerEditComponent_div_52_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Postal code");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, CustomerEditComponent_div_58_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CustomerEditComponent_div_64_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, CustomerEditComponent_div_70_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, CustomerEditComponent_div_76_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, CustomerEditComponent_div_82_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, CustomerEditComponent_div_88_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, CustomerEditComponent_button_89_Template, 2, 0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, CustomerEditComponent_button_90_Template, 2, 3, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Editing: ", ctx.customer.firstname, " ", ctx.customer.lastname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.titleTypeOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.title.touched && ctx.formControls.title.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.firstname);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.firstname.touched && ctx.formControls.firstname.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.lastname);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.lastname.touched && ctx.formControls.lastname.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.genderTypeOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.gender.touched && ctx.formControls.gender.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.job);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](45, 33, ctx.customer.birthdate, "yyyy-MM-dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.birthdate.touched && ctx.formControls.birthdate.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.streetaddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.streetaddress.touched && ctx.formControls.streetaddress.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.postalcode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.postalcode.touched && ctx.formControls.postalcode.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.city.touched && ctx.formControls.city.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.country.touched && ctx.formControls.country.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.currency);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.currency.touched && ctx.formControls.currency.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.phone.touched && ctx.formControls.phone.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customer.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.email.touched && ctx.formControls.email.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNew);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isNew);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  margin: 2vw 2vw 2vw 0;\n  font-size: calc(12px + 1vw);\n  color: #d9eef5;\n}\n\nform[_ngcontent-%COMP%] {\n  padding: 1vw;\n  background: white;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n  -webkit-animation: enterFromRight 0.5s;\n          animation: enterFromRight 0.5s;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin: 0 0 0.5vw 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: calc(8px + 0.2vw);\n  color: black;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0 0 0 1vw;\n  width: calc(200px + 8vw);\n  border-left: 0.4vw solid #b5dce9;\n  border-radius: 0;\n  background: #d9eef5;\n  color: black;\n  font-size: calc(8px + 0.5vw);\n  opacity: 0.9;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 2vw;\n  margin: 0.2vw;\n  font-size: calc(8px + 0.5vw);\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: black;\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  background: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZWRpdC9DOlxcUHJvamVrdGVcXEN1c3RvbWVyXFxjdXN0b21lcnMtZnJvbnRlbmRcXGN1c3RvbWVycy9zcmNcXGFwcFxcY3VzdG9tZXJcXGN1c3RvbWVyLWVkaXRcXGN1c3RvbWVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWVkaXQvY3VzdG9tZXItZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1lZGl0L2N1c3RvbWVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgbWFyZ2luOiAydncgMnZ3IDJ2dyAwO1xyXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcclxuICBjb2xvcjogI2Q5ZWVmNTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogMXZ3O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFuaW1hdGlvbjogZW50ZXJGcm9tUmlnaHQgMC41cztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbjogMCAwIDAuNXZ3IDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuMnZ3KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDAgMCAxdnc7XHJcbiAgd2lkdGg6IGNhbGMoMjAwcHggKyA4dncpO1xyXG4gIGJvcmRlci1sZWZ0OiAwLjR2dyBzb2xpZCAjYjVkY2U5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYmFja2dyb3VuZDogI2Q5ZWVmNTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDJ2dztcclxuICBtYXJnaW46IDAuMnZ3O1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbn1cclxuIiwiaDEge1xuICBtYXJnaW46IDJ2dyAydncgMnZ3IDA7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcbiAgY29sb3I6ICNkOWVlZjU7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAxdnc7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogZW50ZXJGcm9tUmlnaHQgMC41cztcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDAgMCAwLjV2dyAwO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuMnZ3KTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMXZ3O1xuICB3aWR0aDogY2FsYygyMDBweCArIDh2dyk7XG4gIGJvcmRlci1sZWZ0OiAwLjR2dyBzb2xpZCAjYjVkY2U5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiAjZDllZWY1O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbjogMC4ydnc7XG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-customer-edit',
          templateUrl: './customer-edit.component.html',
          styleUrls: ['./customer-edit.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/customer-list/customer-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/customer/customer-list/customer-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CustomerListComponent */

  /***/
  function srcAppCustomerCustomerListCustomerListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function () {
      return CustomerListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/customer/customer.service */
    "./src/app/shared/services/customer/customer.service.ts");
    /* harmony import */


    var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/order/order.service */
    "./src/app/shared/services/order/order.service.ts");
    /* harmony import */


    var src_app_shared_services_database_indexed_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/database/indexed-database.service */
    "./src/app/shared/services/database/indexed-database.service.ts");
    /* harmony import */


    var src_app_shared_services_connection_connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/connection/connection.service */
    "./src/app/shared/services/connection/connection.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CustomerListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 17);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/customer/details", a1];
    };

    function CustomerListComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "lowercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "No issues");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, customer_r4.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r4.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", customer_r4.lastname, ", ", customer_r4.firstname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 12, customer_r4.birthdate, "longDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", customer_r4.streetaddress, ", ", customer_r4.postalcode, " ", customer_r4.city, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 15, "flag-icon flag-icon-" + customer_r4.country));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r4.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r4.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", customer_r4.numberOfOrders, " orders");
      }
    }

    var CustomerListComponent = /*#__PURE__*/function () {
      function CustomerListComponent(customerService, orderService, indexedDatabaseService, connectionService) {
        _classCallCheck(this, CustomerListComponent);

        this.customerService = customerService;
        this.orderService = orderService;
        this.indexedDatabaseService = indexedDatabaseService;
        this.connectionService = connectionService;
        this.loading = false;
        this.isLocalDataLoaded = false;
      }

      _createClass(CustomerListComponent, [{
        key: "filter",
        value: function filter(filterString, filterSelection) {
          this.customers = this.allCustomers.filter(function (elem) {
            var filterValue;

            switch (filterSelection) {
              case 'name':
                filterValue = elem.firstname + ' ' + elem.lastname;
                break;

              case 'gender':
                if (elem.gender.toUpperCase() === 'MALE') {
                  return filterString.toUpperCase() === 'MALE';
                }

                if (elem.gender.toUpperCase() === 'FEMALE') {
                  return filterString.toUpperCase() === 'FEMALE';
                }

                if (elem.gender.toUpperCase() === 'OTHER') {
                  return filterString.toUpperCase() === 'OTHER';
                }

                break;

              case 'job':
                filterValue = elem.job;
                break;

              case 'street':
                filterValue = elem.streetaddress;
                break;

              case 'postalcode':
                filterValue = elem.postalcode ? elem.postalcode : '00000';
                break;

              case 'city':
                filterValue = elem.city;
                break;

              case 'country':
                filterValue = elem.country;
                break;

              default:
                filterValue = elem.firstname + ' ' + elem.lastname;
            }

            return filterValue.toUpperCase().includes(filterString.toUpperCase());
          });
          this.customers.sort(function (customer1, customer2) {
            return customer1.lastname > customer2.lastname ? 1 : -1;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var connectionToServer, orders;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.loading = true;
                    _context4.next = 3;
                    return this.connectionService.checkConnection();

                  case 3:
                    connectionToServer = _context4.sent;

                    if (!connectionToServer) {
                      _context4.next = 16;
                      break;
                    }

                    _context4.next = 7;
                    return this.customerService.getAllCustomers();

                  case 7:
                    this.allCustomers = _context4.sent;
                    this.allCustomers = this.allCustomers;
                    this.indexedDatabaseService.addCustomersToDatabase(this.allCustomers);
                    _context4.next = 12;
                    return this.orderService.getAllOrders();

                  case 12:
                    orders = _context4.sent;
                    this.allOrders = orders;
                    this.indexedDatabaseService.addOrdersToDatabase(orders);
                    this.displayCustomers();

                  case 16:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "displayCustomers",
        value: function displayCustomers() {
          var _this5 = this;

          var _iterator = _createForOfIteratorHelper(this.allCustomers),
              _step;

          try {
            var _loop = function _loop() {
              var customer = _step.value;
              var customerAsCustomer = customer;

              var ordersOfCustomer = _this5.allOrders.filter(function (x) {
                return x.customerid == customerAsCustomer.id;
              });

              customer.numberOfOrders = ordersOfCustomer.length;
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.customers = this.allCustomers.sort(function (customer1, customer2) {
            return customer1.lastname > customer2.lastname ? 1 : -1;
          });
          this.loading = false;
        }
      }]);

      return CustomerListComponent;
    }();

    CustomerListComponent.ɵfac = function CustomerListComponent_Factory(t) {
      return new (t || CustomerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_database_indexed_database_service__WEBPACK_IMPORTED_MODULE_4__["IndexedDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_connection_connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"]));
    };

    CustomerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CustomerListComponent,
      selectors: [["app-customer-list"]],
      decls: 28,
      vars: 2,
      consts: [[1, "container-fluid"], ["class", "spinner", "role", "status", 4, "ngIf"], ["routerLink", "/customer/new", 1, "btn", "btn-primary", "addCustomer", "shadow-none"], ["action", "#", 1, "form-inline", 3, "submit"], ["type", "text", "placeholder", "Filter value", 1, "form-control"], ["filterString", ""], [1, "form-control"], ["filterSelection", ""], ["value", "name"], ["value", "gender"], ["value", "job"], ["value", "street"], ["value", "postalcode"], ["value", "city"], ["value", "country"], ["type", "submit", 1, "btn", "btn-primary", "shadow-none"], ["class", "row customer-row", 3, "routerLink", 4, "ngFor", "ngForOf"], ["role", "status", 1, "spinner"], [1, "row", "customer-row", 3, "routerLink"], [1, "col", "customer-name-col"], [1, "title"], ["src", "../../../assets/icons/birth.png", 1, "icon"], [1, "col", "d-none", "d-sm-block", "customer-data-col"], ["src", "../../../assets/icons/map.png", 1, "icon"], [3, "ngClass"], ["src", "../../../assets/icons/phone.png", 1, "icon"], ["src", "../../../assets/icons/mail.png", 1, "icon"], [1, "col", "d-none", "d-lg-block", "customer-col"], ["src", "../../../assets/icons/order.png", 1, "icon"], ["src", "../../../assets/icons/issue.png", 1, "icon"]],
      template: function CustomerListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerListComponent_div_1_Template, 1, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function CustomerListComponent_Template_form_submit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            return ctx.filter(_r1.value, _r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Job");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Street");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Postal Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CustomerListComponent_div_27_Template, 30, 19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.customers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LowerCasePipe"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  margin: 2vw 2vw 2vw 0;\n  font-size: calc(12px + 1vw);\n  color: #d9eef5;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: calc(10px + 0.3vw);\n  font-weight: 400;\n}\n\n.icon-user[_ngcontent-%COMP%] {\n  height: calc(16px + 5vw);\n  display: inline-block;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin: 0 0.4vw 0 0;\n  width: 1vw;\n  height: 1vw;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n\n.customer-row[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 1vw 0;\n  width: 90vw;\n  border: 0.1vw dotted #b5dce9;\n  background: white;\n  opacity: 0.95;\n  transition: all 0.25s;\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n\n.customer-row[_ngcontent-%COMP%]:hover {\n  background: #b5dce9;\n  color: #2a4852;\n  border: 0.1vw dotted #b35e8f;\n  width: 88vw;\n  cursor: pointer;\n}\n\n.customer-name-col[_ngcontent-%COMP%] {\n  margin: 0.5vw;\n}\n\n.customer-data-col[_ngcontent-%COMP%] {\n  margin: 0.5vw;\n  padding: 0.5vw;\n  border-left: 1px dotted #d3eef7;\n}\n\n.customer-row[_ngcontent-%COMP%]:nth-child(even) {\n  margin: 1vw 0 1vw 0;\n  box-shadow: 2vw 2vw 5vw black;\n}\n\n.customer-row[_ngcontent-%COMP%]:nth-child(odd) {\n  margin: 1vw 0 1vw 0;\n  box-shadow: 2vw 2vw 5vw black;\n}\n\n.customer-col[_ngcontent-%COMP%] {\n  border-left: 1px solid #d3eef7;\n  margin: 0.5vw;\n  padding: 0.5vw;\n  opacity: 0.9;\n}\n\n.form-control[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-size: calc(8px + 0.5vw);\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: #b35e8f;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: black;\n}\n\n.addCustomer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 60px;\n  width: 60px;\n  margin: 0px auto;\n  -webkit-animation: rotation 0.6s infinite linear;\n          animation: rotation 0.6s infinite linear;\n  border-left: 6px solid rgba(0, 174, 239, 0.15);\n  border-right: 6px solid rgba(0, 174, 239, 0.15);\n  border-bottom: 6px solid rgba(0, 174, 239, 0.15);\n  border-top: 6px solid rgba(0, 174, 239, 0.8);\n  border-radius: 100%;\n  z-index: 100;\n}\n\n@-webkit-keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItbGlzdC9DOlxcUHJvamVrdGVcXEN1c3RvbWVyXFxjdXN0b21lcnMtZnJvbnRlbmRcXGN1c3RvbWVycy9zcmNcXGFwcFxcY3VzdG9tZXJcXGN1c3RvbWVyLWxpc3RcXGN1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTs7RUFFRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7RUFDQSw4Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSx1QkFBQTtFQ0NGO0VEQ0E7SUFDRSx5QkFBQTtFQ0NGO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLHVCQUFBO0VDQ0Y7RURDQTtJQUNFLHlCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBtYXJnaW46IDJ2dyAydncgMnZ3IDA7XHJcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxdncpO1xyXG4gIGNvbG9yOiAjZDllZWY1O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAwLjN2dyk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmljb24tdXNlciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDE2cHggKyA1dncpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmljb24ge1xyXG4gIG1hcmdpbjogMCAwLjR2dyAwIDA7XHJcbiAgd2lkdGg6IDF2dztcclxuICBoZWlnaHQ6IDF2dztcclxufVxyXG5cclxuLmZvcm0taW5saW5lIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAxcztcclxufVxyXG5cclxuLmN1c3RvbWVyLXJvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDF2dyAwO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGJvcmRlcjogMC4xdncgZG90dGVkICNiNWRjZTk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC45NTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XHJcbn1cclxuXHJcbi5jdXN0b21lci1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNiNWRjZTk7XHJcbiAgY29sb3I6ICMyYTQ4NTI7XHJcbiAgYm9yZGVyOiAwLjF2dyBkb3R0ZWQgI2IzNWU4ZjtcclxuICB3aWR0aDogODh2dztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b21lci1uYW1lLWNvbCB7XHJcbiAgbWFyZ2luOiAwLjV2dztcclxufVxyXG5cclxuLmN1c3RvbWVyLWRhdGEtY29sIHtcclxuICBtYXJnaW46IDAuNXZ3O1xyXG4gIHBhZGRpbmc6IDAuNXZ3O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICNkM2VlZjc7XHJcbn1cclxuXHJcbi5jdXN0b21lci1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBtYXJnaW46IDF2dyAwIDF2dyAwO1xyXG4gIGJveC1zaGFkb3c6IDJ2dyAydncgNXZ3IGJsYWNrO1xyXG59XHJcblxyXG4uY3VzdG9tZXItcm93Om50aC1jaGlsZChvZGQpIHtcclxuICBtYXJnaW46IDF2dyAwIDF2dyAwO1xyXG4gIGJveC1zaGFkb3c6IDJ2dyAydncgNXZ3IGJsYWNrO1xyXG59XHJcblxyXG4uY3VzdG9tZXItY29sIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2VlZjc7XHJcbiAgbWFyZ2luOiAwLjV2dztcclxuICBwYWRkaW5nOiAwLjV2dztcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wsXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNiMzVlOGY7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uYWRkQ3VzdG9tZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAwLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYmEoMCwgMTc0LCAyMzksIDAuMTUpO1xyXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHJnYmEoMCwgMTc0LCAyMzksIDAuMTUpO1xyXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDAsIDE3NCwgMjM5LCAwLjE1KTtcclxuICBib3JkZXItdG9wOiA2cHggc29saWQgcmdiYSgwLCAxNzQsIDIzOSwgMC44KTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuIiwiaDEge1xuICBtYXJnaW46IDJ2dyAydncgMnZ3IDA7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcbiAgY29sb3I6ICNkOWVlZjU7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMC4zdncpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaWNvbi11c2VyIHtcbiAgaGVpZ2h0OiBjYWxjKDE2cHggKyA1dncpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luOiAwIDAuNHZ3IDAgMDtcbiAgd2lkdGg6IDF2dztcbiAgaGVpZ2h0OiAxdnc7XG59XG5cbi5mb3JtLWlubGluZSB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xufVxuXG4uY3VzdG9tZXItcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMCAxdncgMDtcbiAgd2lkdGg6IDkwdnc7XG4gIGJvcmRlcjogMC4xdncgZG90dGVkICNiNWRjZTk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjk1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xufVxuXG4uY3VzdG9tZXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I1ZGNlOTtcbiAgY29sb3I6ICMyYTQ4NTI7XG4gIGJvcmRlcjogMC4xdncgZG90dGVkICNiMzVlOGY7XG4gIHdpZHRoOiA4OHZ3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b21lci1uYW1lLWNvbCB7XG4gIG1hcmdpbjogMC41dnc7XG59XG5cbi5jdXN0b21lci1kYXRhLWNvbCB7XG4gIG1hcmdpbjogMC41dnc7XG4gIHBhZGRpbmc6IDAuNXZ3O1xuICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCAjZDNlZWY3O1xufVxuXG4uY3VzdG9tZXItcm93Om50aC1jaGlsZChldmVuKSB7XG4gIG1hcmdpbjogMXZ3IDAgMXZ3IDA7XG4gIGJveC1zaGFkb3c6IDJ2dyAydncgNXZ3IGJsYWNrO1xufVxuXG4uY3VzdG9tZXItcm93Om50aC1jaGlsZChvZGQpIHtcbiAgbWFyZ2luOiAxdncgMCAxdncgMDtcbiAgYm94LXNoYWRvdzogMnZ3IDJ2dyA1dncgYmxhY2s7XG59XG5cbi5jdXN0b21lci1jb2wge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2VlZjc7XG4gIG1hcmdpbjogMC41dnc7XG4gIHBhZGRpbmc6IDAuNXZ3O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5mb3JtLWNvbnRyb2wsXG5idXR0b24ge1xuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAjYjM1ZThmO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5hZGRDdXN0b21lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBhbmltYXRpb246IHJvdGF0aW9uIDAuNnMgaW5maW5pdGUgbGluZWFyO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYmEoMCwgMTc0LCAyMzksIDAuMTUpO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCByZ2JhKDAsIDE3NCwgMjM5LCAwLjE1KTtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoMCwgMTc0LCAyMzksIDAuMTUpO1xuICBib3JkZXItdG9wOiA2cHggc29saWQgcmdiYSgwLCAxNzQsIDIzOSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-customer-list',
          templateUrl: './customer-list.component.html',
          styleUrls: ['./customer-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]
        }, {
          type: src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
        }, {
          type: src_app_shared_services_database_indexed_database_service__WEBPACK_IMPORTED_MODULE_4__["IndexedDatabaseService"]
        }, {
          type: src_app_shared_services_connection_connection_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customer/customer-list/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/customer/customer-list/index.ts ***!
    \*************************************************/

  /*! exports provided: CustomerListComponent */

  /***/
  function srcAppCustomerCustomerListIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _customer_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./customer-list.component */
    "./src/app/customer/customer-list/customer-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function () {
      return _customer_list_component__WEBPACK_IMPORTED_MODULE_0__["CustomerListComponent"];
    });
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/services/authentication/auth.service */
    "./src/app/shared/services/authentication/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this6 = this;

          this.authService.validate(this.username, this.userPassword).then(function (response) {
            _this6.authService.setUserInfo({
              user: response['user']
            });

            _this6.router.navigate(['customer']);
          })["catch"](function (error) {
            _this6.errorMessage = "User name and password don't match.";
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 15,
      vars: 3,
      consts: [[1, "form-signin"], ["for", "inputusername", 1, "sr-only"], ["type", "text", "name", "username", "id", "inputusername", "placeholder", "User name", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "name", "userPassword", "id", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"], ["routerLink", "/register", 1, "register"], [1, "error"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.userPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  margin: 2vw 2vw 2vw 0;\n  font-size: calc(12px + 1vw);\n  color: #d9eef5;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0 0 0 1vw;\n  width: calc(200px + 8vw);\n  border-left: 0.4vw solid #b5dce9;\n  border-radius: 0;\n  color: black;\n  font-size: calc(8px + 0.5vw);\n  opacity: 0.9;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: calc(200px + 8vw);\n  background-color: #b35e8f;\n  border: 0;\n  border-radius: 0;\n  font-size: 2vw;\n  font-size: calc(8px + 0.5vw);\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: black;\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  background: lightgray;\n}\n\n.register[_ngcontent-%COMP%] {\n  margin: 0.5vw;\n  color: white;\n  font-size: calc(8px + 0.5vw);\n}\n\n.register[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.error[_ngcontent-%COMP%] {\n  margin: 0.5vw;\n  color: lightcoral;\n  font-size: calc(8px + 0.5vw);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFByb2pla3RlXFxDdXN0b21lclxcY3VzdG9tZXJzLWZyb250ZW5kXFxjdXN0b21lcnMvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBtYXJnaW46IDJ2dyAydncgMnZ3IDA7XHJcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxdncpO1xyXG4gIGNvbG9yOiAjZDllZWY1O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDAgMCAxdnc7XHJcbiAgd2lkdGg6IGNhbGMoMjAwcHggKyA4dncpO1xyXG4gIGJvcmRlci1sZWZ0OiAwLjR2dyBzb2xpZCAjYjVkY2U5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogY2FsYygyMDBweCArIDh2dyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzNWU4ZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LXNpemU6IDJ2dztcclxuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuLmJ0bjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG59XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gIG1hcmdpbjogMC41dnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XHJcbn1cclxuXHJcbi5yZWdpc3Rlcjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIG1hcmdpbjogMC41dnc7XHJcbiAgY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcclxufVxyXG4iLCJoMSB7XG4gIG1hcmdpbjogMnZ3IDJ2dyAydncgMDtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxdncpO1xuICBjb2xvcjogI2Q5ZWVmNTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDF2dztcbiAgd2lkdGg6IGNhbGMoMjAwcHggKyA4dncpO1xuICBib3JkZXItbGVmdDogMC40dncgc29saWQgI2I1ZGNlOTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5idG4ge1xuICB3aWR0aDogY2FsYygyMDBweCArIDh2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMzVlOGY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAydnc7XG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgbWFyZ2luOiAwLjV2dztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xufVxuXG4ucmVnaXN0ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lcnJvciB7XG4gIG1hcmdpbjogMC41dnc7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/order/order-details/order-details.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/order/order-details/order-details.component.ts ***!
    \****************************************************************/

  /*! exports provided: OrderDetailsComponent */

  /***/
  function srcAppOrderOrderDetailsOrderDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function () {
      return OrderDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common-components/confirm-dialog/confirm-dialog.component */
    "./src/app/common-components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var src_app_shared_enum_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/enum/order-status */
    "./src/app/shared/enum/order-status.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/order/order.service */
    "./src/app/shared/services/order/order.service.ts");
    /* harmony import */


    var src_app_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/product/product.service */
    "./src/app/shared/services/product/product.service.ts");
    /* harmony import */


    var src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/customer/customer.service */
    "./src/app/shared/services/customer/customer.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/customer/details", a1];
    };

    var _c1 = function _c1(a1) {
      return ["/order/edit", a1];
    };

    var OrderDetailsComponent = /*#__PURE__*/function () {
      function OrderDetailsComponent(activatedRoute, router, orderService, productService, customerService, dialog, snackBar) {
        _classCallCheck(this, OrderDetailsComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.orderService = orderService;
        this.productService = productService;
        this.customerService = customerService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.orderStatusTypes = src_app_shared_enum_order_status__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"];
        this.orderStatusTypeOptions = [];
      }

      _createClass(OrderDetailsComponent, [{
        key: "deleteOrder",
        value: function deleteOrder(event) {
          var _this7 = this;

          var dialogData = new src_app_common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModel"]('Confirm Action', 'Are you sure young want to delete order?');
          var dialogRef = this.dialog.open(src_app_common_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            maxWidth: '400px',
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            var result = dialogResult;

            if (result) {
              _this7.orderService.deleteOrder(_this7.order.id.toString());

              _this7.snackBar.open('order ' + _this7.order.name + ' deleted', null, {
                duration: 5000
              });

              _this7.router.navigate(['/order/list']);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this8 = this;

            var orders, order, products, product, customers, customer;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.orderStatusTypeOptions = Object.keys(this.orderStatusTypes).map(function (key) {
                      return _this8.orderStatusTypes[key];
                    }).filter(function (value) {
                      return typeof value !== 'string';
                    });
                    this.id = this.activatedRoute.snapshot.params.id;
                    _context5.next = 4;
                    return this.orderService.getOrder(this.id);

                  case 4:
                    orders = _context5.sent;
                    order = orders[0];
                    this.order = order;
                    _context5.next = 9;
                    return this.productService.getProduct(order.productid.toString());

                  case 9:
                    products = _context5.sent;
                    product = products[0];
                    order.name = product.name;
                    order.manufacturer = product.manufacturer;
                    order.price = product.price;
                    order.totalPrice = order.amount * Number(order.price);
                    _context5.next = 17;
                    return this.customerService.getCustomer(order.customerid.toString());

                  case 17:
                    customers = _context5.sent;
                    customer = customers[0];
                    order.customerName = customer.firstname + ' ' + customer.lastname;

                  case 20:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return OrderDetailsComponent;
    }();

    OrderDetailsComponent.ɵfac = function OrderDetailsComponent_Factory(t) {
      return new (t || OrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
    };

    OrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OrderDetailsComponent,
      selectors: [["app-order-details"]],
      decls: 39,
      vars: 19,
      consts: [[1, "container-fluid"], [1, "row", "order"], [1, "col", "data-column"], [1, "detailItem"], ["src", "../../../assets/icons/date.png", 1, "icon"], [1, "detailItem", "orderLink", 3, "routerLink"], ["src", "../../../assets/icons/user.png", 1, "icon"], ["src", "../../../assets/icons/manufacturer.png", 1, "icon"], ["src", "../../../assets/icons/product.png", 1, "icon"], ["src", "../../../assets/icons/currency.png", 1, "icon"], ["src", "../../../assets/icons/counter.png", 1, "icon"], ["src", "../../../assets/icons/bill.png", 1, "icon"], ["src", "../../../assets/icons/status.png", 1, "icon"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "shadow-none", 3, "routerLink"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "shadow-none", 3, "click"], ["type", "button", "routerLink", "/order/list", 1, "btn", "btn-primary", "btn-lg", "shadow-none"]],
      template: function OrderDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderDetailsComponent_Template_button_click_35_listener($event) {
            return ctx.deleteOrder($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Back to Order List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 10, ctx.order.date, "longDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.order.customerid));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.order.customerName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.order.manufacturer, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.order.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.order.price, " Euro");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.order.amount, " x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 13, ctx.order.totalPrice), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.orderStatusTypes[ctx.order.status], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, ctx.order.id));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  margin: 2vw 2vw 2vw 0;\n  font-size: calc(12px + 1vw);\n  color: #d9eef5;\n}\n\n.data-column[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1vw;\n  font-size: calc(8px + 0.5vw);\n  font-weight: 400;\n}\n\n.detailItem[_ngcontent-%COMP%] {\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0;\n  color: black;\n  margin: 1vw 1vw 1vw 0;\n  opacity: 0.9;\n  transition: background-color 0.25s;\n}\n\n.orderLink[_ngcontent-%COMP%] {\n  transition: color 0.25s, background-color 0.25s, padding 0.5s;\n}\n\n.orderLink[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #b35e8f;\n  color: white;\n  padding: 0.4vw;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin: 0 0.6vw 0 0;\n  width: calc(12px + 0.5vw);\n  height: calc(12px + 0.5vw);\n}\n\n.order[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 1vw 0;\n  width: 90vw;\n  border: 0.2vw solid #b5dce9;\n  background: white;\n  opacity: 0.95;\n  -webkit-animation: enterFromRight 0.5s;\n          animation: enterFromRight 0.5s;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0.2vw;\n  background: #b35e8f;\n  font-size: calc(8px + 0.5vw);\n  -webkit-animation: fadeIn 1.5s;\n          animation: fadeIn 1.5s;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXItZGV0YWlscy9DOlxcUHJvamVrdGVcXEN1c3RvbWVyXFxjdXN0b21lcnMtZnJvbnRlbmRcXGN1c3RvbWVycy9zcmNcXGFwcFxcb3JkZXJcXG9yZGVyLWRldGFpbHNcXG9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSw2REFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgbWFyZ2luOiAydncgMnZ3IDJ2dyAwO1xyXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcclxuICBjb2xvcjogI2Q5ZWVmNTtcclxufVxyXG5cclxuLmRhdGEtY29sdW1uIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMXZ3O1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmRldGFpbEl0ZW0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogMXZ3IDF2dyAxdncgMDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcclxufVxyXG5cclxuLm9yZGVyTGluayB7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMsIGJhY2tncm91bmQtY29sb3IgMC4yNXMsIHBhZGRpbmcgMC41cztcclxufVxyXG5cclxuLm9yZGVyTGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMzVlOGY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNHZ3O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luOiAwIDAuNnZ3IDAgMDtcclxuICB3aWR0aDogY2FsYygxMnB4ICsgMC41dncpO1xyXG4gIGhlaWdodDogY2FsYygxMnB4ICsgMC41dncpO1xyXG59XHJcblxyXG4ub3JkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgMCAxdncgMDtcclxuICB3aWR0aDogOTB2dztcclxuICBib3JkZXI6IDAuMnZ3IHNvbGlkICNiNWRjZTk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC45NTtcclxuICBhbmltYXRpb246IGVudGVyRnJvbVJpZ2h0IDAuNXM7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogMC4ydnc7XHJcbiAgYmFja2dyb3VuZDogI2IzNWU4ZjtcclxuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuIiwiaDEge1xuICBtYXJnaW46IDJ2dyAydncgMnZ3IDA7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcbiAgY29sb3I6ICNkOWVlZjU7XG59XG5cbi5kYXRhLWNvbHVtbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMXZ3O1xuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZGV0YWlsSXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDF2dyAxdncgMXZ3IDA7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcbn1cblxuLm9yZGVyTGluayB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCBwYWRkaW5nIDAuNXM7XG59XG5cbi5vcmRlckxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMzVlOGY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC40dnc7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luOiAwIDAuNnZ3IDAgMDtcbiAgd2lkdGg6IGNhbGMoMTJweCArIDAuNXZ3KTtcbiAgaGVpZ2h0OiBjYWxjKDEycHggKyAwLjV2dyk7XG59XG5cbi5vcmRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDAgMXZ3IDA7XG4gIHdpZHRoOiA5MHZ3O1xuICBib3JkZXI6IDAuMnZ3IHNvbGlkICNiNWRjZTk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjk1O1xuICBhbmltYXRpb246IGVudGVyRnJvbVJpZ2h0IDAuNXM7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwLjJ2dztcbiAgYmFja2dyb3VuZDogI2IzNWU4ZjtcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-order-details',
          templateUrl: './order-details.component.html',
          styleUrls: ['./order-details.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
        }, {
          type: src_app_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
        }, {
          type: src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/order/order-edit/order-edit.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/order/order-edit/order-edit.component.ts ***!
    \**********************************************************/

  /*! exports provided: OrderEditComponent */

  /***/
  function srcAppOrderOrderEditOrderEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderEditComponent", function () {
      return OrderEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_model_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/order */
    "./src/app/shared/model/order.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var src_app_shared_enum_order_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/enum/order-status */
    "./src/app/shared/enum/order-status.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/order/order.service */
    "./src/app/shared/services/order/order.service.ts");
    /* harmony import */


    var src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/customer/customer.service */
    "./src/app/shared/services/customer/customer.service.ts");
    /* harmony import */


    var src_app_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/product/product.service */
    "./src/app/shared/services/product/product.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OrderEditComponent_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r56 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", customer_r56.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", customer_r56.lastname, ", ", customer_r56.firstname, "");
      }
    }

    function OrderEditComponent_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Customer is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderEditComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderEditComponent_div_24_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r49.formControls.customerid.errors.required);
      }
    }

    function OrderEditComponent_div_30_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderEditComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderEditComponent_div_30_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r50.formControls.date.errors.required);
      }
    }

    function OrderEditComponent_option_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r59.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r59.name);
      }
    }

    function OrderEditComponent_div_39_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Product is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderEditComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderEditComponent_div_39_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r52.formControls.productid.errors.required);
      }
    }

    function OrderEditComponent_div_44_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Amount is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderEditComponent_div_44_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Amount should be at least 1. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderEditComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderEditComponent_div_44_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrderEditComponent_div_44_div_2_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r53.formControls.amount.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r53.formControls.amount.errors.min);
      }
    }

    function OrderEditComponent_option_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r63 = ctx.$implicit;

        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", key_r63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r54.orderStatusTypes[key_r63]);
      }
    }

    function OrderEditComponent_div_51_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Status is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OrderEditComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderEditComponent_div_51_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r55.formControls.status.errors.required);
      }
    }

    var OrderEditComponent = /*#__PURE__*/function () {
      function OrderEditComponent(activatedRoute, router, orderService, customerService, productService, snackBar, elem, renderer) {
        var _this9 = this;

        _classCallCheck(this, OrderEditComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.orderService = orderService;
        this.customerService = customerService;
        this.productService = productService;
        this.snackBar = snackBar;
        this.elem = elem;
        this.renderer = renderer;
        this.isNew = false;
        this.currentTab = 0;
        this.lastTab = 2;
        this.orderStatusTypes = src_app_shared_enum_order_status__WEBPACK_IMPORTED_MODULE_5__["OrderStatus"];
        this.orderStatusTypeOptions = [];
        this.activatedRoute.url.subscribe(function (params) {
          if (params[0].path === 'new') {
            _this9.isNew = true;
          }
        });
      }

      _createClass(OrderEditComponent, [{
        key: "submit",
        value: function submit() {
          this.form.markAllAsTouched();

          if (this.form.invalid) {
            return;
          }

          this.order = this.form.value;

          if (this.isNew) {
            this.order.id = this.id;
            this.orderService.insertOrder(this.order);
            this.snackBar.open('Order added', null, {
              duration: 5000
            });
            this.router.navigate(['/order/list']);
          } else {
            this.orderService.updateOrder(this.order);
            this.snackBar.open('Order updated', null, {
              duration: 5000
            });
            this.router.navigate(['/order/details', this.order.id]);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this10 = this;

            var allCustomers, allProductsPromise, uuid, orders;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.orderStatusTypeOptions = Object.keys(this.orderStatusTypes).map(function (key) {
                      return _this10.orderStatusTypes[key];
                    }).filter(function (value) {
                      return typeof value !== 'string';
                    });
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                      customerid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(36), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(36)]),
                      productid: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(36), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(36)]),
                      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                      amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)])
                    });
                    this.id = this.activatedRoute.snapshot.params.id;
                    _context6.next = 5;
                    return this.customerService.getAllCustomers();

                  case 5:
                    allCustomers = _context6.sent;
                    this.allCustomers = allCustomers;
                    this.allCustomers = this.allCustomers.sort(function (customer1, customer2) {
                      return customer1.lastname > customer2.lastname ? 1 : -1;
                    });
                    _context6.next = 10;
                    return this.productService.getAllProducts();

                  case 10:
                    allProductsPromise = _context6.sent;
                    this.allProducts = allProductsPromise;
                    this.allProducts = this.allProducts.sort(function (product1, product2) {
                      return product1.name > product2.name ? 1 : -1;
                    });

                    if (!this.isNew) {
                      _context6.next = 19;
                      break;
                    }

                    uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
                    this.id = uuid;
                    this.order = new src_app_shared_model_order__WEBPACK_IMPORTED_MODULE_2__["Order"](this.id, null, null, null, null, null, null);
                    this.showTab(0);
                    return _context6.abrupt("return");

                  case 19:
                    _context6.next = 21;
                    return this.orderService.getOrder(this.id);

                  case 21:
                    orders = _context6.sent;
                    this.order = orders[0];
                    this.showTab(0);
                    this.form.markAllAsTouched();
                    this.form.setValue(this.order);

                  case 26:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "showTab",
        value: function showTab(newTab) {
          var tabElements = this.elem.nativeElement.querySelectorAll('.tab');
          var currentTabElement = tabElements[this.currentTab];
          currentTabElement.style.display = 'none';
          var newTabElement = tabElements[newTab];
          newTabElement.style.display = 'block';
          var navElements = this.elem.nativeElement.querySelectorAll('.breadcrumb-item');
          var currentNavElement = navElements[this.currentTab];
          this.renderer.removeClass(currentNavElement, 'active');
          var newNavElement = navElements[newTab];
          this.renderer.addClass(newNavElement, 'active');
        }
      }, {
        key: "previous",
        value: function previous() {
          if (this.currentTab === 0) {
            return;
          }

          this.showTab(this.currentTab - 1);
          this.currentTab = this.currentTab - 1;
        }
      }, {
        key: "next",
        value: function next() {
          if (this.currentTab === this.lastTab) {
            return;
          }

          this.showTab(this.currentTab + 1);
          this.currentTab = this.currentTab + 1;
        }
      }, {
        key: "navigate",
        value: function navigate(tab) {
          this.showTab(tab);
          this.currentTab = tab;
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return OrderEditComponent;
    }();

    OrderEditComponent.ɵfac = function OrderEditComponent_Factory(t) {
      return new (t || OrderEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    OrderEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OrderEditComponent,
      selectors: [["app-order-edit"]],
      decls: 60,
      vars: 20,
      consts: [[1, "container-fluid"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "tab"], [1, "form-group"], ["for", "id"], ["formControlName", "id", "id", "id", "type", "text", "readonly", "", 1, "form-control", 3, "ngModel"], ["for", "customerid"], ["formControlName", "customerid", "id", "customerid", 1, "form-control", 3, "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "date"], ["formControlName", "date", "id", "date", "type", "date", 1, "form-control", 3, "ngModel"], ["for", "productid"], ["formControlName", "productid", "id", "productid", 1, "form-control", 3, "ngModel"], ["for", "amount"], ["formControlName", "amount", "id", "amount", "type", "text", 1, "form-control", 3, "ngModel"], ["formControlName", "status", "id", "status", 1, "form-control", 3, "ngModel"], ["type", "button", "routerLink", "/order/list", 1, "btn", "btn-primary", "btn-lg", "shadow-none"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "prev", "shadow-none", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "next", "shadow-none", 3, "disabled", "click"], ["type", "button", "type", "submit", 1, "btn", "btn-primary", "btn-lg", "shadow-none"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function OrderEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ol", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderEditComponent_Template_li_click_5_listener() {
            return ctx.navigate(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "General data");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderEditComponent_Template_li_click_7_listener() {
            return ctx.navigate(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Product data");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderEditComponent_Template_li_click_9_listener() {
            return ctx.navigate(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Order Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OrderEditComponent_Template_form_ngSubmit_11_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "General data");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, OrderEditComponent_option_23_Template, 2, 3, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OrderEditComponent_div_24_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, OrderEditComponent_div_30_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Product data");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, OrderEditComponent_option_38_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, OrderEditComponent_div_39_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, OrderEditComponent_div_44_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Order Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, OrderEditComponent_option_50_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, OrderEditComponent_div_51_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderEditComponent_Template_button_click_54_listener() {
            return ctx.previous();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Previous ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderEditComponent_Template_button_click_56_listener() {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.customerid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allCustomers);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.customerid.touched && ctx.formControls.customerid.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](29, 17, ctx.order.date, "yyyy-MM-dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.date.touched && ctx.formControls.date.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.productid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allProducts);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.productid.touched && ctx.formControls.productid.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.amount.touched && ctx.formControls.amount.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.order.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orderStatusTypeOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControls.status.touched && ctx.formControls.status.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.currentTab === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.currentTab === ctx.lastTab);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  margin: 2vw 2vw 2vw 0;\n  font-size: calc(12px + 1vw);\n  color: #d9eef5;\n}\n\nform[_ngcontent-%COMP%] {\n  padding: 1vw;\n  background: white;\n}\n\n.tab[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-animation: enterFromRight 0.5s;\n          animation: enterFromRight 0.5s;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin: 0 0 0.5vw 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: calc(8px + 0.2vw);\n  color: black;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0 0 0 1vw;\n  width: calc(200px + 8vw);\n  border-left: 0.4vw solid #b5dce9;\n  border-radius: 0;\n  background: #d9eef5;\n  color: black;\n  font-size: calc(8px + 0.5vw);\n  opacity: 0.9;\n}\n\n.tab[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #b35e8f;\n}\n\n.breadcrumb-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 2vw;\n  margin: 0.2vw;\n  background: #b35e8f;\n  font-size: calc(8px + 0.5vw);\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: green;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: black;\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXItZWRpdC9DOlxcUHJvamVrdGVcXEN1c3RvbWVyXFxjdXN0b21lcnMtZnJvbnRlbmRcXGN1c3RvbWVycy9zcmNcXGFwcFxcb3JkZXJcXG9yZGVyLWVkaXRcXG9yZGVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29yZGVyL29yZGVyLWVkaXQvb3JkZXItZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci1lZGl0L29yZGVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgbWFyZ2luOiAydncgMnZ3IDJ2dyAwO1xyXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcclxuICBjb2xvcjogI2Q5ZWVmNTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogMXZ3O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4udGFiIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYW5pbWF0aW9uOiBlbnRlckZyb21SaWdodCAwLjVzO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW46IDAgMCAwLjV2dyAwO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjJ2dyk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAwIDAgMXZ3O1xyXG4gIHdpZHRoOiBjYWxjKDIwMHB4ICsgOHZ3KTtcclxuICBib3JkZXItbGVmdDogMC40dncgc29saWQgI2I1ZGNlOTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNkOWVlZjU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4udGFiIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogI2IzNWU4ZjtcclxufVxyXG5cclxuLmJyZWFkY3J1bWItaXRlbTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgbWFyZ2luOiAwLjJ2dztcclxuICBiYWNrZ3JvdW5kOiAjYjM1ZThmO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG4iLCJoMSB7XG4gIG1hcmdpbjogMnZ3IDJ2dyAydncgMDtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxdncpO1xuICBjb2xvcjogI2Q5ZWVmNTtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDF2dztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50YWIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogZW50ZXJGcm9tUmlnaHQgMC41cztcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDAgMCAwLjV2dyAwO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuMnZ3KTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDAgMXZ3O1xuICB3aWR0aDogY2FsYygyMDBweCArIDh2dyk7XG4gIGJvcmRlci1sZWZ0OiAwLjR2dyBzb2xpZCAjYjVkY2U5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiAjZDllZWY1O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnRhYiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogI2IzNWU4Zjtcbn1cblxuLmJyZWFkY3J1bWItaXRlbTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbjogMC4ydnc7XG4gIGJhY2tncm91bmQ6ICNiMzVlOGY7XG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4uYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-order-edit',
          templateUrl: './order-edit.component.html',
          styleUrls: ['./order-edit.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]
        }, {
          type: src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]
        }, {
          type: src_app_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/order/order-list/order-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/order/order-list/order-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: OrderListComponent */

  /***/
  function srcAppOrderOrderListOrderListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListComponent", function () {
      return OrderListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_enum_order_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/enum/order-status */
    "./src/app/shared/enum/order-status.ts");
    /* harmony import */


    var src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/order/order.service */
    "./src/app/shared/services/order/order.service.ts");
    /* harmony import */


    var src_app_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/product/product.service */
    "./src/app/shared/services/product/product.service.ts");
    /* harmony import */


    var src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/customer/customer.service */
    "./src/app/shared/services/customer/customer.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function OrderListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 11);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/order/details", a1];
    };

    function OrderListComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r69 = ctx.$implicit;

        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, order_r69.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r69.manufacturer);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r69.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r68.orderStatusTypes[order_r69.status]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r68.orderStatusTypes[order_r69.status], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", order_r69.amount, " items ordered on ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 9, order_r69.date, "longDate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", order_r69.customerName, " ");
      }
    }

    var OrderListComponent = /*#__PURE__*/function () {
      function OrderListComponent(orderService, productService, customerService) {
        _classCallCheck(this, OrderListComponent);

        this.orderService = orderService;
        this.productService = productService;
        this.customerService = customerService;
        this.loading = false;
        this.orderStatusTypes = src_app_shared_enum_order_status__WEBPACK_IMPORTED_MODULE_2__["OrderStatus"];
        this.orderStatusTypeOptions = [];
      }

      _createClass(OrderListComponent, [{
        key: "filter",
        value: function filter(filterString, filterSelection) {
          this.orders = this.allOrders.filter(function (elem) {
            var filterValue;

            switch (filterSelection) {
              case 'name':
                filterValue = elem.name;
                break;

              default:
                filterValue = elem.name;
            }

            return filterValue.toUpperCase().includes(filterString.toUpperCase());
          });
          this.orders.sort(function (order1, order2) {
            return order1.name > order2.name ? 1 : -1;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this11 = this;

            var orders, _iterator2, _step2, order, products, product, customers, customer;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.orderStatusTypeOptions = Object.keys(this.orderStatusTypes).map(function (key) {
                      return _this11.orderStatusTypes[key];
                    }).filter(function (value) {
                      return typeof value !== 'string';
                    });
                    this.loading = true;
                    _context7.next = 4;
                    return this.orderService.getAllOrders();

                  case 4:
                    orders = _context7.sent;
                    this.allOrders = orders;
                    this.allOrders = this.allOrders.slice(0, 100);
                    _iterator2 = _createForOfIteratorHelper(this.allOrders);
                    _context7.prev = 8;

                    _iterator2.s();

                  case 10:
                    if ((_step2 = _iterator2.n()).done) {
                      _context7.next = 26;
                      break;
                    }

                    order = _step2.value;
                    _context7.next = 14;
                    return this.productService.getProduct(order.productid.toString());

                  case 14:
                    products = _context7.sent;
                    product = products[0];
                    order.name = product.name;
                    order.manufacturer = product.manufacturer;
                    order.price = product.price;
                    _context7.next = 21;
                    return this.customerService.getCustomer(order.customerid.toString());

                  case 21:
                    customers = _context7.sent;
                    customer = customers[0];
                    order.customerName = customer.firstname + ' ' + customer.lastname;

                  case 24:
                    _context7.next = 10;
                    break;

                  case 26:
                    _context7.next = 31;
                    break;

                  case 28:
                    _context7.prev = 28;
                    _context7.t0 = _context7["catch"](8);

                    _iterator2.e(_context7.t0);

                  case 31:
                    _context7.prev = 31;

                    _iterator2.f();

                    return _context7.finish(31);

                  case 34:
                    this.allOrders.sort(function (order1, order2) {
                      return order1.name > order2.name ? 1 : -1;
                    });
                    this.orders = this.allOrders;
                    this.loading = false;

                  case 37:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[8, 28, 31, 34]]);
          }));
        }
      }]);

      return OrderListComponent;
    }();

    OrderListComponent.ɵfac = function OrderListComponent_Factory(t) {
      return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]));
    };

    OrderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OrderListComponent,
      selectors: [["app-order-list"]],
      decls: 16,
      vars: 2,
      consts: [[1, "container-fluid"], ["class", "spinner", "role", "status", 4, "ngIf"], ["routerLink", "/order/new", 1, "btn", "btn-primary", "addOrder", "shadow-none"], ["action", "#", 1, "form-inline", 3, "submit"], ["type", "text", "placeholder", "Filter value", 1, "form-control"], ["filterString", ""], [1, "form-control"], ["filterSelection", ""], ["value", "name"], ["type", "submit", 1, "btn", "btn-primary", "shadow-none"], ["class", "row order-row", 3, "routerLink", 4, "ngFor", "ngForOf"], ["role", "status", 1, "spinner"], [1, "row", "order-row", 3, "routerLink"], [1, "col", "order-name-col"], [1, "title"], [1, "col", "d-none", "d-sm-block", "order-col"], ["src", "../../../assets/icons/status.png", 1, "icon"], ["src", "../../../assets/icons/order.png", 1, "icon"], [1, "col", "d-none", "d-lg-block", "order-col"], ["src", "../../../assets/icons/user.png", 1, "icon"]],
      template: function OrderListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderListComponent_div_1_Template, 1, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New order");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function OrderListComponent_Template_form_submit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70);

            var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            return ctx.filter(_r66.value, _r67.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OrderListComponent_div_15_Template, 20, 14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  margin: 2vw 2vw 2vw 0;\n  font-size: calc(12px + 1vw);\n  color: #d9eef5;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: calc(10px + 0.3vw);\n  font-weight: 400;\n}\n\n.icon-user[_ngcontent-%COMP%] {\n  height: calc(16px + 5vw);\n  display: inline-block;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin: 0 0.4vw 0 0;\n  width: 1vw;\n  height: 1vw;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n\n.order-row[_ngcontent-%COMP%] {\n  margin: 0 0 1vw 0;\n  width: 90vw;\n  border: 0.1vw dotted #b5dce9;\n  background: white;\n  opacity: 0.95;\n  transition: background-color 0.25s;\n  transition: all 0.25s;\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n\n.order-row[_ngcontent-%COMP%]:hover {\n  background: #b5dce9;\n  color: #2a4852;\n  border: 0.1vw dotted #b35e8f;\n  width: 88vw;\n  cursor: pointer;\n}\n\n.order-name-col[_ngcontent-%COMP%] {\n  margin: 0.5vw;\n}\n\n.order-data-col[_ngcontent-%COMP%] {\n  margin: 0.5vw;\n  padding: 0.5vw;\n  border-left: 1px dotted #d3eef7;\n}\n\n.order-row[_ngcontent-%COMP%]:nth-child(even) {\n  margin: 1vw 0 1vw 0;\n  box-shadow: 2vw 2vw 5vw black;\n}\n\n.order-row[_ngcontent-%COMP%]:nth-child(odd) {\n  margin: 1vw 0 1vw 0;\n  box-shadow: 2vw 2vw 5vw black;\n}\n\n.order-col[_ngcontent-%COMP%] {\n  border-left: 1px solid #d3eef7;\n  margin: 0.5vw;\n  padding: 0.5vw;\n  opacity: 0.9;\n}\n\n.form-control[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  font-size: calc(8px + 0.5vw);\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: #b35e8f;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: black;\n}\n\n.addOrder[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 60px;\n  width: 60px;\n  margin: 0px auto;\n  -webkit-animation: rotation 0.6s infinite linear;\n          animation: rotation 0.6s infinite linear;\n  border-left: 6px solid rgba(0, 174, 239, 0.15);\n  border-right: 6px solid rgba(0, 174, 239, 0.15);\n  border-bottom: 6px solid rgba(0, 174, 239, 0.15);\n  border-top: 6px solid rgba(0, 174, 239, 0.8);\n  border-radius: 100%;\n  z-index: 100;\n}\n\n.Processed[_ngcontent-%COMP%] {\n  padding: 0 0 1vw 0;\n  border-bottom: 0.2vw solid salmon;\n}\n\n.Initialized[_ngcontent-%COMP%] {\n  padding: 0 0 1vw 0;\n  border-bottom: 0.2vw solid goldenrod;\n}\n\n.Sent[_ngcontent-%COMP%] {\n  padding: 0 0 1vw 0;\n  border-bottom: 0.2vw solid lightgreen;\n}\n\n.Archived[_ngcontent-%COMP%] {\n  padding: 0 0 1vw 0;\n  border-bottom: 0.2vw solid lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXItbGlzdC9DOlxcUHJvamVrdGVcXEN1c3RvbWVyXFxjdXN0b21lcnMtZnJvbnRlbmRcXGN1c3RvbWVycy9zcmNcXGFwcFxcb3JkZXJcXG9yZGVyLWxpc3RcXG9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29yZGVyL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTs7RUFFRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7RUFDQSw4Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx1Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvb3JkZXIvb3JkZXItbGlzdC9vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIG1hcmdpbjogMnZ3IDJ2dyAydncgMDtcclxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDF2dyk7XHJcbiAgY29sb3I6ICNkOWVlZjU7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IGNhbGMoMTBweCArIDAuM3Z3KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uaWNvbi11c2VyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTZweCArIDV2dyk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luOiAwIDAuNHZ3IDAgMDtcclxuICB3aWR0aDogMXZ3O1xyXG4gIGhlaWdodDogMXZ3O1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG59XHJcblxyXG4ub3JkZXItcm93IHtcclxuICBtYXJnaW46IDAgMCAxdncgMDtcclxuICB3aWR0aDogOTB2dztcclxuICBib3JkZXI6IDAuMXZ3IGRvdHRlZCAjYjVkY2U5O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XHJcbn1cclxuXHJcbi5vcmRlci1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNiNWRjZTk7XHJcbiAgY29sb3I6ICMyYTQ4NTI7XHJcbiAgYm9yZGVyOiAwLjF2dyBkb3R0ZWQgI2IzNWU4ZjtcclxuICB3aWR0aDogODh2dztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vcmRlci1uYW1lLWNvbCB7XHJcbiAgbWFyZ2luOiAwLjV2dztcclxufVxyXG5cclxuLm9yZGVyLWRhdGEtY29sIHtcclxuICBtYXJnaW46IDAuNXZ3O1xyXG4gIHBhZGRpbmc6IDAuNXZ3O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICNkM2VlZjc7XHJcbn1cclxuXHJcbi5vcmRlci1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBtYXJnaW46IDF2dyAwIDF2dyAwO1xyXG4gIGJveC1zaGFkb3c6IDJ2dyAydncgNXZ3IGJsYWNrO1xyXG59XHJcblxyXG4ub3JkZXItcm93Om50aC1jaGlsZChvZGQpIHtcclxuICBtYXJnaW46IDF2dyAwIDF2dyAwO1xyXG4gIGJveC1zaGFkb3c6IDJ2dyAydncgNXZ3IGJsYWNrO1xyXG59XHJcblxyXG4ub3JkZXItY29sIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2VlZjc7XHJcbiAgbWFyZ2luOiAwLjV2dztcclxuICBwYWRkaW5nOiAwLjV2dztcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wsXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNiMzVlOGY7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uYWRkT3JkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAwLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYmEoMCwgMTc0LCAyMzksIDAuMTUpO1xyXG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHJnYmEoMCwgMTc0LCAyMzksIDAuMTUpO1xyXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2JhKDAsIDE3NCwgMjM5LCAwLjE1KTtcclxuICBib3JkZXItdG9wOiA2cHggc29saWQgcmdiYSgwLCAxNzQsIDIzOSwgMC44KTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLlByb2Nlc3NlZCB7XHJcbiAgcGFkZGluZzogMCAwIDF2dyAwO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMnZ3IHNvbGlkIHNhbG1vbjtcclxufVxyXG5cclxuLkluaXRpYWxpemVkIHtcclxuICBwYWRkaW5nOiAwIDAgMXZ3IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4ydncgc29saWQgZ29sZGVucm9kO1xyXG59XHJcblxyXG4uU2VudCB7XHJcbiAgcGFkZGluZzogMCAwIDF2dyAwO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMnZ3IHNvbGlkIGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbi5BcmNoaXZlZCB7XHJcbiAgcGFkZGluZzogMCAwIDF2dyAwO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMnZ3IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcclxufVxyXG4iLCJoMSB7XG4gIG1hcmdpbjogMnZ3IDJ2dyAydncgMDtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxdncpO1xuICBjb2xvcjogI2Q5ZWVmNTtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAwLjN2dyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pY29uLXVzZXIge1xuICBoZWlnaHQ6IGNhbGMoMTZweCArIDV2dyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmljb24ge1xuICBtYXJnaW46IDAgMC40dncgMCAwO1xuICB3aWR0aDogMXZ3O1xuICBoZWlnaHQ6IDF2dztcbn1cblxuLmZvcm0taW5saW5lIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG59XG5cbi5vcmRlci1yb3cge1xuICBtYXJnaW46IDAgMCAxdncgMDtcbiAgd2lkdGg6IDkwdnc7XG4gIGJvcmRlcjogMC4xdncgZG90dGVkICNiNWRjZTk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjk1O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xufVxuXG4ub3JkZXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I1ZGNlOTtcbiAgY29sb3I6ICMyYTQ4NTI7XG4gIGJvcmRlcjogMC4xdncgZG90dGVkICNiMzVlOGY7XG4gIHdpZHRoOiA4OHZ3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcmRlci1uYW1lLWNvbCB7XG4gIG1hcmdpbjogMC41dnc7XG59XG5cbi5vcmRlci1kYXRhLWNvbCB7XG4gIG1hcmdpbjogMC41dnc7XG4gIHBhZGRpbmc6IDAuNXZ3O1xuICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCAjZDNlZWY3O1xufVxuXG4ub3JkZXItcm93Om50aC1jaGlsZChldmVuKSB7XG4gIG1hcmdpbjogMXZ3IDAgMXZ3IDA7XG4gIGJveC1zaGFkb3c6IDJ2dyAydncgNXZ3IGJsYWNrO1xufVxuXG4ub3JkZXItcm93Om50aC1jaGlsZChvZGQpIHtcbiAgbWFyZ2luOiAxdncgMCAxdncgMDtcbiAgYm94LXNoYWRvdzogMnZ3IDJ2dyA1dncgYmxhY2s7XG59XG5cbi5vcmRlci1jb2wge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2VlZjc7XG4gIG1hcmdpbjogMC41dnc7XG4gIHBhZGRpbmc6IDAuNXZ3O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5mb3JtLWNvbnRyb2wsXG5idXR0b24ge1xuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAjYjM1ZThmO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5hZGRPcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBhbmltYXRpb246IHJvdGF0aW9uIDAuNnMgaW5maW5pdGUgbGluZWFyO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYmEoMCwgMTc0LCAyMzksIDAuMTUpO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCByZ2JhKDAsIDE3NCwgMjM5LCAwLjE1KTtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYmEoMCwgMTc0LCAyMzksIDAuMTUpO1xuICBib3JkZXItdG9wOiA2cHggc29saWQgcmdiYSgwLCAxNzQsIDIzOSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uUHJvY2Vzc2VkIHtcbiAgcGFkZGluZzogMCAwIDF2dyAwO1xuICBib3JkZXItYm90dG9tOiAwLjJ2dyBzb2xpZCBzYWxtb247XG59XG5cbi5Jbml0aWFsaXplZCB7XG4gIHBhZGRpbmc6IDAgMCAxdncgMDtcbiAgYm9yZGVyLWJvdHRvbTogMC4ydncgc29saWQgZ29sZGVucm9kO1xufVxuXG4uU2VudCB7XG4gIHBhZGRpbmc6IDAgMCAxdncgMDtcbiAgYm9yZGVyLWJvdHRvbTogMC4ydncgc29saWQgbGlnaHRncmVlbjtcbn1cblxuLkFyY2hpdmVkIHtcbiAgcGFkZGluZzogMCAwIDF2dyAwO1xuICBib3JkZXItYm90dG9tOiAwLjJ2dyBzb2xpZCBsaWdodHNreWJsdWU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-order-list',
          templateUrl: './order-list.component.html',
          styleUrls: ['./order-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
        }, {
          type: src_app_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: src_app_shared_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _shared_model_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/model/user */
    "./src/app/shared/model/user.ts");
    /* harmony import */


    var _shared_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/authentication/auth.service */
    "./src/app/shared/services/authentication/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authService, router) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
          this.user = new _shared_model_user__WEBPACK_IMPORTED_MODULE_2__["User"](uuid, null, null, null, null, null);
        }
      }, {
        key: "register",
        value: function register() {
          var _this12 = this;

          this.authService.register(this.user).then(function (response) {
            _this12.router.navigate(['login']);
          })["catch"](function (error) {
            _this12.errorMessage = 'An error occured during registration.';
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 22,
      vars: 6,
      consts: [[1, "form-signin"], ["for", "inputusername", 1, "sr-only"], ["type", "text", "name", "username", "id", "inputusername", "placeholder", "User name", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "name", "password", "id", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputfirstname", 1, "sr-only"], ["type", "text", "name", "firstname", "id", "inputfirstname", "placeholder", "First name", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputlastname", 1, "sr-only"], ["type", "text", "name", "lastname", "id", "inputlastname", "placeholder", "Last name", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputemail", 1, "sr-only"], ["type", "text", "name", "email", "id", "inputemail", "placeholder", "E-Mail", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"], [1, "error"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.user.firstname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.user.lastname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E-Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_18_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.firstname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.lastname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  margin: 2vw 2vw 2vw 0;\n  font-size: calc(12px + 1vw);\n  color: #d9eef5;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0 0 0 1vw;\n  width: calc(200px + 8vw);\n  border-left: 0.4vw solid #b5dce9;\n  border-radius: 0;\n  color: black;\n  font-size: calc(8px + 0.5vw);\n  opacity: 0.9;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: calc(200px + 8vw);\n  background-color: #b35e8f;\n  border: 0;\n  border-radius: 0;\n  font-size: 2vw;\n  font-size: calc(8px + 0.5vw);\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background: black;\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  background: lightgray;\n}\n\n.error[_ngcontent-%COMP%] {\n  margin: 0.5vw;\n  color: white;\n  font-size: calc(12px + 0.5vw);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFByb2pla3RlXFxDdXN0b21lclxcY3VzdG9tZXJzLWZyb250ZW5kXFxjdXN0b21lcnMvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIG1hcmdpbjogMnZ3IDJ2dyAydncgMDtcclxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDF2dyk7XHJcbiAgY29sb3I6ICNkOWVlZjU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDF2dztcclxuICB3aWR0aDogY2FsYygyMDBweCArIDh2dyk7XHJcbiAgYm9yZGVyLWxlZnQ6IDAuNHZ3IHNvbGlkICNiNWRjZTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiBjYWxjKDIwMHB4ICsgOHZ3KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjM1ZThmO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAwLjV2dyk7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgbWFyZ2luOiAwLjV2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjV2dyk7XHJcbn1cclxuIiwiaDEge1xuICBtYXJnaW46IDJ2dyAydncgMnZ3IDA7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcbiAgY29sb3I6ICNkOWVlZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxdnc7XG4gIHdpZHRoOiBjYWxjKDIwMHB4ICsgOHZ3KTtcbiAgYm9yZGVyLWxlZnQ6IDAuNHZ3IHNvbGlkICNiNWRjZTk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiBjYWxjKDhweCArIDAuNXZ3KTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IGNhbGMoMjAwcHggKyA4dncpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjM1ZThmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBmb250LXNpemU6IGNhbGMoOHB4ICsgMC41dncpO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5idG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG5cbi5lcnJvciB7XG4gIG1hcmdpbjogMC41dnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjV2dyk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/enum/gender.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/enum/gender.ts ***!
    \***************************************/

  /*! exports provided: Gender */

  /***/
  function srcAppSharedEnumGenderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gender", function () {
      return Gender;
    });

    var Gender;

    (function (Gender) {
      Gender["Male"] = "Male";
      Gender["Female"] = "Female";
      Gender["Other"] = "Other";
    })(Gender || (Gender = {}));
    /***/

  },

  /***/
  "./src/app/shared/enum/order-status.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/enum/order-status.ts ***!
    \*********************************************/

  /*! exports provided: OrderStatus */

  /***/
  function srcAppSharedEnumOrderStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderStatus", function () {
      return OrderStatus;
    });

    var OrderStatus;

    (function (OrderStatus) {
      OrderStatus[OrderStatus["Initialized"] = 0] = "Initialized";
      OrderStatus[OrderStatus["Sent"] = 1] = "Sent";
      OrderStatus[OrderStatus["Processed"] = 2] = "Processed";
      OrderStatus[OrderStatus["Archived"] = 3] = "Archived";
    })(OrderStatus || (OrderStatus = {}));
    /***/

  },

  /***/
  "./src/app/shared/enum/title.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/enum/title.ts ***!
    \**************************************/

  /*! exports provided: Title */

  /***/
  function srcAppSharedEnumTitleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Title", function () {
      return Title;
    });

    var Title;

    (function (Title) {
      Title["Mr"] = "Mr";
      Title["Mrs"] = "Mrs";
      Title["Ms"] = "Ms";
      Title["Dr"] = "Dr";
      Title["Rev"] = "Rev";
      Title["Honorable"] = "Honorable";
    })(Title || (Title = {}));
    /***/

  },

  /***/
  "./src/app/shared/model/customer.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/model/customer.ts ***!
    \******************************************/

  /*! exports provided: Customer */

  /***/
  function srcAppSharedModelCustomerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Customer", function () {
      return Customer;
    });

    var Customer = function Customer(id, firstname, lastname, title, gender, job, birthdate, streetaddress, postalcode, city, country, currency, phone, email) {
      _classCallCheck(this, Customer);

      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.title = title;
      this.gender = gender;
      this.job = job;
      this.birthdate = birthdate;
      this.streetaddress = streetaddress;
      this.postalcode = postalcode;
      this.city = city;
      this.country = country;
      this.currency = currency;
      this.phone = phone;
      this.email = email;
    };
    /***/

  },

  /***/
  "./src/app/shared/model/order.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/model/order.ts ***!
    \***************************************/

  /*! exports provided: Order */

  /***/
  function srcAppSharedModelOrderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });

    var Order = function Order(id, customerid, productid, date, status, amount, timestamp) {
      _classCallCheck(this, Order);

      this.id = id;
      this.customerid = customerid;
      this.productid = productid;
      this.date = date;
      this.status = status;
      this.amount = amount;
      this.timestamp = timestamp;
    };
    /***/

  },

  /***/
  "./src/app/shared/model/user.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/model/user.ts ***!
    \**************************************/

  /*! exports provided: User */

  /***/
  function srcAppSharedModelUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(id, firstname, lastname, password, username, email) {
      _classCallCheck(this, User);

      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.password = password;
      this.username = username;
      this.email = email;
    };
    /***/

  },

  /***/
  "./src/app/shared/services/authentication/auth-guard.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/services/authentication/auth-guard.service.ts ***!
    \**********************************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppSharedServicesAuthenticationAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/services/authentication/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(authService, route) {
        _classCallCheck(this, AuthGuardService);

        this.authService = authService;
        this.route = route;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isAuthenticated()) {
            return true;
          }

          this.route.navigate(['login']);
          return false;
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/authentication/auth.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/services/authentication/auth.service.ts ***!
    \****************************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthenticationAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.userAuthenticated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var userId = localStorage.getItem('userId');

          if (userId && JSON.parse(userId)) {
            return true;
          }

          return false;
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('userId');
          this.userAuthenticated.emit(false);
        }
      }, {
        key: "setUserInfo",
        value: function setUserInfo(userId) {
          localStorage.setItem('userId', JSON.stringify(userId));
          this.currentUserId = userId;
          this.userAuthenticated.emit(true);
        }
      }, {
        key: "getCurrentUserId",
        value: function getCurrentUserId() {
          var userIdJSON = localStorage.getItem('userId');
          var userId = JSON.parse(userIdJSON);
          return userId.user;
        }
      }, {
        key: "validate",
        value: function validate(email, password) {
          return this.http.post('https://customers-backend.herokuapp.com/api/authenticate', {
            username: email,
            password: password
          }).toPromise();
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post('https://customers-backend.herokuapp.com/api/register', user).toPromise();
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/connection/connection.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/services/connection/connection.service.ts ***!
    \******************************************************************/

  /*! exports provided: ConnectionService */

  /***/
  function srcAppSharedServicesConnectionConnectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionService", function () {
      return ConnectionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ConnectionService = /*#__PURE__*/function () {
      function ConnectionService(http) {
        _classCallCheck(this, ConnectionService);

        this.http = http;
        this.connectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.InitializeConnectionCheck();
      }

      _createClass(ConnectionService, [{
        key: "checkConnection",
        value: function checkConnection() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var checkConnectionResult;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.http.get('https://customers-backend.herokuapp.com/api/connect').toPromise().then(function () {
                      checkConnectionResult = true;
                    })["catch"](function (error) {
                      checkConnectionResult = false;
                    });

                  case 2:
                    return _context8.abrupt("return", checkConnectionResult);

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "goOffline",
        value: function goOffline() {
          this.connectionChanged.emit(false);
          clearInterval(this.interval);
        }
      }, {
        key: "goOnline",
        value: function goOnline() {
          this.InitializeConnectionCheck();
        }
      }, {
        key: "InitializeConnectionCheck",
        value: function InitializeConnectionCheck() {
          var _this13 = this;

          this.interval = setInterval(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var connectionCheckResult;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.checkConnection();

                    case 2:
                      connectionCheckResult = _context9.sent;
                      this.connectionChanged.emit(connectionCheckResult);

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }, 5000);
        }
      }]);

      return ConnectionService;
    }();

    ConnectionService.ɵfac = function ConnectionService_Factory(t) {
      return new (t || ConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ConnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ConnectionService,
      factory: ConnectionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConnectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/customer/customer.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/customer/customer.service.ts ***!
    \**************************************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppSharedServicesCustomerCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CustomerService = /*#__PURE__*/function () {
      function CustomerService(http) {
        _classCallCheck(this, CustomerService);

        this.http = http;
      }

      _createClass(CustomerService, [{
        key: "getAllCustomers",
        value: function getAllCustomers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.http.get('https://customers-backend.herokuapp.com/api/customers').toPromise();

                  case 2:
                    return _context10.abrupt("return", _context10.sent);

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getCustomer",
        value: function getCustomer(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.http.get('https://customers-backend.herokuapp.com/api/customers/' + id).toPromise();

                  case 2:
                    return _context11.abrupt("return", _context11.sent);

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "insertCustomer",
        value: function insertCustomer(Customer) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.http.post('https://customers-backend.herokuapp.com/api/customers/', Customer).toPromise();

                  case 2:
                    return _context12.abrupt("return", _context12.sent);

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(Customer) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.http.put('https://customers-backend.herokuapp.com/api/customers/' + Customer.id, Customer).toPromise();

                  case 2:
                    return _context13.abrupt("return", _context13.sent);

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.http["delete"]('https://customers-backend.herokuapp.com/api/customers/' + id).toPromise();

                  case 2:
                    return _context14.abrupt("return", _context14.sent);

                  case 3:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }]);

      return CustomerService;
    }();

    CustomerService.ɵfac = function CustomerService_Factory(t) {
      return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CustomerService,
      factory: CustomerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/database/indexed-database.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/services/database/indexed-database.service.ts ***!
    \**********************************************************************/

  /*! exports provided: IndexedDatabaseService */

  /***/
  function srcAppSharedServicesDatabaseIndexedDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexedDatabaseService", function () {
      return IndexedDatabaseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IndexedDatabaseService = /*#__PURE__*/function () {
      function IndexedDatabaseService() {
        _classCallCheck(this, IndexedDatabaseService);
      }

      _createClass(IndexedDatabaseService, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var db;
          var dbReq = indexedDB.open('customersDB', 2);

          dbReq.onupgradeneeded = function (event) {
            db = event.target.result;
            db.createObjectStore('customer', {
              autoIncrement: true
            });
            db.createObjectStore('order', {
              autoIncrement: true
            });
          };

          dbReq.onsuccess = function (event) {
            db = event.target.result;
          };

          dbReq.onerror = function (event) {
            alert('error opening database ' + event.target.errorCode);
          };
        }
      }, {
        key: "storeItemsInDatabase",
        value: function storeItemsInDatabase(type, items) {
          var indexedDB = window.indexedDB;
          var open = indexedDB.open('customersDB', 2);

          open.onsuccess = function () {
            var db = open.result;
            var transaction = db.transaction([type], 'readwrite');
            var store = transaction.objectStore(type);
            store.clear();

            var _iterator3 = _createForOfIteratorHelper(items),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                store.add(item);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            transaction.oncomplete = function () {
              console.log('All ' + type + 's stored in IndexedDB.');
            };

            transaction.onerror = function (event) {
              alert('Error storing ' + type + ' ' + event.target.errorCode);
            };
          };
        }
      }, {
        key: "addCustomersToDatabase",
        value: function addCustomersToDatabase(customers) {
          this.storeItemsInDatabase('customer', customers);
        }
      }, {
        key: "addOrdersToDatabase",
        value: function addOrdersToDatabase(orders) {
          this.storeItemsInDatabase('order', orders);
        }
      }]);

      return IndexedDatabaseService;
    }();

    IndexedDatabaseService.ɵfac = function IndexedDatabaseService_Factory(t) {
      return new (t || IndexedDatabaseService)();
    };

    IndexedDatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IndexedDatabaseService,
      factory: IndexedDatabaseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexedDatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/order/order.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/services/order/order.service.ts ***!
    \********************************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppSharedServicesOrderOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../product/product.service */
    "./src/app/shared/services/product/product.service.ts");

    var OrderService = /*#__PURE__*/function () {
      function OrderService(http, productService) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.productService = productService;
      }

      _createClass(OrderService, [{
        key: "getAllOrders",
        value: function getAllOrders() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.http.get('https://customers-backend.herokuapp.com/api/orders').toPromise();

                  case 2:
                    return _context15.abrupt("return", _context15.sent);

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "getAllOrdersOfCustomer",
        value: function getAllOrdersOfCustomer(customerid) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var ordersOfCustomer, _iterator4, _step4, order, products, product;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.http.get('https://customers-backend.herokuapp.com/api/ordersOfCustomer/' + customerid).toPromise();

                  case 2:
                    ordersOfCustomer = _context16.sent;
                    _iterator4 = _createForOfIteratorHelper(ordersOfCustomer);
                    _context16.prev = 4;

                    _iterator4.s();

                  case 6:
                    if ((_step4 = _iterator4.n()).done) {
                      _context16.next = 17;
                      break;
                    }

                    order = _step4.value;
                    _context16.next = 10;
                    return this.productService.getProduct(order.productid.toString());

                  case 10:
                    products = _context16.sent;
                    product = products[0];
                    order.name = product.name;
                    order.manufacturer = product.manufacturer;
                    order.price = product.price;

                  case 15:
                    _context16.next = 6;
                    break;

                  case 17:
                    _context16.next = 22;
                    break;

                  case 19:
                    _context16.prev = 19;
                    _context16.t0 = _context16["catch"](4);

                    _iterator4.e(_context16.t0);

                  case 22:
                    _context16.prev = 22;

                    _iterator4.f();

                    return _context16.finish(22);

                  case 25:
                    return _context16.abrupt("return", ordersOfCustomer);

                  case 26:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this, [[4, 19, 22, 25]]);
          }));
        }
      }, {
        key: "getOrder",
        value: function getOrder(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.http.get('https://customers-backend.herokuapp.com/api/orders/' + id).toPromise();

                  case 2:
                    return _context17.abrupt("return", _context17.sent);

                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "insertOrder",
        value: function insertOrder(order) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.http.post('https://customers-backend.herokuapp.com/api/orders/', order).toPromise();

                  case 2:
                    return _context18.abrupt("return", _context18.sent);

                  case 3:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "updateOrder",
        value: function updateOrder(order) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    return _context19.abrupt("return", this.http.put('https://customers-backend.herokuapp.com/api/orders/' + order.id, order).toPromise());

                  case 1:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    return _context20.abrupt("return", this.http["delete"]('https://customers-backend.herokuapp.com/api/orders/' + id).toPromise());

                  case 1:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }]);

      return OrderService;
    }();

    OrderService.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]));
    };

    OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/product/product.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/product/product.service.ts ***!
    \************************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppSharedServicesProductProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
      }

      _createClass(ProductService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    return _context21.abrupt("return", this.http.get('https://customers-backend.herokuapp.com/api/products').toPromise());

                  case 1:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    return _context22.abrupt("return", this.http.get('https://customers-backend.herokuapp.com/api/products/' + id).toPromise());

                  case 1:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/user/user.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/user/user.service.ts ***!
    \******************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getUser",
        value: function getUser(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    return _context23.abrupt("return", this.http.get('https://customers-backend.herokuapp.com/api/users/' + id).toPromise());

                  case 1:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/customer/customer.service */
    "./src/app/shared/services/customer/customer.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_database_indexed_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/database/indexed-database.service */
    "./src/app/shared/services/database/indexed-database.service.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _services_database_indexed_database_service__WEBPACK_IMPORTED_MODULE_4__["IndexedDatabaseService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
          providers: [_services_customer_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _services_database_indexed_database_service__WEBPACK_IMPORTED_MODULE_4__["IndexedDatabaseService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.object;
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)();
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      inputs: {
        object: "object"
      },
      decls: 9,
      vars: 4,
      consts: [["src", "../../../assets/icons/user.png", 1, "icon"], ["src", "../../../assets/icons/counter.png", 1, "icon"], ["src", "../../../assets/icons/mail.png", 1, "icon"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.firstname, " ", ctx.user.lastname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, "");
        }
      },
      styles: [".icon[_ngcontent-%COMP%] {\n  margin: 0 0.6vw 0 0;\n  width: calc(12px + 0.5vw);\n  height: calc(12px + 0.5vw);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9DOlxcUHJvamVrdGVcXEN1c3RvbWVyXFxjdXN0b21lcnMtZnJvbnRlbmRcXGN1c3RvbWVycy9zcmNcXGFwcFxcdXNlclxcdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgbWFyZ2luOiAwIDAuNnZ3IDAgMDtcclxuICB3aWR0aDogY2FsYygxMnB4ICsgMC41dncpO1xyXG4gIGhlaWdodDogY2FsYygxMnB4ICsgMC41dncpO1xyXG59XHJcbiIsIi5pY29uIHtcbiAgbWFyZ2luOiAwIDAuNnZ3IDAgMDtcbiAgd2lkdGg6IGNhbGMoMTJweCArIDAuNXZ3KTtcbiAgaGVpZ2h0OiBjYWxjKDEycHggKyAwLjV2dyk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html',
          styleUrls: ['./user.component.scss']
        }]
      }], function () {
        return [];
      }, {
        object: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Projekte\Customer\customers-frontend\customers\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map