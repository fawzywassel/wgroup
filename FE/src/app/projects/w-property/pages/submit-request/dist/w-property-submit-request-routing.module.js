"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WPropertySubmitRequestRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var w_property_submit_request_component_1 = require("./w-property-submit-request.component");
var routes = [
    {
        path: '',
        component: w_property_submit_request_component_1.WPropertySubmitRequestComponent
    },
];
var WPropertySubmitRequestRoutingModule = /** @class */ (function () {
    function WPropertySubmitRequestRoutingModule() {
    }
    WPropertySubmitRequestRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], WPropertySubmitRequestRoutingModule);
    return WPropertySubmitRequestRoutingModule;
}());
exports.WPropertySubmitRequestRoutingModule = WPropertySubmitRequestRoutingModule;
