"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WPropertyRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes_constant_1 = require("src/app/shared/constants/routes.constant");
var w_property_component_1 = require("./w-property.component");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: routes_constant_1.W_ROUTES.HOME
    },
    {
        path: '',
        component: w_property_component_1.WPropertyComponent,
        children: [
            {
                path: routes_constant_1.W_ROUTES.HOME,
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/home/w-property-home.module'); }).then(function (m) { return m.WPropertyHomeModule; });
                }
            },
            {
                path: routes_constant_1.W_ROUTES.CONTACT_US,
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/contact-us/w-property-contact-us.module'); }).then(function (m) { return m.WPropertyContactUsModule; });
                }
            },
            {
                path: routes_constant_1.W_ROUTES.ABOUT_US,
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/about-us/w-property-about-us.module'); }).then(function (m) { return m.WPropertyAboutUsModule; });
                }
            },
            {
                path: routes_constant_1.W_ROUTES.FEEDBACKS,
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/feedbacks/w-property-feedbacks.module'); }).then(function (m) { return m.WPropertyFeedbacksModule; });
                }
            },
            {
                path: routes_constant_1.W_ROUTES.PROJECTS,
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/projects/w-property-projects.module'); }).then(function (m) { return m.WPropertyProjectsModule; });
                }
            },
            {
                path: routes_constant_1.W_ROUTES.SUBMIT_REQUEST,
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/submit-request/w-property-submit-request.module'); }).then(function (m) { return m.WPropertySubmitRequestModule; });
                }
            },
        ]
    },
];
var WPropertyRoutingModule = /** @class */ (function () {
    function WPropertyRoutingModule() {
    }
    WPropertyRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], WPropertyRoutingModule);
    return WPropertyRoutingModule;
}());
exports.WPropertyRoutingModule = WPropertyRoutingModule;
