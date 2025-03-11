"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WArchitectNavbarComponent = void 0;
var core_1 = require("@angular/core");
var image_paths_constant_1 = require("src/app/shared/constants/image-paths.constant");
var routes_constant_1 = require("src/app/shared/constants/routes.constant");
var WArchitectNavbarComponent = /** @class */ (function () {
    function WArchitectNavbarComponent(route) {
        this.route = route;
        this.images = image_paths_constant_1.IMAGES;
        this.routes = routes_constant_1.W_ROUTES;
        this.sidebarVisible = false;
    }
    WArchitectNavbarComponent.prototype.routeToPage = function (route) {
        var _this = this;
        this.route.navigateByUrl(route);
        setTimeout(function () {
            _this.sidebarVisible = false;
        }, 500);
    };
    WArchitectNavbarComponent.prototype.openSidebar = function () {
        this.sidebarVisible = true;
    };
    WArchitectNavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-w-architect-navbar',
            templateUrl: './w-architect-navbar.component.html',
            styleUrls: ['./w-architect-navbar.component.scss']
        })
    ], WArchitectNavbarComponent);
    return WArchitectNavbarComponent;
}());
exports.WArchitectNavbarComponent = WArchitectNavbarComponent;
