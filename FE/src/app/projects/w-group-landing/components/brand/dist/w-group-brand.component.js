"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WGroupBrandComponent = void 0;
var core_1 = require("@angular/core");
var WGroupBrandComponent = /** @class */ (function () {
    function WGroupBrandComponent(route) {
        this.route = route;
    }
    WGroupBrandComponent.prototype.routeToPage = function () {
        this.route.navigateByUrl(this.details.link);
    };
    __decorate([
        core_1.Input()
    ], WGroupBrandComponent.prototype, "details");
    WGroupBrandComponent = __decorate([
        core_1.Component({
            selector: 'app-w-group-brand',
            templateUrl: './w-group-brand.component.html',
            styleUrls: ['./w-group-brand.component.scss']
        })
    ], WGroupBrandComponent);
    return WGroupBrandComponent;
}());
exports.WGroupBrandComponent = WGroupBrandComponent;
