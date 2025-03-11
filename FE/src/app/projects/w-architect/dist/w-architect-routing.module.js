"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WArchitectRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes_constant_1 = require("src/app/shared/constants/routes.constant");
var w_architect_component_1 = require("./w-architect.component");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: routes_constant_1.W_ROUTES.HOME
    },
    {
        path: '',
        component: w_architect_component_1.WArchitectComponent,
        children: [
            {
                path: routes_constant_1.W_ROUTES.HOME,
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/home/w-architect-home.module'); }).then(function (m) { return m.WArchitectHomeModule; });
                }
            },
            {
                path: routes_constant_1.W_ROUTES.CONTACT_US,
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/contact-us/w-architect-contact-us.module'); }).then(function (m) { return m.WArchitectContactUsModule; });
                }
            },
            {
                path: routes_constant_1.W_ROUTES.PROJECTS + '/:id',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/projects/w-architect-projects.module'); }).then(function (m) { return m.WArchitectProjectsModule; });
                }
            },
            {
                path: routes_constant_1.W_ROUTES.DETAILS + '/:id',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('./pages/project-details/w-architect-project-details.module'); }).then(function (m) { return m.WArchitectProjectDetailsModule; });
                }
            },
        ]
    },
];
var WArchitectRoutingModule = /** @class */ (function () {
    function WArchitectRoutingModule() {
    }
    WArchitectRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], WArchitectRoutingModule);
    return WArchitectRoutingModule;
}());
exports.WArchitectRoutingModule = WArchitectRoutingModule;
