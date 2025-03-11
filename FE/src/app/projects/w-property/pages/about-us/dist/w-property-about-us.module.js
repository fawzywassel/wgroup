"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WPropertyAboutUsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var w_property_about_us_routing_module_1 = require("./w-property-about-us-routing.module");
var w_property_about_us_component_1 = require("./w-property-about-us.component");
var w_property_shared_module_1 = require("../../components/w-property-shared.module");
var global_shared_module_1 = require("src/app/shared/global-shared.module");
var WPropertyAboutUsModule = /** @class */ (function () {
    function WPropertyAboutUsModule() {
    }
    WPropertyAboutUsModule = __decorate([
        core_1.NgModule({
            declarations: [w_property_about_us_component_1.WPropertyAboutUsComponent],
            imports: [
                common_1.CommonModule,
                w_property_about_us_routing_module_1.WPropertyAboutUsRoutingModule,
                w_property_shared_module_1.WPropertySharedModule,
                global_shared_module_1.GlobalSharedModule,
            ]
        })
    ], WPropertyAboutUsModule);
    return WPropertyAboutUsModule;
}());
exports.WPropertyAboutUsModule = WPropertyAboutUsModule;
